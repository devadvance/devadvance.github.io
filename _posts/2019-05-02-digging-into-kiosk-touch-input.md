---
layout: 2018design-post
title: Digging into Kiosk Touch Input
---

# Digging into Kiosk Touch Input

## Or, getting in touch with the input pipeline 👈

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [the Intersection blog](https://ixn.intersection.com/digging-into-kiosk-touch-input-2779bcad7f5b){:target="_blank"}{:rel="noopener"}*

This post is somewhat of a spiritual successor to a prior post, *[Web App Multi-touch is Complicated](/posts/2019-03-08-web-app-multi-touch-is-complicated/)*. We learned a lot from that experience, but as it turns out, we also had plenty more to learn!

In the middle of March 2019, we went live with the interactive software powering several dozen touchscreen kiosks in the new Shops & Restaurants at Hudson Yards in New York City. After tens of thousands of interactions, we noticed intermittent issues where touch would simply stop working on the kiosks. The ads would continue rotating and the navigational interface was still being rendered, but touch remained unresponsive.

Let's dig through what we found!

## First: some context

As you may have read in my prior post, touch input on Linux — and most operating systems for that matter — is a complicated beast. When you are writing a web app, there are around a dozen layers between a finger and your app receiving a touch event.

For the sake of this post, let's use this purposefully-simplified diagram of how touch works:

<div class="center width70"><amp-img src="/images/posts/2019-05-02_1.png" width="1600" height="1371" alt="Simplified diagram of how touch input works for our kiosk" layout="responsive"></amp-img></div>
<figcaption class="center">Simplified diagram of how touch input works for our kiosk</figcaption>

For all of our current touchscreen kiosk products, this diagram is similar. In the case of Hudson Yards, the kiosks are higher resolution with greater processing power, but the flow of events and visual output remains the same.

So, armed with a moderate understanding of how touch works, we began trying to diagnose the intermittent issues.

## Log all the things

To start with, we did some manual logging via CLI tools by connecting to kiosks via SSH while they were unresponsive. We found fairly quickly that while the kiosk may appear unresponsive, [Xorg](https://www.x.org/wiki/){:target="_blank"}{:rel="noopener"} was still receiving touch input. This was easily verified by using [xinput test](https://www.systutorials.com/docs/linux/man/1-xinput/){:target="_blank"}{:rel="noopener"}, which shows the input events coming from a particular device.

But manually monitoring one kiosk will only get you a short distance, so we started to enable and collect as many debugging logs as possible.

First, we turned on Chromium logging for the third-party player we use. While this didn't turn out to be useful for diagnostic purposes, it did give us a rough way of determining whether or not the web app was being successfully used. For some reason, fonts were being logged whenever the page would change in the web app, which gave us a heuristic for interaction.

Next, we took a look at [evtest](https://manpages.ubuntu.com/manpages/trusty/man1/evtest.1.html){:target="_blank"}{:rel="noopener"} and [mtdev-test](https://wiki.ubuntu.com/Multitouch/Testing/CheckingMTDevice){:target="_blank"}{:rel="noopener"}, which are tools to directly watch and evaluate input device events and multi-touch events, respectively. We used them make sure that multi-touch events were not interfering with touch in general, as the Chromium-based player was now set to ignore any multi-touch events.

We also added Splunk HEC logging (hidden behind a debug flag) to our kiosk web app. We're verbosely logging a variety of things, including heartbeats, interactions of any kind (touch, mouse, keyboard, etc.), and interactions with the underlying kiosk player software. This, in particular, has proved invaluable for operating our kiosks in this highly-visible space.

## Tools on tools

In parallel to logging, we wanted a way to both log and possibly create new touch events. Unlike mouse events, where tools like [xdotool](https://github.com/jordansissel/xdotool){:target="_blank"}{:rel="noopener"} are available to simulate keyboard input and mouse activity on top of the underlying Xorg functions, there didn't seem to be any great tools for simulating touch input.

After a bit of consideration, we decided to use [evemu](https://github.com/freedesktop/evemu){:target="_blank"}{:rel="noopener"} to both record and playback touch events. This allowed us to debug while also providing us and our partner with a way to perform extended automated testing on the physical kiosks.

evemu is interesting as it actually emulates input devices at a lower level than tools like xdotool would allow. That makes it so that, in the future, if we use something like Chromium that listens to evdev rather than Xorg for input, evemu remains useful.

## The takeaways

We had several takeaways from this experience:

**Operational logging is good**

While you don't necessarily want verbose debug logs at all times, it's really nice to have them when you need them. Unlike a web app running on a smartphone browser, we don't have the ability to say something like, "not our hardware." At the end of the day, while we delivered the interactive software experience, the entire kiosk package is what members of the public expect to have as functional and useful.

**Understand the touch pipeline**

Once we had a handle on the end-to-end touch pipeline, it became easier to understand where we needed more investigation. This also allowed us to use the tools at our disposal in more optimal ways, such as using evemu for both logging and input replay, which maximized our progress.

**Narrowing down the root cause**

With the logging and tooling in hand, we were able to narrow down the bug to a particular problem with the Chromium-based player, which was rapidly fixed and deployed, much to the delight of everyone involved. In addition to the fix, we now have the logging and tooling to capture and address issues like this in the future.

## Appendix: list of tools we used

* xinput test: [https://www.systutorials.com/docs/linux/man/1-xinput/](https://www.systutorials.com/docs/linux/man/1-xinput/){:target="_blank"}{:rel="noopener"}
* evtest: [https://manpages.ubuntu.com/manpages/trusty/man1/evtest.1.html](https://manpages.ubuntu.com/manpages/trusty/man1/evtest.1.html){:target="_blank"}{:rel="noopener"}
* mtdev-test: [https://wiki.ubuntu.com/Multitouch/Testing/CheckingMTDevice](https://wiki.ubuntu.com/Multitouch/Testing/CheckingMTDevice){:target="_blank"}{:rel="noopener"}
* evemu: [https://github.com/freedesktop/evemu](https://github.com/freedesktop/evemu){:target="_blank"}{:rel="noopener"}
* xdotool: [https://github.com/jordansissel/xdotool](https://github.com/jordansissel/xdotool){:target="_blank"}{:rel="noopener"}
* Splunk HTTP Event Collector (HEC): [https://dev.splunk.com/view/event-collector/SP-CAAAE6M](https://dev.splunk.com/view/event-collector/SP-CAAAE6M){:target="_blank"}{:rel="noopener"}
