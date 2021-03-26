---
layout: 2018design-post
title: Building Smart City Kiosks with Web App Practices
---

# Building Smart City Kiosks with Web App Practices

## Making cities smarter requires smart engineering habits 🏗️

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [the Intersection blog](https://ixn.intersection.com/building-smart-city-kiosks-with-web-app-practices-b99ccb1134f4){:target="_blank"}{:rel="noopener"}*

Building human-centered digital experiences is always a challenge. That challenge increases dramatically when trying to bridge the divide between the built environment, physical product, and digital experience. That's one of the tasks our engineering team is aiming to achieve at [Intersection](https://www.intersection.com){:target="_blank"}{:rel="noopener"}.

<div class="center width70"><amp-img src="/images/posts/2019-02-12_1.jpg" width="2600" height="1733" alt="A Chicago CTA Interactive Kiosk" layout="responsive"></amp-img></div>
<figcaption class="center">A Chicago CTA Interactive Kiosk</figcaption>

After recently launching our interactive kiosks, otherwise known as IxNTouch kiosks, with the Chicago Transit Authority, it seems like the perfect time to discuss the tech stack we used to get there. After all, these rider-centric devices are the product of years of iteration, in terms of not only user experience and design, but also engineering lessons learned.

While this post focuses on our engineering work, you can check out[ Kohzy Koh](https://ixn.intersection.com/@kohzy){:target="_blank"}{:rel="noopener"}'s post,*[Two-way Communications in Transit: Lessons Learned From Designing Public Interactive Kiosks](https://ixn.intersection.com/two-way-communications-in-transit-lessons-learned-from-designing-public-interactive-kiosks-d930a487c5ef){:target="_blank"}{:rel="noopener"}*, to learn more from a product and UX perspective.

Let's take a look at a few of the important elements of our technology stack! I'll be focusing on the kiosk software experience of **IxNTouch**.

## Foundation of Chromium

For both the interactive kiosks and local development, we rely on[ Chromium](https://www.chromium.org){:target="_blank"}{:rel="noopener"} to power our experience. In the case of the kiosks, we depend on a Chromium-based player that uses the[ Chromium Embedded Framework](https://en.wikipedia.org/wiki/Chromium_Embedded_Framework){:target="_blank"}{:rel="noopener"} to show frames with web content. Historically, we depended on some of the player-specific features to power our kiosk experiences, but we have since committed to Chromium as the generic foundation.

This is a huge engineering win, because instead of writing architecture-specific software, we can build rapidly using the latest web standards. I will touch on our web app approach in the next section, but Chromium itself is a separate win for us.

<div class="center width70"><amp-img src="/images/posts/2019-02-12_2.png" width="1280" height="821" alt="The IxNTouch web app with Chrome Dev Tools open" layout="responsive"></amp-img></div>
<figcaption class="center">The IxNTouch web app with Chrome Dev Tools open</figcaption>

Since Chromium is our foundation, we can safely depend on Chromium Developer Tools built into the browser, as well as add-ons specific to our framework and dependency selections. When something isn't working as expected, we can debug locally or on kiosks using remote debugger, via developer tools, and drill down as needed. Exploring the DOM, stepping into functions, testing offline state, and watching data usage are made significantly easier by choosing Chromium.

## Velocity Using Web Tech

When it comes to the user-facing kiosk experience, we use web technology to power everything. At our core, we're using JavaScript (ES6+), HTML, and CSS, with React as the framework. That's right; just like you might build a web app for desktop or mobile users, we've chosen a modern framework that gives us simple control over data flow, componentization, and code reuse.

Unlike alternative paths, this has a number of critical benefits, including:

* We're able to build and test using the tools we're already familiar with

* Our talented engineers don't have to deal with the intricacies of a proprietary stack

* Our kiosk web app can be tested and reviewed on a variety of devices, including tablets, touchscreen laptops, and phones 💻 🖥📱

* We can focus on differentiating the experience and use tools like styled-components, Redux, and Workbox to help us get there

* We can use best practices for mobile development around areas such as offline state, as they overlap greatly with our kiosk experience

* We use awesome tools like React Storybook to drill into our components and develop them with clean reuse in mind

<div class="center width70"><amp-img src="/images/posts/2019-02-12_3.jpg" width="960" height="1280" alt="Jack, one of our engineers, debugging on a test kiosk (without applying rotation! 😆)" layout="responsive"></amp-img></div>
<figcaption class="center">Jack, one of our engineers, debugging on a test kiosk (without applying rotation! 😆)</figcaption>

Additionally, since we're using Chromium, we get to take advantage of tools like[ React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en){:target="_blank"}{:rel="noopener"} and[ Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en){:target="_blank"}{:rel="noopener"} as we're building, to create quick feedback loops. Debugging and digging into the running app is essential for our development process.

## Connected, But Not Always

Similar to the mobile world, our kiosks need to work 24/7. In some cases, kiosks are connected exclusively via LTE (cellular connection), which not only limits our bandwidth and data usage, but also causes latency and occasional network drops.

To account for this, our web app has to work in a variety of offline states. Again, by virtue of being a regular web app in a Chromium-based environment, we take advantage of a[ Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API){:target="_blank"}{:rel="noopener"} to handle transparently caching data and detecting offline state.

<div class="center width70"><amp-img src="/images/posts/2019-02-12_4.gif" width="540" height="960" alt="Animated GIF showing the offline/online state switch" layout="responsive"></amp-img></div>
<figcaption class="center">Animated GIF showing the offline/online state switch</figcaption>

In particular, while we use both pre-caching and runtime caching, we also detect when requests are failing and use that to determine if we've entered an offline state. At that point, we can determine how to handle the offline state on a per-component or per-data basis. For instance, in the image above, you can see arrivals disappear after around three minutes of being offline, as this data is rapidly considered stale. On the other hand, we can continue to show alerts or video content for longer, as those are not immediately considered stale.

In both cases, the Service Worker is transparently caching the data and alerting commuters about the online/offline state, while leaving the business-oriented decision of "what content to expire and when" to the app layer.

## What's Next?

As we continue to build out our kiosks and other smart city experiences, we are excited to share more about the technology we're using. This includes deep dives into the above topics, including management of off-line state, web-stack dependencies, and our development pipeline. We'll also cover our use of Storybook, lessons learned from previous kiosk development, and some of the challenges we've run into (including a Chromium bug!).

In many ways, building smart city experiences is very much the same as building for mobile or the web: our goal is to keep the user front and center and to provide them with the best possible experience. As engineers, we bring that experience to life with the right tools and techniques.
