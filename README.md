# errorz.xyz

Personal site and blog, built with [Astro](https://astro.build) and deployed to
GitHub Pages.

## Commands

| Command           | Action                                |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Dev server at `localhost:4321`        |
| `npm run build`   | Build to `dist/`                      |
| `npm run preview` | Serve the built site                  |
| `npm run check`   | Type-check the project                |

## Posts

Markdown files in `src/content/blog/`. The filename becomes the URL.

```markdown
---
title: "Post title"
description: "Shown on the index and in link previews."
date: 2026-09-14
tags: ["phasmo"]
draft: false
---
```

Images go next to the post and are referenced relatively. Files prefixed with
`_` are not published.

## Styling

All colours, fonts and spacing are defined as custom properties in
`src/styles/tokens.css`.
