---
title: "Setting up a self-hosted blog with Gatsby on Render"
date: "2019-06-08T14:12:40-07:00"
template: "post"
draft: false
category: "Blogging"
slug: "/posts/setting-up-self-hosted-blog-gatsby-render/"
tags:
  - "Blogging"
  - "Gatsby"
description: "It’s important to own what we create, including what we write. How I setup this site as a self-hosted blog that's easy to maintain, easy to use, and looks good."
---

I’ve been mulling setting up a self-hosted blog for a while, but a recent [newsletter by Paul Jarvis](https://mailchi.mp/pjrvs/ownership-is-resistance?e=d5a9969448) finally convinced me. The gist: it’s important to own what we create, because ownership is a sort of resistance against external entities limiting our freedom by exploiting our data.

That resonates with me. Freedom and independence are important, even in small ways like this (maybe especially in small ways). The only hurdle was setting something up and having it be easy to maintain, easy to use and themes that look good. I think I found an answer in [gatsby](https://www.gatsbyjs.org/). 

Here’s how I set up this blog (the one you're reading now) and host it (for free) on [render.com](https://render.com).

## Setup
Gatsby is a static site generator written in React. The gatsby [getting started docs](https://www.gatsbyjs.org/docs/) are pretty good, but you don’t really need to get deep for the purposes of this tutorial. To install the CLI locally:

`npm install -g gatsby-cli`

You can create a gatsby site based on a “starter” repository -- these give you some default config, layout, theming, etc. The one I used for this site is called [lumen](https://github.com/alxshelepenok/gatsby-starter-lumen), which I learned about from Victor Zhou's [excellent blog](https://victorzhou.com/). For example, here's how I setup this site for local dev:

`gatsby new vishalkapur.com https://github.com/alxshelepenok/gatsby-starter-lumen`

This creates a directory `/vishalkapur.com` initialized as a git repos that’s based on repos url you provided. To compile and serve the site locally, run this from this new directory:

`gatsby develop`

You should have your site up and running with dummy data on localhost.

## Config
To change the info in the sidebar, edit `config.js` (things like name, bio, profile pic). After editing this file, I found that I needed to kill `gatsby develop` and restart to have the changes reflected locally. Changes to posts or layout/css changes, however, will get hot-reloaded.

One quirk I ran into: if you want to remove some of the social media icons from the sidebar, it’s not sufficient to just leave those usernames blank in `config.js`. You need to edit the GraphQL query that fetches that data as well (if I'm missing something please let me know!). In the case of lumen, it’s at `src/hooks/use-site-metadata.js`. For example, here’s my [commit to remove a few of these](https://github.com/figelwump/vishalkapur.com/commit/c63f5870e2989798016005cee062ba91c25e29a1#diff-dfd0dfa4fedcd5a0e528561671760acc) from this site.

## Adding/editing content
Replace the dummy content with your own posts at: `{root dir}/content/posts` 

Each post is markdown, along with a header with metadata (like title, date, tags, description, etc). To add/delete posts, just add/delete `*.md` files from that directory.

## Deploy
Render is a great fit for deploying this: great performance, easy to use, and free for static sites. 

* Push your [local repos to github](https://help.github.com/en/articles/creating-a-new-repository).
* [Create a new render service](https://render.com/docs/deploy-gatsby) based on this repository.
* Now, every time you commit and push, render will re-deploy the site. You can also point a custom domain to your render site.

Not too bad! You now have a self-hosted blog, with markdown posts and version-controlled edits. More importantly, you've taken back a bit of ownership of your corner of the world.

_Here’s the [source for this site](https://github.com/figelwump/vishalkapur.com) as a reference._
