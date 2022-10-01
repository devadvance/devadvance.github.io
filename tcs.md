---
layout: project
title: Terminal Cheat Sheet
excerpt: A project to help folks get up and running on terminal.
permalink: /tcs/
---

<div class="center"><img src="/images/tcs-multidevice.png" width="1411" height="679" alt="Screenshot of Terminal Cheat Sheet project on multiple devices" class="responsive" /></div>

# Terminal Cheat Sheet
{: .center}

For the novice and intermediate users of terminals on Linux, macOS, and other operating systems, finding, understanding, learning, remembering common commands is an essential skill. There are a variety of one-off websites, GitHub gists, marketing pages, etc. that have these commands, but few provide the type of user-centered design that makes learning even easier.

Terminal Cheat Sheet aims to balance approachability through straightforward content, reduced friction by localizing, accessibility through best practices like WCAG, and performance through the use of static content. It's also meant to complement, not replace, options like man pages or detailed user guides.

[VISIT THE PROJECT](https://terminalcheatsheet.com){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
[SOURCE CODE (GITHUB)](https://github.com/devadvance/terminalcheatsheet){:target="_blank"}{:rel="noopener"}{: .pure-button .pure-button-primary }
{: .center}

This project is in collaboration with [Ali Nagi](https://alinagi.com).

As of September 2020, the project uses the following tech stack:

* [Jekyll](https://jekyllrb.com/) - static site builder that works with GitHub pages
* [AMP](https://amp.dev/documentation/components/) - used to enforce speed, simplicity, and SEO

**Libraries**

* [PureCSS](https://purecss.io/) - used for basic components and grid
* [Workbox](https://developers.google.com/web/tools/workbox) - used for offline support/PWA functionality
* [Termynal](https://github.com/ines/termynal) - modified a bit to work with `<amp-script>`

**Infra**

* GitHub for source and deployment
* GitHub Pages for hosting the content
* Cloudflare for CDN