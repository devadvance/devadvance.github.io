---
layout: 2018design-project
title: Video2WebP
excerpt: A web app to convert videos to animated WebP in the browser.
permalink: /video2webp/
---

<div class="center"><a href="https://video2webp.mattj.io" target="_blank"><amp-img src="/images/video2webp.png" width="1580" height="813" alt="Screenshot of the Video2WebP project" layout="responsive"></amp-img></a></div>

# Video2WebP
{: .center}

Video2WebP is a small project that uses [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm){:target="_blank"}{:rel="noopener"} to convert videos to animated WebP directly in the browser.

It uses an unmodified version of FFmpeg.wasm and some basic glue code. No video or image data leaves the local machine.

Advanced users may want to follow this guide for [using FFmpeg locally instead](/posts/2021-02-27-create-animated-gif-and-webp-from-videos-using-ffmpeg/).

[VISIT THE PROJECT](https://video2webp.mattj.io){:target="_blank"}{: .pure-button .pure-button-primary }
{: .center}

## FAQs

### Why did you create this?

I wrote a brief guide for [using FFmpeg locally](/posts/2021-02-27-create-animated-gif-and-webp-from-videos-using-ffmpeg/) to convert videos to GIFs and animated WebP. However, it doesn't work easily for users without access or knowledge of the terminal. So, when I saw [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm){:target="_blank"}{:rel="noopener"}, I threw together a quick page for animated WebP. There are enough solutions for GIFs.

### What happens to my data?

Your data stays local to your machine. This project also contains no browser analytics and the dependencies are hosted with the project.