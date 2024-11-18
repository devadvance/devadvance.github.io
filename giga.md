---
layout: project
title: Gigapixel film scans via whole slide imaging
excerpt: Using a whole slide imaging (WSI) microscope to digitize film (and other curiosities) for max resolution.
permalink: /giga/
image: /images/giga/giga_preview.jpg
---
<script src="/third_party/openseadragon.min.js"></script>

# Gigapixel film scans via whole slide imaging
{: .center}

What do you get when you combine an interest in pushing the limits of what's possible with film photography, microscopy, and some software to glue it together?
You get gigapixel film scans via whole slide imaging.

Start by checking out [the results](#demo). After looking at some demo images, I encourage you to read [why](#why) and [how](#how) I did this!

## Demo images {#demo}

Scroll or pinch to zoom. Try going as far as you can, especially on the Ocus scans! For comparison, film scans using an Epson v850 Pro scanner at 4800dpi are shown as well.

At this time, the Ocus scans have a honeycomb pattern due to focusing issues; I aim to resolve this with future scans.

### Henry cat - (2021) [20x]

* Film: 4x5 Fomapan 100 (large format)
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/px
* Used PTGui to merge six scans into one 272,078 x 145,813 (39.6 gigapixel) image. Due to scan stitching inaccuracies plus panorama inaccuracies, there are many errors in this image.

<div id="henry_4x5_pano_v2" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var henry_4x5_pano = OpenSeadragon({
    id: "henry_4x5_pano_v2",
    tileSources: "https://micro.mattj.io/henry_4x5_pano_v2_dz.dzi"
  });
</script>

### Building in Pittsburgh, PA (2010) [Ocus]

* Film: 35mm Kodak 400TX
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/px

<div id="pittsburgh_building_ocus" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var pittsburgh_building_ocus = OpenSeadragon({
    id: "pittsburgh_building_ocus",
    tileSources: "https://micro.mattj.io/pittsburgh_building_ocus_dz.dzi"
  });
</script>

### Building in Pittsburgh, PA (2010) [Epson]

* Film: 35mm Kodak 400TX
* Scanner: Epson v850 Pro
* Scan resolution: 4800dpi (~2600 effective)

<div id="pittsburgh_building_epson" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var pittsburgh_building_epson = OpenSeadragon({
    id: "pittsburgh_building_epson",
    tileSources: "https://micro.mattj.io/pittsburgh_building_epson_dz.dzi"
  });
</script>

### Forbes Ave in Pittsburgh, PA (2010) [Ocus]

* Film: 35mm Kodak 400TX
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/px

<div id="pgh_street_1" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var pgh_street_1 = OpenSeadragon({
    id: "pgh_street_1",
    tileSources: "https://micro.mattj.io/pgh_street_1_dz.dzi"
  });
</script>

### JW in Pittsburgh, PA (2010) [Ocus]

* Film: 35mm Kodak 400TX
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/px

<div id="jon_pgh" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var jon_pgh = OpenSeadragon({
    id: "jon_pgh",
    tileSources: "https://micro.mattj.io/jon_pgh_dz.dzi"
  });
</script>

### SD and LM, Michigan (2010) [Ocus]

* Film: 35mm Kodak BW400CN
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix

<div id="sd_lm_hs_ocus" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var sd_lm_hs_ocus = OpenSeadragon({
    id: "sd_lm_hs_ocus",
    tileSources: "https://micro.mattj.io/sd_lm_hs_dz.dzi"
  });
</script>

### SD and LM, Michigan (2010) [Epson]

* Film: 35mm Kodak BW400CN
* Scanner: Epson v850 Pro
* Scan resolution: 4800dpi (~2600 effective)

<div id="sd_lm_hs_epson" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var sd_lm_hs_epson = OpenSeadragon({
    id: "sd_lm_hs_epson",
    tileSources: "https://micro.mattj.io/sd_lm_hs_epson_dz.dzi"
  });
</script>

### Lens Cleaning Tissue (October 2024) [Ocus]

* Material: Lens cleaning tissue
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/px

<div id="lens_tissue" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var lens_tissue = OpenSeadragon({
    id: "lens_tissue",
    tileSources: "https://micro.mattj.io/lens_tissue_dz.dzi"
  });
</script>

## Why? {#why}

### It started with some 4x5

This project hits all of the areas of interest for me: film photography, digital photography, figuring out niche tools, pushing ideas to the max, and more. That said, there was a specific journey that got me here.

My partner began taking large format photos in 2021. Part of that journey was figuring out how best to digitize the 4x5" negatives. In general, there are a few common ways to do this:

* Drum scanning - unparalled quality, but a **huge** pain, expensive, and outdated. Example: Heidelberg.
* Virtual drum scanning - amazing quality, easier than a proper drum scanner, but expensive and outdated. Example: Flextight X5.
* Camera scanning - depends on equipment, but can be very good quality, but setup is key. Example: Sony A7III + stand + light table.
* Flatbed scanning - depends on equipment, but it's good enough quality. Setup is key, but easier. Example: Epson v850.

You can learn more about these various methods from articles like [this](https://www.lycarter.com/2023-07-11/drum-scanner-adventure){:target="_blank"}{:rel="noopener"}.

Ultimately, we landed on camera scanning followed by flatbed scanning, since the goal was reasonable speed and ease of use within a limited footprint. Oh, and not needing to service expensive, outdated hardware.

But our approach of using flatbed scanning still somehow bothered me and I continued to think about what other approaches may exist. With 35mm film, there are more options, but frankly, even there mostly folks aren't pushing the boundaries.

### An idea from an internet comment

As a regular reader of [Hacker News](https://news.ycombinator.com){:target="_blank"}{:rel="noopener"} ("[a social news website focusing on computer science and entrepreneurship](https://en.wikipedia.org/wiki/Hacker_News){:target="_blank"}{:rel="noopener"}"), I was both amused and not surprised when I saw a posted entitled, [I almost bought a scanner](https://news.ycombinator.com/item?id=34524749){:target="_blank"}{:rel="noopener"}. In the [linked-to writeup](https://leejo.github.io/2023/01/25/scanner/){:target="_blank"}{:rel="noopener"}, the author talked about the Hasselblad Flextight X1, one of the virtual drum scanners I had learned about previously. I empathized with the journey quite a bit.

But what stuck with me more than the writeup was [a comment on the Hacker News post](https://news.ycombinator.com/item?id=34525958){:target="_blank"}{:rel="noopener"}:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/giga/hn-comment.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <picture>
      <source type="image/avif" srcset="/images/giga/hn-comment.avif" />
      <source type="image/jpeg" srcset="/images/giga/hn-comment.jpg" />
      <img src="/images/giga/hn-comment.jpg" width="1944" height="446" alt="Screenshot of the Hacker News comment" class="responsive" />
    </picture>
  </a>
  <figcaption class="center">Screenshot of the Hacker News comment</figcaption>
</figure>
</div>

Hmmm.

## How? {#how}

### Some research

I learned that whole slide imaging (WSI) is where an entire slide (or large portions of a slide) are digitized and then later viewed. For more background information, check out [Whole Slide Imaging (WSI) in Pathology: Current Perspectives and Future Directions](https://pmc.ncbi.nlm.nih.gov/articles/PMC7522141/){:target="_blank"}{:rel="noopener"}.

So I looked into microscope scanners, also known as slide scanners, whole slide imaging devices, digital pathology tools, and a whole host of other names that are likely far more familiar to pathologists and researchers than photographers.

There were a few problems beyond my lack of familiarity. Access (mostly labs), cost ($30,000 to $1,000,000 or more!), application (can they do film?), compatibility (SCSI devices = no-go for me these days), and more. It looked like I wanted something that did a slide at a time, could scan the entire area of a 35mm frame (~36x24mm, which conveniently fits a 1x3" pathology slide), and supported exporting as a reasonable format, like a TIFF.

A few more modern devices caught my eye, since their software was web based, their footprint small, their hardware modern, and their retail price in the <$50,000 range. As with any good side project, I looked for second-hand devices for a bit, but eventually set a couple marketplace alerts and left this idea to simmer in the background.

### Scanner acquired

In 2024, an alert pinged for a Grundium Ocus scanner. It was a risk, since the listing specified that it powered on but no further testing was done. But the price was far, _far_ below new, so I knew I had to try.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/giga/ocus_20.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <picture>
      <source type="image/avif" srcset="/images/giga/ocus_20.avif" />
      <source type="image/jpeg" srcset="/images/giga/ocus_20.jpg" />
      <img src="/images/giga/ocus_20.jpg" width="1944" height="446" alt="The scanner with an oversized slide" class="responsive" />
    </picture>
  </a>
  <figcaption class="center">The scanner with an oversized slide</figcaption>
</figure>
</div>

Upon receiving the scanner, I engaged with Grundium support to factory reset the device. Despite being an individual and lacking a support contract, they were extremely helpful and got me up and running. At which point I had a working whole slide scanner.

It was time to take this for a spin!

### Establishing a workflow

Fairly quickly, I discovered that I not only needed to learn a bit more about microscopy, but also establish a workflow for handling the resulting images. The Ocus has a 20x microscope objective, which equates to 0.48 µm/px.

<div class="center width70">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="1108"
    height="1080"
    class="responsive"
    title="Demo of the Grundium Ocus web UI">
    <source src="/images/giga/ocus_ui_demo_av1.webm"
      type="video/webm; codecs=av01.0.08M.08.0.110.01.01.01.0" />
    <source src="/images/giga/ocus_ui_demo_vp9.webm"
      type="video/webm" />
    <source src="/images/giga/ocus_ui_demo_h264.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of the Grundium Ocus web UI with a film scan</figcaption>
</figure>
</div>

Let's do a bit of math. 35mm film has a size of 36x24mm. Scanning that at 0.48 µm/px results in a digital image with a resolution of 75,000 x 50,000 pixels, or 3.75 billion pixels. Which is 3.75 gigapixels. Working with images this large, especially in TIFF format, requires different handling.

Fortunately, this is something that folks in more specialized areas deal with routinely. Ultimately, I landed on using VIPS via [libvips](https://www.libvips.org){:target="_blank"}{:rel="noopener"} and nip2 to handle these images. [VIPS](https://en.wikipedia.org/wiki/VIPS_(software)){:target="_blank"}{:rel="noopener"}, unlike other types of imaging software, is designed with images of this size in mind.

Ultimately, my workflow looks something like this:

* Mount on slides. I ended up purchasing some oversized 3x2" and 6x4" slides to give me more flexibility.
* Scan using Grundium Ocus. With oversized slides, there's enough clearance to install rubber pads on the platform and rest the oversized slides on top.
* Export as TIFF (sRGB 8bit JPEG compression).
* Make sure [libvips](https://www.libvips.org){:target="_blank"}{:rel="noopener"} and related software are installed.
* Open using VIPS-based viewer, [nip2](https://github.com/libvips/nip2){:target="_blank"}{:rel="noopener"}. Apply leveling, inversion, and conversion to mono/grayscale.
* Alternatively, use nip2 or pyvips to script some of this process.
* Using vips CLI, create a deep zoom image (DZI, [more info](https://en.wikipedia.org/wiki/Deep_Zoom){:target="_blank"}{:rel="noopener"}).
* Upload to [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/){:target="_blank"}{:rel="noopener"} for serving using [s5cmd](https://github.com/peak/s5cmd){:target="_blank"}{:rel="noopener"} (since this is 10k-100k files).
* Use [OpenSeadragon](https://github.com/openseadragon/openseadragon){:target="_blank"}{:rel="noopener"} for viewing on the web.

Example commands that I used at various stages:

For using nip2 in batch mode to level, invert, and convert:

```shell
nip2 -bp --set 'Workspaces.process.A1=Image_file "Ocus scan - XYZ.tif"' --set main=Workspaces.process.A5 -o "Ocus scan - XYZ leveled.tif" process.ws
```

For converting to a deep zoom image:

```shell
vips dzsave ".\scan.tif" dzi\scan_name_dz
```

Since this entire project was inspired originally by the topic of large format scanning, I did a scan of one of my partner's 4x5 negatives in multiple parts, then used [PTGui](https://ptgui.com){:target="_blank"}{:rel="noopener"} to stitch the six scans together. This resulted in a 39.6 gigapixel image.

## What's next? {#next}

**Hardware**: You'll notice in the Ocus scans that there's a hexagonal pattern. This is a suboptimal artifact of the stitching process. I'm in the process of working with the amazing folks at Grundium to see what's going on and what can be done.

**Film**: This has inspired me to revisit 35mm film and take photos with this scanning in mind. Stay tuned for photos on other film stocks.

**Collaboration**: I'm interested in collaborating with others to see what cool ways we can use this hardware. Reach out via any of my online platforms to connect.

**Resolution**: Of course, I'm also looking at ways to push this even further. Have a desktop SEM ([scanning electron microscope](https://en.wikipedia.org/wiki/Scanning_electron_microscope){:target="_blank"}{:rel="noopener"}) I can try out with film? Let me know! 😄
