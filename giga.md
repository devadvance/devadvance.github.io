---
layout: project
title: Gigapixel film scans via whole slide imaging
excerpt: Using a whole slide imaging (WSI) microscope to digitize film (and other curiosities) for max resolution.
permalink: /giga/
image: /images/giga_preview.jpg
---
<script src="/giga/openseadragon.min.js"></script>

# Gigapixel film scans via whole slide imaging
{: .center}

This page contains scans using a Grundium Ocus pathology whole slide scanner with a 20x microscope objective
(20X 0.48 µm/pix).
This is mostly focused on film, but other curiosities are included. For comparison, film scans using an Epson
v850 Pro scanner at 4800dpi are shown as well.
At this time, the Ocus scans have a honeycomb pattern due to focusing issues; I aim to resolve this with future scans.

Whole slide imaging (WSI) is where an entire slide (or large portions of a slide) are digitized and then later viewed. For more background information, check out [Whole Slide Imaging (WSI) in Pathology: Current Perspectives and Future Directions](https://pmc.ncbi.nlm.nih.gov/articles/PMC7522141/){:target="_blank"}{:rel="noopener"}.

## Images

### Henry cat - (2021) [20x]

* Film: 4x5 Fomapan 100 (large format)
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix
* Merged four scans into one 117,889 x 160,041 (18.9 gigapixel) image

<div id="henry_4x5_pano" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var henry_4x5_pano = OpenSeadragon({
    id: "henry_4x5_pano",
    tileSources: "https://micro.mattj.io/henry_4x5_pano_dz.dzi"
  });
</script>

### JW in Pittsburgh, PA (2010) [Ocus]

* Film: 35mm Kodak 400TX
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix

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

### Building in Pittsburgh, PA (2010) [Ocus]

* Film: 35mm Kodak 400TX
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix

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
* Scan resolution: 20X 0.48 µm/pix

<div id="pgh_street_1" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var pgh_street_1 = OpenSeadragon({
    id: "pgh_street_1",
    tileSources: "https://micro.mattj.io/pgh_street_1_dz.dzi"
  });
</script>

### La Rochette Honey - Summer 2024 (Raw, Unfiltered) [Ocus]

* Material: Raw and unfiltered honey
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix

<div id="la_rochette_honey" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var la_rochette_honey = OpenSeadragon({
    id: "la_rochette_honey",
    tileSources: "https://micro.mattj.io/la_rochette_honey_dz.dzi"
  });
</script>

### Honey from Eric Enslen - 2024 (Raw, filtered) [Ocus]

* Material: Raw and filtered honey
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix

<div id="enslen_honey" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var enslen_honey = OpenSeadragon({
    id: "enslen_honey",
    tileSources: "https://micro.mattj.io/enslen_honey_dz.dzi"
  });
</script>

### Lens Cleaning Tissue (October 2024) [Ocus]

* Material: Lens cleaning tissue
* Scanner: Grundium Ocus
* Scan resolution: 20X 0.48 µm/pix

<div id="lens_tissue" class="openseadragon-viewer"></div>
<script type="text/javascript">
  var lens_tissue = OpenSeadragon({
    id: "lens_tissue",
    tileSources: "https://micro.mattj.io/lens_tissue_dz.dzi"
  });
</script>

## Workflow

* Mount on slides or stretched across platform.
* Scan using Grundium Ocus.
* Export as TIFF (sRGB 8bit JPEG compression).
* Make sure [libvips](https://www.libvips.org){:target="_blank"}{:rel="noopener"} and related software are installed.
* Open using VIPS-based viewer, [nip2](https://github.com/libvips/nip2){:target="_blank"}{:rel="noopener"}.
* Apply leveling, inversion, and conversion to mono/grayscale.
* Using vips CLI, create a deep zoom image (DZI, [more info](https://en.wikipedia.org/wiki/Deep_Zoom){:target="_blank"}{:rel="noopener"}).
* Upload to [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/){:target="_blank"}{:rel="noopener"} for serving using [s5cmd](https://github.com/peak/s5cmd){:target="_blank"}{:rel="noopener"} (since this is 10k-100k files).
* Use [OpenSeadragon](https://github.com/openseadragon/openseadragon){:target="_blank"}{:rel="noopener"} for viewing on the web.

Various commands:

```shell
vips dzsave ".\scan.tif" dzi\scan_name_dz
```
