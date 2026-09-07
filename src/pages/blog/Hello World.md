---
layout: ../../layouts/BlogPostLayout.astro

title: 'Hello World'

pubDate: 2026-09-07

description: 'Why I built this website, and how.'



---


```cpp
#include <iostream>

int main()
{
    std::cout << "Hello World" << '\n';   
}
```

I mainly built this website to have ownership over how my content is displayed. A place that's created by me — even if amateur.

I created this blog so I have a place to write that's off social media, out of sight, and unpressured, while still requiring more effort than if I were to write into my phone's notes app.

I wanted to create a frictionless experience without silly animations serving no purpose — something simple and easy to understand.

Initially, I created this site in HTML and CSS. This worked well, but creating a blog post would've required me to copy and paste an HTML template and type directly into the HTML file. Instead, I opted to use Markdown files and a Markdown file editor to give myself a more pleasant experience. 

After some Googling, I came across [Astro](https://astro.build/), a static site generator. I completed the tutorial, which covered its main features.  The features that appeared useful to me were the built-in [Markdown](https://docs.astro.build/en/guides/markdown-content/) support and [Layouts](https://docs.astro.build/en/basics/layouts/).  I was happy to keep it as close to the original HTML as possible, without adding granular components. Even with little web experience, this framework was easy to pick up, being so similar to HTML.

With Layouts, I could create a template for the website with global CSS and include it so it would be applied to every page. I could also create a layout for the blog posts. Each post is defined in a Markdown file, which is globbed, and the content populates the layout at build time.
