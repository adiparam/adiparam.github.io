---
title: "Vibe Coding"
date: "2025-07-31T00:00:00-05:00"
summary: "A short post about the concept of 'vibe coding'."
bannerHeader: "vibecoding.png"
bannerSubtext: "Created using Nano Banana"
---

I have been a vibe-coding skeptic for a while now but I created a large portion of this website using LLMs and so this seems as good a topic as any to kick things off.

My first real foray with the agent mode in Copilot involved Workflow Identity Federation in Java which didn't really end well but that's a story for another day. Suffice to say all three models I tried (Sonnet 3.7, Gemini 2.5 Flash, o3-mini) ended up hallucinating key functions that were non-existant and I eventually had to figure it out by *(shudder)* reading documentation.

But here's the rub - I was already quite familiar with the tech I was working with so I knew what exactly to Google, and whether the results pass the smell test. It seemed to me that coding agents may not be the best option while navigating a complex codebase and making changes -  especially if you're familiar with both the technology and the codebase. 

Being an infrastructure engineer for the past several years, I'm not very familiar with Typescript and even less with CSS and I've got to say I'm slowly coming around. I started off with a simple prompt to Copilot in Agent mode:

```
Create a personal profile page for Aditya Paramatmuni using react and vite.
Make the page use a dark background with a blue to black gradiant.
Make a navigation bar at the top with two sections: Home and Blog.

Add the following work experience in the main section:
...my work experience...

Add a bottom bar with links to the following social media profiles with their
corresponding logos:
* LinkedIn: linkedin.com/in/adiparam
* Github: https://github.com/adiparam
* Bluesky: https://bsky.app/profile/adityaparamatmuni.com
```

I made some decisions before prompting: React and Vite and hosting this on Github pages but I've got to say Copilot nailed it. I was really impressed with the colors it chose for the UI elements and it did a great job of getting the basic navigation working. The CSS it generated seemed a little verbose but I'll fix that later. I've got a good framework to start with but it wasn't quite ready yet.

The first change I had to make was the navigation did not quite work when deployed to Github pages. Apparently it is a [known issue](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing) and using a HashRouter is one option. I decided to use Google's [Jules](https://jules.google/) coding agent to fix this and prompted it to switch to use the HashRouter. This is what it [came up](https://github.com/adiparam/adiparam.github.io/pull/6/commits/71374b70cc375996ee9cde514a8b9ea07b3be87e) with:

```js
- import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
+ import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
```

🤨

I guess anyone familiar with this stuff would have known this is a drop-in replacement and didn't have to waste LLM cycles. Anyway this worked.

The final piece for now was to support blog posts and here I decided to use markdown files as a headless CMS and asked Copilot to make the changes. This time it was not quite as successful but it was very close. One thing I like about Copilot agent mode is it pauses and waits for confirmation whenever it has to run a terminal command (like installing npm packages). It spent a few minutes and gave up after running into errors which I ended up fixing without much trouble.

So in conclusion I do plan to use coding agents especially if a combination of these hold true:
 - I'm not very familiar with the tech stack in question
 - I'm creating something from scratch instead of modifying a complex system
 - The stakes are low

On a related note, the image generation tools are fantastic. [Nano banana](https://gemini.google/overview/image-generation/) was released recently and when opened it suggested this prompt that I figured is a great fit for this post:

```
Create a beautiful image of the phrase "Vibe Coding" made from 
exploding pastel paint underwater, pastel background
```

