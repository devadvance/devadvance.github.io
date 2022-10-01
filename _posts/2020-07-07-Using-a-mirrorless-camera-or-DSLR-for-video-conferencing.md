---
layout: post
title: Using a mirrorless camera or DSLR for video conferencing
image: /images/posts/2020-07-07_-_Hardware_Camera.jpg
---

# Using a mirrorless camera or DSLR for video conferencing

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [Medium](https://medium.com/@mattjoseph/using-a-mirrorless-camera-or-dslr-for-video-conferencing-749315e2916b){:target="_blank"}{:rel="noopener"}*

Photography has been a passion of mine for many years and I've begun dabbling in video over the last 18 months as well. Thus, it's likely no surprise that one of my first reactions when starting to regularly work from home was "how can I use my existing gear for video conferencing?"

I am, by far, not the first person to do this, but I also approached it with a specific goal: I wanted any new camera gear or knowledge to be useful for more than video conferencing. To borrow language from the culinary world, I don't recommend folks get "[unitaskers](https://www.npr.org/sections/thesalt/2015/12/23/460833325/the-unitasker-kitchen-gadgets-alton-brown-loves-to-loathe){:target="_blank"}{:rel="noopener"}" for video conferencing.

As a result, keep in mind your passions, budget, and work situation when reading this. Let's get started!

## Prerequisites

In general, you'll need a set of gear that looks like this:

* A supported camera with HDMI or SDI output (depends on your capture device)

* Wall power adapter for your camera

* A tripod or stable surface of some kind

* Video capture device that supports HDMI and/or SDI recording. Potential options (non-exhaustive):
  * [Blackmagic UltraStudio](https://www.blackmagicdesign.com/products/ultrastudio): Mini Recorder, Mini 4K, HD Mini, etc.
  * [Elgato](https://www.elgato.com/en/gaming/capture-card-selector): HD60 S, Cam Link, etc.
  * Most PCIe capture cards

* Live streaming software like [OBS](https://obsproject.com)

As I mentioned above, I already have a lot of camera gear that I've assembled over the last decade. For my setup, I'm using:

* Sony A7II with various lenses

* MacBook Pro (2019) with macOS v10.15.5

* OBS v25.0.8 and obs-mac-virtualcam

* Blackmagic UltraStudio 4K Mini

* All the necessary cables (Micro-HDMI-to-HDMI, Thunderbolt 3, power cables, etc.)

## Some background: what is OBS?

For folks who already engage in live video streaming or production, you may be familiar with OBS (Open Broadcaster Software) and alternatives. For those who aren't, here's the top line from the [OBS website](https://obsproject.com){:target="_blank"}{:rel="noopener"}:

> Free and open source software for video recording and live streaming.

What does that ultimately mean? OBS is software that enables you to:

* pull video and audio from various sources (capture devices, screen recording, video files, etc.),

* visually arrange it and add filters for various effects (color changes, audio effects, picture-in-picture, etc),

* and broadcast, record, and stream the video and audio to destinations like YouTube, Twitch, or video production setups.

That's by no means an exhaustive list of what OBS can do, and I encourage you to try it out and see what creative ways it can work for you.

While it's not the primary use case for OBS, by using a plugin for your specific operating system, you can output the OBS video as a "virtual webcam" for other software applications, such as Chrome, Zoom, Teams, etc.

Let's take a look at the plugins next.

## Virtual webcam from OBS

Why a "virtual webcam"? In short, video capture devices, such as Thunderbolt decks and PCIe capture cards, don't provide the same kind of standardized webcam input that most applications expect. That's why we're using OBS, which does support these devices. But now we need to get that video output to appear like a webcam.

Depending on your operating system, you'll need a different plugin to get OBS to do this.

Here are the plugins I've tried:

* macOS: [https://github.com/johnboiles/obs-mac-virtualcam](https://github.com/johnboiles/obs-mac-virtualcam){:target="_blank"}{:rel="noopener"}

* Windows: [https://obsproject.com/forum/resources/obs-virtualcam.949/](https://obsproject.com/forum/resources/obs-virtualcam.949/){:target="_blank"}{:rel="noopener"}

* Linux: [https://github.com/CatxFish/obs-v4l2sink](https://github.com/CatxFish/obs-v4l2sink){:target="_blank"}{:rel="noopener"}

On an almost-daily basis, I'm using obs-mac-virtualcam on my MacBook Pro 16 (2019). I've also tested this configuration on a MacBook Pro 13 (2018) that only has an Intel GPU, so it should work fine without a dedicated GPU.

There are limitations to each of these plugins. For example, macOS has limitations that affect which applications can use the virtual webcam output (see the [compatibility list](https://github.com/johnboiles/obs-mac-virtualcam/wiki/Compatibility){:target="_blank"}{:rel="noopener"}).

## Setting it all up

Let's walk through how I have this working.

## Hardware setup

Sony A7II powered via wall adapter and connected to the micro-HDMI end of the micro-HDMI-to-HDMI cable:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_Hardware_Camera.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_Hardware_Camera.jpg" width="1600" height="1067" alt="Cables plugged into the Sony Alpha A7II" class="responsive" />
  </a>
  <figcaption class="center">Cables plugged into the Sony Alpha A7II</figcaption>
</figure>  
</div>


HDMI end of the micro-HDMI-to-HDMI cable, power cord, and Thunderbolt 3 cable plugged into the UltraStudio 4K Mini:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_Hardware_UltraStudio.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_Hardware_UltraStudio.jpg" width="1600" height="1067" alt="Cables plugged into the Blackmagic UltraStudio 4K Mini" class="responsive" />
  </a>
  <figcaption class="center">Cables plugged into the Blackmagic UltraStudio 4K Mini</figcaption>
</figure>  
</div>


Thunderbolt 3 cable plugged into the MacBook Pro 16 (2019):

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_Hardware_MacBook.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_Hardware_MacBook.jpg" width="1600" height="1067" alt="Thunderbolt 3 cable plugged into a MacBook Pro (2019)" class="responsive" />
  </a>
  <figcaption class="center">Thunderbolt 3 cable plugged into a MacBook Pro (2019)</figcaption>
</figure>  
</div>


## Software setup

In terms of software, I have OBS and obs-mac-virtualcam installed and running. Let's take a look at how to configure OBS.

After you've installed OBS and your virtual webcam plugin, you can proceed to setup.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_OBS_Add_Source.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_OBS_Add_Source.gif" width="1080" height="810" alt="Walking through adding the UltraStudio 4K Mini as a source in OBS" class="responsive" />
  </a>
  <figcaption class="center">Walking through adding the UltraStudio 4K Mini as a source in OBS</figcaption>
</figure>  
</div>


Let's go step by step. First, you'll open OBS to a screen that looks similar to this:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_1_OBS_Open.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_1_OBS_Open.png" width="1079" height="752" alt="Initial OBS screen upon launch" class="responsive" />
  </a>
  <figcaption class="center">Initial OBS screen upon launch</figcaption>
</figure>  
</div>


OBS already has an initial empty scene, so we'll just add our capture device to that. If you're using an UltraStudio like I am, you'll get to select the "Blackmagic Device" option directly. Otherwise, pick the option for your capture device.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_2_-_Add_Source.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_2_-_Add_Source.png" width="1081" height="754" alt="Add a new Blackmagic Device source" class="responsive" />
  </a>
  <figcaption class="center">Add a new Blackmagic Device source</figcaption>
</figure>  
</div>


Naming this new source:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_3_Name_Source.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_3_Name_Source.png" width="1079" height="752" alt="Naming the new source" class="responsive" />
  </a>
  <figcaption class="center">Naming the new source</figcaption>
</figure>  
</div>


Configuring the source. In my case, I know that my Sony A7II outputs at 1080p59.94 over HDMI. You can also try Auto.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_4_Config_Source.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_4_Config_Source.png" width="720" height="602" alt="Properties for the Blackmagic source" class="responsive" />
  </a>
  <figcaption class="center">Properties for the Blackmagic source</figcaption>
</figure>  
</div>


Depending on your OBS canvas size, you may need to resize the video:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_5_After_Resize.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_5_After_Resize.png" width="1079" height="752" alt="Layout in OBS after resizing" class="responsive" />
  </a>
  <figcaption class="center">Layout in OBS after resizing</figcaption>
</figure>  
</div>


## What about audio?

Audio is another part of this setup. You'll notice that in the screenshots, I've muted the OBS audio coming from the capture device.

You have many options here as well, but I recommended starting simple. I've been using a 3.5mm gaming headset with a built-in, flexible mic. This makes audio simple as you can select it as normal from your video conferencing application, instead of trying to set up OBS, audio monitoring, etc. for the first time.

## Trying it out

Now we need to turn on our virtual webcam. Let's take a look before and after.

Here's Google Meet without virtual camera turned on:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_6_Meet_Before_Virtual_Cam.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_6_Meet_Before_Virtual_Cam.png" width="1792" height="1097" alt="Google Meet before virtual camera is turned on" class="responsive" />
  </a>
  <figcaption class="center">Google Meet before virtual camera is turned on</figcaption>
</figure>  
</div>


OBS provides a helpful test screen. Let's turn on our virtual camera in OBS:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_Start_Virtual_Camera.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_Start_Virtual_Camera.gif" width="540" height="252" alt="Turning on the OBS virtual camera" class="responsive" />
  </a>
  <figcaption class="center">Turning on the OBS virtual camera</figcaption>
</figure>  
</div>


And now in Google Meet:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_8_Meet_After_Virtual_Cam.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_8_Meet_After_Virtual_Cam.png" width="1792" height="1097" alt="Virtual webcam working in Google Meet" class="responsive" />
  </a>
  <figcaption class="center">Virtual webcam working in Google Meet</figcaption>
</figure>  
</div>


Looks like we're good to go! What about other applications, such as Zoom?

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_9_Zoom_Virtual_Camera.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_9_Zoom_Virtual_Camera.png" width="800" height="660" alt="Virtual webcam working in Zoom" class="responsive" />
  </a>
  <figcaption class="center">Virtual webcam working in Zoom</figcaption>
</figure>  
</div>


Looks like it's working there too.

## Wrapping up

This is just a small sample of what is possible using camera gear you may already have for video conferencing. While I still recommend 1080p USB webcams for the majority of folks, this presents an interesting option if you are already doing some video work.

Does it make a difference? I've had a high number of folks in video calls notice the difference. As an example:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2020-07-07_-_Email.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2020-07-07_-_Email.png" width="1429" height="117" alt="An email I received after a recent video call" class="responsive" />
  </a>
  <figcaption class="center">An email I received after a recent video call</figcaption>
</figure>  
</div>


That being said, always balance what you're looking to accomplish with your budget, your passions, and the amount of work you want to put in. While you *can* spend [hundreds of thousands of dollars on a video calling setup](https://www.youtube.com/watch?v=LJ5vBS_S7Hg){:target="_blank"}{:rel="noopener"}, that doesn't always mean you should!

*****

*If you liked this post, let me know, and share with others!*

*If you're interested in reaching out, check my [website](https://mattj.io), [LinkedIn](https://go.mattj.io/MedFooter-MyLI), [GitHub](https://go.mattj.io/MedPost-MyGH), and many other platforms.*
