---
layout: 2018design-post
title: Web App Multi-touch is Complicated
---

# Web App Multi-touch is Complicated

## Tl;dr building a non-zoomable web app for kiosks is hard

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [the Intersection blog](https://ixn.intersection.com/web-app-multi-touch-is-complicated-16e1db2b29ba){:target="_blank"}{:rel="noopener"}*

Touch interaction is fundamental to the kiosk experiences we build in transit. Interaction patterns of the past, such as buttons and knobs, have all but given way to touchscreens. It makes sense, as engineers can create almost infinitely varied experiences without inventing new human-interface devices to match those experiences.

That said, we ran into a pretty interesting issue as we were building our latest kiosk experience. As you might recall from my post, [*Building Smart City Kiosks with Web App Practices*](/posts/2019-02-12-building-smart-city-kiosks-with-web-app-practices/), we built a web app, which is then loaded in a Chromium-based player to deliver that interactive kiosk experience. Almost immediately, we ran into this question:

**How do we prevent users from accidentally pinch-zooming our entire kiosk web app?**

<div class="center width70"><amp-img src="/images/posts/2019-03-08_1.gif" width="320" height="320" alt="Zooming the entire kiosk app. This breaks the experience" layout="responsive"></amp-img></div>
<figcaption class="center">Zooming the entire kiosk app. This breaks the experience</figcaption>

This seemingly simple question turned into quite the rabbit hole! Here's the journey we went through.

## It started with some searching

As many engineers do, I started out by searching in the problem space. What have others done? Do the JavaScript event tricks I've used in the past still work? How have folks solved this for Chromium-based kiosks in the past?

Some solutions, such as [this post on Stack Overflow](https://stackoverflow.com/questions/37379694/javascript-how-to-stop-pinch-zoom-multi-touch-input-attacks){:target="_blank"}{:rel="noopener"}, are a bit out of date. While a lot of solutions found online would have worked before, as of Chromium v51, event listeners are now [passive by default](https://developers.google.com/web/updates/2016/06/passive-event-listeners){:target="_blank"}{:rel="noopener"}, which means they don't automatically block behavior.

This change is important because there are accessibility concerns related to zooming on web pages and apps. Many users rely on this capability in order to access content, including small, hard-to-read text.

While I did end up trying a JavaScript solution, we'll come back to that later!

As I started focusing on kiosk-related solutions, such as [this post](https://stackoverflow.com/questions/22999829/disable-chrome-pinch-zoom-for-use-in-kiosk){:target="_blank"}{:rel="noopener"}, it seemed like there might be a better way to just disable the pinch-zoom gesture at the page level, while leaving it intact for components, such as a map, that might need it. It turns out there are **many** less-than-perfectly documented Chromium flags, which can be found on [this list that is automatically generated from the Chromium codebase](https://peter.sh/experiments/chromium-command-line-switches/){:target="_blank"}{:rel="noopener"}.

Would a simple startup flag work? Let's find out.

## Not Chromium but CEF

It looked like I found a solution! Just pass `--disable-pinch` as a startup flag, and all will work magically. But here's the twist: we don't use Chromium itself; we use a proprietary player that uses [Chromium Embedded Framework (CEF)](https://en.wikipedia.org/wiki/Chromium_Embedded_Framework){:target="_blank"}{:rel="noopener"}.

Now, based on some [cursory reading](https://bitbucket.org/chromiumembedded/cef/issues/1059/cef3-multi-touch-support-with-offscreen){:target="_blank"}{:rel="noopener"}, it looked like CEF might support command-line flags, but the player we use would have to support them as well. Sadly, the player does not.

I started to explore other Chromium flags in the hopes that the player we use would allow them to work. In particular, this led to an interesting alternative: you can pass `— -enable-viewport` and `— -enable-experimental-web-platform-features`, which will allow you to use the experimental `@viewport` CSS properties, which have the same effect as the viewport meta tag on mobile.

```
@viewport {
  width: device-width;
  zoom: 1.0;
  min-zoom: 1.0;
  max-zoom: 1.0;
}
```


With the flags on, that accomplishes roughly the same as this often-used meta tag would on mobile:

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```


Two takeaways:

* It doesn't appear to be documented anywhere that you need to use both of these flags together, rather than just `--enable-viewport` by itself

* These also don't work on the proprietary player we use 😔

Okay. Queue the *Inception* music: it's time to go deeper.

## The rabbit hole of Linux multi-touch support

Some background: in general, when you're using [X Window System](https://www.x.org){:target="_blank"}{:rel="noopener"} on Linux, input goes through [xinput](https://www.x.org/archive/X11R7.7/doc/man/man1/xinput.1.xhtml){:target="_blank"}{:rel="noopener"} before going to your apps. This is how it works for pointing devices, like mice. A word of caution as well: while this section seems brief, it involved looking at both Chromium and kernel source code, which while awesome from a learning perspective, they are both time consuming!

After my failure at the Chromium/CEF level, my next question was: can you modify/disable multi-touch support on Linux?

The answer is complicated. First: for most standard Linux setups, input goes through **xinput**. This includes pointers (mice, touchpads, etc.), touch in general, and multi-touch. While xinput does have configuration options, such as applying a `TransformationMatrix` to rotate your touchscreen, it does not have the ability to adjust or turn on/off multi-touch for a given touchscreen. It does have the capability to adjust touchpad gestures, but that isn't applicable here.

Furthermore, at least as of Ubuntu 16.04 LTS with Chromium v71, it appears that Chromium listens directly to **evdev** (event device) rather than **xinput** for touch events. You can see that by using `xinput test <DEVICE_ID>` and comparing something like gedit to Chromium with touch activity.

<div class="center width70"><amp-img src="/images/posts/2019-03-08_2.gif" width="720" height="448" alt="Comparing xinput test between gedit and Chromium on Ubuntu 16.04 LTS" layout="responsive"></amp-img></div>
<figcaption class="center">Comparing xinput test between gedit and Chromium on Ubuntu 16.04 LTS</figcaption>

However, this is not the case for the proprietary Chromium-based player, but that doesn't change the fact that xinput does not help us.

My next step was to go deeper and understand how multi-touch events work at the evdev level. I learned about the Linux MT Protocol, which standardizes events like ABS_MT coming from evdev. Using tools like [mtdev-test](https://wiki.ubuntu.com/Multitouch/Testing/CheckingMTDevice){:target="_blank"}{:rel="noopener"}, I was able to watch streaming touch events, which are what Chromium uses to receive touch input. You can learn more about the multi-touch protocol [here on the kernel docs](https://www.kernel.org/doc/Documentation/input/multi-touch-protocol.txt){:target="_blank"}{:rel="noopener"}.

In short, there is no way to disable multi-touch at the Linux operating system level without recompiling the kernel with multi-touch off. No dice.

Okay, time to go back up to the web/browser tier and see if I missed something.

## CSS "touch-action", passive events, and more

After my digression into the world of operating system multi-touch support, I decided to see if I missed anything in the browser. It turns out, I did.

It turns out there's a CSS property called `touch-action` that lets a web developer specify the panning/pinch-zoom behavior in their web app. You can check out the docs [here on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action){:target="_blank"}{:rel="noopener"}.

So, I started with a hack, by adding this as part of our global CSS:

```
* {
  touch-action: pan-x pan-y;
}
```


And what do you know, it worked! Well, some of the time. 🤔

There's actually an issue in Chromium where the `touch-action` property only filters events when they start. If you are in the middle of panning *and then try a pinch gesture*, the page will still zoom!

Good news: this is fixed in Chromium v72 ([check out this bug report and read about why Google Maps was one of the reasons it wasn't fixed for a long time](https://bugs.chromium.org/p/chromium/issues/detail?id=771330){:target="_blank"}{:rel="noopener"}).

Bad news: Chromium v72 was still in canary at the time of this happening, and furthermore, the player (using CEF) wasn't going to upgrade for a while.

Next, I tried combining the `touch-action` property with some of the JavaScript solutions I ignored at the start. Specifically, let's try the CSS property, plus JavaScript to prevent default behavior, like this:

```
window.addEventListener('touchstart', function(event) {
  if (event.targetTouches.length >= 2) {
    console.log('Found and prevented multi-touch gesture on touchstart');
    event.preventDefault();
  }
}, {passive: false});

window.addEventListener('touchmove', function(event) {
  if (event.targetTouches.length >= 2) {
    console.log('Found and prevented multi-touch gesture on touchmove');
    event.preventDefault();
  }
}, {passive: false});
```


Good news again: this prevents the pan-then-pinch-zoom problem. Furthermore, we might even be able to use this without the `touch-action` CSS property!

Bad news again: I found another issue. This actually doesn't work to prevent pinch-zoom while in the middle of momentum-based panning. Essentially, that means you can *fling* the area in a pan, and then try pinching, and it will still zoom.

<div class="center width70"><amp-img src="/images/posts/2019-03-08_3.gif" width="720" height="729" alt="Chromium ignoring the preventDefault for performance reasons" layout="responsive"></amp-img></div>
<figcaption class="center">Chromium ignoring the preventDefault for performance reasons</figcaption>

Chromium gives this great error to explain why it doesn't work:
> [Intervention] Ignored attempt to cancel a touchmove event with cancelable-false, for example because scrolling is in progress and cannot be interrupted.

So even if we try to filter with JavaScript on both touchstart and touchmove, Chromium "intervenes" to prevent poor performance in scrolling.

Well, that's an issue that I can't fix. 😔

## So where did we end up?

At [Intersection](https://www.intersection.com){:target="_blank"}{:rel="noopener"}, my team has worked with our Chromium-based player vendor to support disabling multi-touch via configuration flag. This works, but it disables multi-touch completely. This is unlike the `--disable-pinch` flag that Chromium supports, which only disables the page-level zooming.

In general, however, this is not a solution. This impacts any touch-capable devices that can load desktop web apps, such as touchscreen laptops, tablets and mobile (in desktop mode), Chromebooks, and more. You can try some of the partly-working solutions I outlined on this great example page (created by the Chromium team, no less) that shows how the CSS `touch-action` property works (in theory): [https://googlechrome.github.io/samples/touch-action/](https://googlechrome.github.io/samples/touch-action/){:target="_blank"}{:rel="noopener"}.

In search for a more permanent fix, I've [submitted a Chromium bug report for further action](https://bugs.chromium.org/p/chromium/issues/detail?id=919282){:target="_blank"}{:rel="noopener"}.

As of January 8, 2019, the answer from the Chromium team is: "…we seem to ignore touch action while in a momentum/fling based scroll."

🤷‍♂️ I hope this gets fixed relatively soon. While we have a specific need for our kiosks, the proliferation of touch-based devices that need to support desktop experiences (e.g., touchscreen Chromebooks) means that this will become an important issue over time. Ideally, the `touch-action` property will cover all use cases in the long term!
