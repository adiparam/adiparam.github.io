---
title: "Vibe Coding"
date: "2025-07-31T00:00:00-05:00"
summary: "A short post about the concept of 'vibe coding'."
bannerHeader: "vibecoding.png"
---

I have been a vibe-coding sceptic for a while now but I created a large portion of this website using LLMs and so this seems as good a topic as any to kick things off.

My first real foray with the agent mode in Copilot involved Workflow Identity Federation in Java which didn't really end well but that's a story for another day. Suffice to say all three models I tried (Sonnet 3.7, Gemini 2.5 Pro, o1) ended up hallucinating key functions that were non-existant and I eventually had to figure it out by reading *shudder* documentation.

But here's the rub - I was already quite familiar with the tech I was working with so I knew what exactly to Google, and whether the results pass the smell test. It seemed to me that coding agents may not be the best option while navigating a complex codebase and making changes -  especially if you're familiar with both the technology and the codebase. 

Being an infrastructure engineer for the past several years, I'm not very familiar with CSS and Typescript and I've got to say I'm slowly coming around. I started off with a simple prompt to Copilot and it did a fairly decent job of creating a working site within a few minutes. Perhaps that's because I specifically asked it to use specific technology in my prompt. Here is the prompt:

```

Create a personal profile page for Aditya Paramatmuni using react and vite.Make the page use a dark background with a blue to black gradiant. Make a navigation bar at the top with two sections: Home and Blog.

Add the following work experience in the main section:

<work experience list>

Add a bottom bar with links to the following social media profiles with their corresponding logos:

LinkedIn: linkedin.com/in/adiparam
Github: https://github.com/adiparam
Bluesky: https://bsky.app/profile/adityaparamatmuni.com

```

Prompt: *First ask me my name. Then create a beautiful image of my name made from exploding pastel paint underwater, pastel background.*
