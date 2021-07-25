---
layout: 2018design-post
title: Sneakbox Disarray 70% with WoB keycaps
image: /images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-07.jpg
excerpt: Build of the Sneakbox Disarray 70% with WoB keycaps
---

# Sneakbox Disarray 70% with WoB keycaps

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/).

The Sneakbox Disarray started shipping a couple months ago, and I received mine about a month ago. I did an unboxing post with many photos. If you haven't checked it out, you might want to read that post first: [_Unboxing the Sneakbox Disarray 70% keyboard_](/posts/2021-06-20-disarray-unboxing/){:target="_blank"}.

I ended up building mine with the following configuration (no affiliation for any of the links):

* PCB: Staggered: Special Edition FR4 with Mill-Max 7305 sockets to support hot swapping the switches
* Plate: Brass
* Switches: [Boba U4T 68g tactiles (Pearl)](https://mkultra.click/boba-tactile-u4t-switches/){:target="_blank"}{:rel="noopener"}
* Stabilizers: Durock v2 with Krytox 205g0 and dielectric grease
* Keycaps: [EnjoyPBT WoB (white-on-black) ABS](https://kbdfans.com/products/enjoypbt-abs-doubleshot-mechanical-keyboard-keycaps-set-2){:target="_blank"}{:rel="noopener"}
* Foam: [Stupidfish foam](https://stupidfish.design/products/discipline65-case-and-plate-foam-set){:target="_blank"}{:rel="noopener"} between the plate and PCB, stock foam between the PCB and the case

## Soldering the sockets

If you're not familiar with Mill-Max sockets, they are essentially small, friction-based metal tubes that will hold the metal legs of the switch in place. They are soldered into the PCB instead of the switches. They're not as optimal as Kailh or other purpose-built switch sockets, but they get the job done. There are some issues with switches with larger legs.

More info here:

* [Mill-Max website for the 7305 socket](https://www.mill-max.com/products/receptacle/7305/7305-0-15-15-47-27-10-0){:target="_blank"}{:rel="noopener"}
* [Order the 7305 socket from Mouser](https://www.mouser.com/ProductDetail/Mill-Max/7305-0-15-15-47-27-10-0?qs=QVz7UnnaAAGZJgZDI7Hd%2FA%3D%3D){:target="_blank"}{:rel="noopener"}

The process of soldering the Mill-Max sockets doesn't take much longer than soldering switches. However, you need to be careful not to get any solder into the socket, otherwise the switch will be stuck! A solder sucker is very useful for when that happens.

<div class="center width30">
  <amp-video autoplay loop noaudio
    width="540"
    height="960"
    layout="responsive"
    title="Soldering Mill-Max 7305 sockets on the PCB (looped)">
    <source src="/images/posts/2021-07-24-disarray/disarraysoldering.webm"
      type="video/webm" />
    <source src="/images/posts/2021-07-24-disarray/disarraysoldering.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </amp-video>
  <figcaption class="center">Soldering Mill-Max 7305 sockets on the PCB (looped)</figcaption>
</div>

## Final build

<div class="center width70">
  <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-07.jpg" target="_blank" rel="noopener">
    <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-07.jpg" width="3000" height="2000" alt="Final build on a desk mat" layout="responsive"></amp-img>
  </a>
  <figcaption class="center">Final build on a desk mat</figcaption>
</div>

Some of the best aspects of this case are the rotary encoder and the visible internal components. It's more expensive, both in terms of design and cost, to have the components visible like this, but the result is quite beautiful.

<div class="flex-horizontal">
  <div class="flex-item-horizontal">
    <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-02.jpg" target="_blank" rel="noopener">
      <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-02.jpg" width="3000" height="2000" alt="Rotary encoder up closer" layout="responsive"></amp-img>
    </a>
    <figcaption class="center">Rotary encoder up closer</figcaption>
  </div>
  <div class="flex-item-horizontal">
    <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-03.jpg" target="_blank" rel="noopener">
      <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-03.jpg" width="3000" height="2000" alt="USB-C port" layout="responsive"></amp-img>
    </a>
    <figcaption class="center">USB-C port</figcaption>
  </div>
</div>

<div class="flex-horizontal">
  <div class="flex-item-horizontal">
    <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-04.jpg" target="_blank" rel="noopener">
      <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-04.jpg" width="3000" height="2000" alt="ATmega 32U4 visible" layout="responsive"></amp-img>
    </a>
    <figcaption class="center">ATmega 32U4 visible</figcaption>
  </div>
  <div class="flex-item-horizontal">
    <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-05.jpg" target="_blank" rel="noopener">
      <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-05.jpg" width="3000" height="2000" alt="Another angle on the rotary encoder" layout="responsive"></amp-img>
    </a>
    <figcaption class="center">Another angle on the rotary encoder</figcaption>
  </div>
</div>

Here are a couple more images of the final build in different light:

<div class="center width70">
  <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-06.jpg" target="_blank" rel="noopener">
    <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-06.jpg" width="3000" height="2000" alt="Final build with a plain white background" layout="responsive"></amp-img>
  </a>
  <figcaption class="center">Final build with a plain white background</figcaption>
</div>


<div class="center width70">
  <a href="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-01.jpg" target="_blank" rel="noopener">
    <amp-img src="/images/posts/2021-07-24-disarray/SneakboxDisarrayBuilt-01.jpg" width="3000" height="2000" alt="Final build with natural sunlight" layout="responsive"></amp-img>
  </a>
  <figcaption class="center">Final build with natural sunlight</figcaption>
</div>


### A note on the USB-C port

I noticed that only some of my cables worked with this keyboard, as there is a \~1.2mm gap between the edge of the USB-C receptacle and the interior case well. This normally wouldn't be an issue, but the case also has a relatively small space to accommodate the molding on the cable.

My solution was to purchase a relatively inexpensive USB-C extender to make it so any of my current or future cables will work. I purchased [this one from Amazon (no affiliation)](https://smile.amazon.com/gp/product/B07MBWH7QG/){:target="_blank"}{:rel="noopener"}.

## Final thoughts

This is a fantastic case, and despite the fact that all of the Disarray boards were declared as B-stock, I nonetheless found the design, materials, and process to be great. I'm looking forward to more keyboards from Sneakbox in the future!

Related posts on Sneakbox keyboards:

* [_Unboxing the Sneakbox Disarray 70% keyboard_](/posts/2021-06-20-disarray-unboxing/){:target="_blank"}
* [_Sneakbox MGA Standard with SA Mizu (unboxing and final build)_](/posts/2021-07-24-sneakbox-mga-sa-mizu/){:target="_blank"}
