---
layout: 2018design-post
title: Create animated GIF and WebP from videos using FFmpeg
---

# Create animated GIF and WebP from videos using FFmpeg

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

*Originally published on [Medium](https://mattjoseph.medium.com/create-animated-gif-and-webp-from-videos-using-ffmpeg-f1012267935a
){:target="_blank"}{:rel="noopener"}*

*A guide to using FFmpeg to create all the animated content you want.*

Whether it's for a website, a presentation, or sharing a fun clip with a friend on chat, you might want to convert a video to an animated GIF or animated WebP. Unfortunately, the visual tools for doing this vary by the operating system. Additionally, most tools don't support [the WebP format](https://en.wikipedia.org/wiki/WebP){:target="_blank"}{:rel="noopener"}, even in 2021. WebP is based on VP8, a relatively recent video codec standard compared to the [GIF image format](https://en.wikipedia.org/wiki/GIF){:target="_blank"}{:rel="noopener"}.

So, this guide is for those who are willing to learn a bit of terminal in order to convert any video to the animated format of their choosing. The best part: this will work on all major operating systems and gives you all the control of the output you could want!

<div class="center width70">
  <amp-anim src="/images/posts/2021-02-27_-_keyboard.gif" width="720" height="405" alt="Example GIF of typing GIF on a mechanical keyboard" layout="responsive"></amp-anim>
</div>
<figcaption class="center">Example GIF of typing "GIF" on a mechanical keyboard</figcaption>

Let's get started!

## Prerequisites

To use this guide, you will need the following:

* Basic knowledge of how to open and use the terminal on your operating system. If you need a cheat sheet or introductory guides, check out [Terminal Cheat Sheet](https://terminalcheatsheet.com){:target="_blank"}{:rel="noopener"}.
* FFmpeg v4+ installed on your operating system and executable from your path. Here are some suggested places to learn down to do this:
	* macOS: [https://superuser.com/a/624562](https://superuser.com/a/624562){:target="_blank"}{:rel="noopener"}
	* Windows: [https://video.stackexchange.com/a/20496](https://video.stackexchange.com/a/20496){:target="_blank"}{:rel="noopener"}
	* Linux: Use your preferred package manager (e.g., `sudo apt install ffmpeg` on Ubuntu)

## What is FFmpeg?

[From Wikipedia](https://en.wikipedia.org/wiki/FFmpeg){:target="_blank"}{:rel="noopener"}:

> FFmpeg is a free and open-source software project consisting of a large suite of libraries and programs for handling video, audio, and other multimedia files and streams.

For our purposes, we will use it to convert between formats, such as videos to GIFs or animated WebP. It has many uses, so I recommend checking it out for all your video processing needs!

## Before you start: make sure you can run FFmpeg from your terminal

Since all of these commands require FFmpeg, we need to make sure it's available.

Open your terminal, and run this:

```
ffmpeg -version
```

If FFmpeg is available, you will note output similar to this:

```
FFmpeg version 4.3.1 Copyright © 2000–2020 the FFmpeg developers
...
```

<div class="center width70">
  <amp-anim src="/images/posts/2021-02-27_-_ffmpeg_version.gif" width="480" height="279" alt="Checking the FFmpeg version on Linux" layout="responsive"></amp-anim>
</div>
<figcaption class="center">Checking the FFmpeg version on Linux</figcaption>

Version 4 or higher of FFmpeg is recommended for this guide.

If you get an output that says something similar to `command not found: ffmpeg -version`, then check the **Prerequisites** section above and make sure you have FFmpeg installed on your system.

## Convert to an animated GIF using FFmpeg

### Convert a whole video to GIF

**Base command**

```
ffmpeg -i $INPUT_FILENAME \
-vf "fps=$OUTPUT_FPS,scale=$OUTPUT_WIDTH:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
-loop $NUMBER_OF_LOOPS $OUTPUT_FILENAME

# Change these placeholders:
# * $INPUT_FILENAME - path to the input video.
# * $OUTPUT_FPS - ouput frames per second. Start with `10`.
# * $OUTPUT_WIDTH - output width in pixels. Aspect ratio is maintained.
# * $NUMBER_OF_LOOPS - use `0` to loop forever, or a specific number of loops.
# * $OUTPUT_FILENAME - the name of the output animated GIF.
```

**Example usage of this command**

Here is an example of this command with the input options filled out:

```
ffmpeg -i "sample_recording.mp4" \
-vf "fps=10,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
-loop 0 sample_recording.gif
```

### Convert part of a video to GIF

**Base command**

This is the base command with various options for converting part of a video to an animated GIF:

```
ffmpeg -ss $INPUT_START_TIME -t $LENGTH -i $INPUT_FILENAME \
-vf "fps=$OUTPUT_FPS,scale=$OUTPUT_WIDTH:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
-loop $NUMBER_OF_LOOPS $OUTPUT_FILENAME

# Change these placeholders:
# * $INPUT_START_TIME - number of seconds in the input video to start from.
# * $LENGTH - number of seconds to convert from the input video.
# * $INPUT_FILENAME - path to the input video.
# * $OUTPUT_FPS - ouput frames per second. Start with `10`.
# * $OUTPUT_WIDTH - output width in pixels. Aspect ratio is maintained.
# * $NUMBER_OF_LOOPS - use `0` to loop forever, or a specific number of loops.
# * $OUTPUT_FILENAME - the name of the output animated GIF.
```

**Example usage of this command**

Here is an example of this command with the input options filled out:

```
ffmpeg -ss 32.5 -t 7 -i "sample_recording.mp4" \
-vf "fps=10,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
-loop 0 sample_recording.gif
```

## Convert to an animated WebP using FFmpeg

### Convert a whole video to animated WebP

**Base command**

This is the base command with various options for converting an entire video to an animated WebP. You can use options like FPS, output width, and quality to determine the file size and quality of your output:

```
ffmpeg -i $INPUT_FILENAME \
-vf "fps=$OUTPUT_FPS,scale=$OUTPUT_WIDTH:-1:flags=lanczos" \
-vcodec libwebp -lossless 0 -compression_level 6 \
-q:v $OUTPUT_QUALITY -loop $NUMER_OF_LOOPS \
-preset picture -an -vsync 0 $OUTPUT_FILENAME

# Change these placeholders:
# * $INPUT_FILENAME - path to the input video.
# * $OUTPUT_FPS - ouput frames per second. Start with `10`.
# * $OUTPUT_WIDTH - output width in pixels. Aspect ratio is maintained.
# * $OUTPUT_QUALITY - quality of the WebP output. Start with `50`.
# * $NUMBER_OF_LOOPS - use `0` to loop forever, or a specific number of loops.
# * $OUTPUT_FILENAME - the name of the output animated WebP.
```

**Example usage of this command**

Here is an example of this command with the input options filled out:

```
ffmpeg -i "sample_recording.mp4" \
-vf "fps=10,scale=720:-1:flags=lanczos" \
-vcodec libwebp -lossless 0 -compression_level 6 \
-q:v 50 -loop 0 \
-preset picture -an -vsync 0 sample_recording.webp
```

### Convert part of a video to animated WebP

**Base command**

This is the base command with various options for converting part of a video to an animated WebP:

```
ffmpeg -ss $INPUT_START_TIME -t $LENGTH -i $INPUT_FILENAME \
-vf "fps=$OUTPUT_FPS,scale=$OUTPUT_WIDTH:-1:flags=lanczos" \
-vcodec libwebp -lossless 0 -compression_level 6 \
-q:v $OUTPUT_QUALITY -loop $NUMER_OF_LOOPS \
-preset picture -an -vsync 0 $OUTPUT_FILENAME

# Change these placeholders:
# * $INPUT_START_TIME - number of seconds in the input video to start from.
# * $LENGTH - number of seconds to convert from the input video.
# * $INPUT_FILENAME - path to the input video.
# * $OUTPUT_FPS - ouput frames per second. Start with `10`.
# * $OUTPUT_WIDTH - output width in pixels. Aspect ratio is maintained.
# * $OUTPUT_QUALITY - quality of the WebP output. Start with `50`.
# * $NUMBER_OF_LOOPS - use `0` to loop forever, or a specific number of loops.
# * $OUTPUT_FILENAME - the name of the output animated WebP.
```

**Example usage of this command**

Here is an example of this command with the input options filled out:

```
ffmpeg -ss 32.5 -t 7 -i "sample_recording.mp4" \
-vf "fps=10,scale=720:-1:flags=lanczos" \
-vcodec libwebp -lossless 0 -compression_level 6 \
-q:v 50 -loop 0 \
-preset picture -an -vsync 0 sample_recording.webp
```

## When should I use an animated GIF versus an animated WebP?

This depends on the quality, size, and support you want for your output. Modern browsers have support for animated WebP and the quality tends to be higher, but the processing power required is also higher.

## Next steps

This guide serves as a brief introduction to using FFmpeg to create an animated GIF or animated WebP from a video, but there is so much more you can do with the tool. There are also many options that FFmpeg supports for these formats that are not covered.

You can also get the code for all the commands and examples in one place by [visiting the GitHub Gist here](https://gist.github.com/devadvance/f2ad3cfe38afe3eeef64c72c46692158){:target="_blank"}{:rel="noopener"}.