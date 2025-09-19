---
title: "Pub/Sub"
date: "2025-08-15T00:00:00-05:00"
summary: "Pub/Sub messaging in GCP."
bannerHeader: "pubsub-components.png"
bannerSubtext: "Pub/Sub architecture"
---

I love using [Pub/Sub](https://cloud.google.com/pubsub/docs/pubsub-basics) in GCP as a light weight messaging service to quickly pass data between different parts of a large complex pipeline. It is powerful, flexible and easy to use.

It is also a great way to experiment with an existing pipeline without messing things up. For example, a new subscription can be attached to an existing topic and that subscription can be tied to a new experimental operation without interfering with the existing pipeline.

There are a few things one has to be careful with and I ran into one of these earlier. The issue lies in the fact that a subscription is different from a subscriber. If multiple subscribers pull from a single subscription, Pub/Sub will randomly deliver to one of those. Consider the simple pub/sub scenario below:

```shell
# Create a pub/sub topic
gcloud pubsub topics create my-topic

# Create a subscription
gcloud pubsub subscriptions create my-sub --topic my-topic

# Publish two messages to the topic
gcloud pubsub topics publish my-topic --message "First"
gcloud pubsub topics publish my-topic --message "Second"

```

And here's a simple Go function that waits for a specific (`expected`) message and processes that message:

```go
func consume(ctx context.Context,
    client *pubsub.Client,
    expected string,
    wg *sync.WaitGroup) {
    defer wg.Done()

    // Receive messages for 10 seconds.
    ctx, cancel := context.WithTimeout(ctx, 10*time.Second)
    defer cancel()

    sub := client.Subscription("my-sub")
    sub.ReceiveSettings.MaxExtension = 10 * time.Second

    sub.Receive(ctx, func(ctx context.Context, msg *pubsub.Message) {
        m := string(msg.Data)
        if m == expected {
            fmt.Printf("Acking message:%q.\n", m)
            // Do some processing and then ack the message.
            msg.Ack()
            // Immediately terminate instead of waiting the full 10 seconds.
            cancel()
        } else {
            fmt.Printf("Not Acking message:%q.\n", m)
        }
    })
}

```

Now let's use two subscribers to pull from the subscription. They will each expect the strings "First" and "Second" respectively:

```go
func main() {
    ctx := context.Background()
    client, _ := pubsub.NewClient(ctx, "<my-project-id>")
    defer client.Close()

    // Wait for both subscribers to complete.
    var wg sync.WaitGroup
    wg.Add(1)
    go consume(ctx, client, "First", &wg)

    wg.Add(1)
    go consume(ctx, client, "Second", &wg)

    wg.Wait()
}
```

So the two subscribers will wait until they receive their expected messages, Ack them and terminate and so everything should work fine. Right?

```shell
$ go run test.go

Acking message:"First".
Acking message:"Second".
```

Perfect. So what's wrong? Well it turns out if you run this program a few times, you will sometimes see this happen and the program terminates after timing out.

```shell
$ go run test.go

Acking message:"Second".
Not Acking message:"First".
```

😕

It looks like one of the subscribers (the one that's expecting "Second") got both the messages. It acked the first and ignored the second and the other subscriber did not read either messages within the 10 seconds. Given this, you can probably spot the error in the `consume` function. When it received a message it did not expect, it just ignored the message instead of Nacking it. Let's `Nack` it and see what happens:

```go
        else {
            fmt.Printf("Not Acking message:%q.\n", m)
            msg.Nack()
        }
```

And now the program runs correctly every single time. Admittedly, it's easy to figure out the issue with this contrived example but imagine 100s of messages flying by with random UUIDs as a payload and a dozen subscriptions with a handful of subscribers each with complex processing logic that failed occassionally because of this bug. It would have been a shame if something like that happened and it had taken me way too long to figure out the issue.

Anyway the moral of the story is you should try to use a single subscriber for each subscription. If you have to use multiple subscribers, then make sure that you either Ack or Nack every single message you read.
