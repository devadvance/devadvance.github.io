---
layout: post
title: Quirks of the Page Visibility API
image: /images/posts/2023-02-01-page-visibility/page-visibility-api.jpg
excerpt: Exploring the quirks of the Page Visibility API across platforms and browsers.
---

# Quirks of the Page Visibility API

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/).

The [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API){:target="_blank"}{:rel="noopener"} is a useful tool for web developers to detect whether a page is visible to a user or not, as well as understand when transitions between those states take place.

When using this API, it is important to understand the limitations in what you can/cannot detect. There are many situations where a developer might consider a page to be "hidden" yet the API will not detect the state as such.

I did some lightweight testing on a few operating systems and browsers, covering scenarios on each that are common for users.

## Testing methodology

This is not a rigorous lab test. There is a convenient testing page located here: [https://testdrive-archive.azurewebsites.net/Performance/PageVisibility/Default.html](https://testdrive-archive.azurewebsites.net/Performance/PageVisibility/Default.html){:target="_blank"}{:rel="noopener"}.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2023-02-01-page-visibility/page-visibility-api.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <picture>
      <source type="image/avif" srcset="/images/posts/2023-02-01-page-visibility/page-visibility-api.avif" />
      <source type="image/jpeg" srcset="/images/posts/2023-02-01-page-visibility/page-visibility-api.jpg" />
      <img src="/images/posts/2023-02-01-page-visibility/page-visibility-api.jpg" width="1000" height="750" alt="Screenshot of the Page Visibility API tool" class="responsive" />
    </picture>
  </a>
  <figcaption class="center">Screenshot of the Page Visibility API tool</figcaption>
</figure>
</div>

The page was visually inspected to ascertain whether or not the visibility change was detected. In this demo, green segments of the line indicate a visible page and red segments indicate a hidden page, according to the Page Visibility API.

## Testing

### macOS 13.1

**Chrome 109**

* **Detected via Page Visibility API**: Browser window minimized, browser window covered by another window that is larger, tab hidden in an active browser window, docking/undocking a tab to a browser window, switched to a different desktop, 
* **Not detected via Page Visibility API**: Browser window covered by another browser window that is the same size or smaller, show desktop via F11 or swipe on touchpad, opening Launchpad, opening Mission Control, dragging the window in Mission Control, browser dialogs (print, save, etc.), during animation to/from full screen

**Safari 16.2**

* **Detected via Page Visibility API**: Browser window minimized, browser window covered by another window that is larger, tab hidden in an active browser window, switched to a different desktop, during animation to/from full screen
* **Not detected via Page Visibility API**: Browser window covered by another browser window that is the same size or smaller, show desktop via F11 or swipe on touchpad, opening Launchpad, opening Mission Control, dragging the window in Mission Control, browser dialogs (print, save, etc.), docking/undocking a tab to a browser window, tab overview

### Windows 10 Pro

**Chrome 109**

* **Detected via Page Visibility API**: Browser window minimized, browser window covered by another window that is larger, browser window covered by another browser window that is the same size, tab hidden in an active browser window, docking/undocking a tab to a browser window
* **Not detected via Page Visibility API**: Browser window covered by another browser window that is smaller, browser dialogs (print, save, etc.), during animation to/from full screen, during Task View

### Android 13

**Chrome 109**

* **Detected via Page Visibility API**: Another app is active on the screen, another Chrome tab is active on the screen, screen is off, Chrome tab overview as an inactive tab, split screen: entering split screen, going to other features in Chrome (Downloads, Settings, etc.)
* **Not detected via Page Visibility API**: Android overview mode, Chrome tab overview while the active tab, split screen: redrawing when split changes, split screen: exiting split screen, Assistant overlay on screen, URL entry mode, during the swipe between tabs, while covered by the notification shade

### iPad OS 16.3

**Chrome 109**

* **Detected via Page Visibility API**: Another app is active on the screen, another Chrome tab is active on the screen, screen is off, Chrome tab overview (all times), going to other features in Chrome (Downloads, Settings, etc.)
* **Not detected via Page Visibility API**: Some dialogs (Bookmarks, Reading List, Password Manager, etc.), iPad OS overview screen (swipe up), Control Panel covering screen, Notification Center down, split view: selecting another app, split view: redrawing when split changes, split view: exiting split view, accessing camera from the Notification Center

**Safari 16.3**

* **Detected via Page Visibility API**: Another app is active on the screen, another Safari tab is active on the screen, screen is off, Safari tab overview as an inactive tab
* **Not detected via Page Visibility API**: Some dialogs (Bookmarks, Reading List, Password Manager, etc.), iPad OS overview screen (swipe up), Control Panel covering screen, Notification Center down, split view: selecting another app, split view: redrawing when split changes, split view: exiting split view, Safari tab overview as the active tab, accessing camera from the Notification Center

**Note**: for testing purposes, I did not use an iOS device, but iPad OS is a reasonable proxy for what might be encountered on iOS.

## Noteworthy observations

There are a few interesting results in this testing:

* On iPad OS, you can access the camera and take photos from the Notification Center, and none of this will be detected as hiding the page in Chrome or Safari.
* Operating system-level overview generally isn't considered hiding the page.
* Whether or not a page will be considered "hidden" in the tab overview depends on the tab's active/inactive state and which browser you're using.
* Split screen/split view has OS-specific nuances.

## Video demo on Android

I recorded a demo of some of the cases I tested on Android 13:

<div class="center width30">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="332"
    height="720"
    class="responsive"
    title="Demo of the Page Visibility API on Android 13">
    <source src="/images/posts/2023-02-01-page-visibility/demo_video_vp9.webm"
      type="video/webm" />
    <source src="/images/posts/2023-02-01-page-visibility/demo_video_h264.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of the Page Visibility API on Android 13</figcaption>
</figure>
</div>
