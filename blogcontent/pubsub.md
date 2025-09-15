---
title: "Pub/Sub"
date: "2025-08-15T00:00:00-05:00"
summary: "Pub/Sub messaging in GCP."
bannerHeader: "pubsub-components.png"
bannerSubtext: "Pub/Sub architecture"
---

I love using [Pub/Sub](https://cloud.google.com/pubsub/docs/pubsub-basics) in GCP as a light weight messaging service to quickly pass data between different parts of a large complex pipeline. It is powerful, flexible and easy to use.

It is also a great way to experiment with an existing pipeline without messing things up. For example, a new subscription can be attached to an existing topic and that subscription can be tied to a new experimental operation without interfering with the existing pipeline.

There are a few things one has to be careful with and I ran into one of these earlier. Consider the simple pub/sub scenario below:

```shell
# Create a pub/sub topic
gcloud pubsub topics create my-topic

# Create a subscription
gcloud pubsub subscriptions create my-sub --topic my-topic

# Publish two messages to the topic
gcloud pubsub topics publish my-topic --message "First message!"
gcloud pubsub topics publish my-topic --message "Second message!"

```

And here's a simple Go program that consumes the messages:

```go

package main
import (
    "context"
    "fmt"
    "log"
    "time"

    "cloud.google.com/go/pubsub"
)

func main() {
    ctx := context.Background()
    client, err := pubsub.NewClient(ctx, "my-project-id")
    if err != nil {
        log.Fatalf("Failed to create client: %v", err)
    }
    defer client.Close()

    topic := client.Topic("my-topic")
    sub := client.Subscription("my-sub")

    // Receive messages for 10 seconds.
    ctx, cancel := context.WithTimeout(ctx, 10*time.Second)
    defer cancel()
    err = sub.Receive(ctx, func(ctx context.Context, msg *pubsub.Message) {
        fmt.Printf("Got message: %q\n", string(msg.Data))
        msg.Ack()
    })
    if err != nil {
        log.Fatal(err)
    }
}

```
