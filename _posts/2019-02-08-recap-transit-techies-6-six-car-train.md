---
layout: post
title: "Recap: Transit Techies NYC #6: Six-Car Train"
image: /images/posts/2019-02-08/2019-02-08-01-tyler-green.jpg
excerpt: "A quick recap of Transit Techies NYC #6: Six-Car Train, a meetup held on Wednesday, January 30, 2019"
---

# Recap: Transit Techies NYC #6: Six-Car Train

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [Medium](https://mattjoseph.medium.com/recap-transit-techies-nyc-6-six-car-train-1a91b22e3815){:target="_blank"}{:rel="noopener"}*

*A quick recap of Transit Techies NYC #6: Six-Car Train, a meetup held on Wednesday, January 30, 2019*

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-01-tyler-green.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-01-tyler-green.jpg" width="2560" height="1707" alt="Tyler Green kicking off the meetup" class="responsive" />
  </a>
  <figcaption class="center">Tyler Green kicking off the meetup</figcaption>
</figure>
</div>

[Tyler Green](https://www.linkedin.com/in/tylergreen/){:target="_blank"}{:rel="noopener"} kicked off the session with a few housekeeping notes. As usual, we started off with a gag!

[Kohzy Koh](https://www.linkedin.com/in/kohzy/){:target="_blank"}{:rel="noopener"} lamented about the lackluster check-in process, but we're not sure whether the "front desk shutdown" was going to occur. L-train burn! 🔥😆

They also mentioned the website is now up for Transit Techies NYC! You can check it out here: [https://transittechies.nyc](https://transittechies.nyc){:target="_blank"}{:rel="noopener"}

<div class="center width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-02-kohzy-koh.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-02-kohzy-koh.jpg" width="2560" height="1707" alt="Kohzy Koh running through the presenters" class="responsive" />
  </a>
  <figcaption class="center">Kohzy Koh running through the presenters</figcaption>
</figure>
</div>

## PolicySpace — Francis Tseng

First up was Francis Tseng to present about PolicySpace. Francis' background is in simulation and machine learning.

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-03-francis-tseng.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-03-francis-tseng.gif" width="320" height="320" alt="Francis Tseng presenting" class="responsive" />
  </a>
  <figcaption class="center">Francis Tseng presenting</figcaption>
</figure>
</div>

This particular project involved working with a researcher in Brazil. He worked on modeling transit demand based on various changes in the urban landscape. This involved treating roads as FIFO queues, treating spaces as continuous, and modeling both public and private transit.

One of the techniques used is called agent-based modeling. In order to model things like a flock of birds, it involves setting parameters on specific elements of the model and seeing how they interact and affect the overall system. Another technique used is called discrete event simulation.

<div class="center width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-04-francis-tseng.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-04-francis-tseng.jpg" width="2560" height="1707" alt="Francis Tseng showing a visualization" class="responsive" />
  </a>
  <figcaption class="center">Francis Tseng showing a visualization</figcaption>
</figure>
</div>

5.1 million agents were simulated, which did run into performance limitations and memory constraints. It took 16 hours to do one run!

The modeling used inputs like OpenStreetMap data and GTFS data for routes, stops, and trips. There were many challenges in marrying this data, and he encountered many issues, such as going through the routing by hand to figure out why a route wasn't found.

Another issue was an instance where public transit was 3x-5x slower than private transit. It turns out that is actually true for various reasons, and Francis validated against alternative maps.

The simulations are contingent on things like the quality and availability of data (of course!).

## Real-time Amtrak Data — Sunny Zheng

Next up was Sunny Zheng to talk about real-time Amtrak data!

For a bit of history, there was a older site that provided Amtrak data, but it wasn't great. Amtrak released a site with real-time data, but the UI left room for improvement.

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-05-sunny-zheng.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-05-sunny-zheng.gif" width="320" height="320" alt="Sunny Zheng demoing his app" class="responsive" />
  </a>
  <figcaption class="center">Sunny Zheng demoing his app</figcaption>
</figure>
</div>

Sunny dug through the source to figure out the data source. This also changed later, when the Amtrak site switch from the Google-based data source to a more blob-data-oriented format, that Sunny essentially had to reverse engineer. Turns out that it involved multiple base64-encoded strings and running a decryption process on it…twice!

This involves about 280MB/day in raw JSON, with many thousands of data points. The Amtrak RTTL app has been improved, but perhaps not as much as folks would like.

Sunny walked us through a demo, even though today the Chicago hub is shut down (due to serious sub-zero weather).

<div class="center width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-06-sunny-zheng.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-06-sunny-zheng.jpg" width="2560" height="1707" alt="Sunny Zheng showing an alternative website" class="responsive" />
  </a>
  <figcaption class="center">Sunny Zheng showing an alternative website</figcaption>
</figure>
</div>

A question was asked about why Amtrak doesn't comply with open data policies even though it is heavily subsidized by the government. Turns out that they will give you a static GTFS feed if you submit a FOIA request, but by then it's out of date ☹️

## Digital Matatus Project — Jacqueline Klopp

Jacqueline Klopp came up next to talk about popular transport, which is the most used form of transit in cities around the world. This also has an impact on climate change, since transforming transport can impact carbon output. This type of transit is run by private operators and does not have the markings of a formalized "public transit system."

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-07-jacqueline-klopp.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-07-jacqueline-klopp.gif" width="320" height="320" alt="Jacqueline Klopp presenting" class="responsive" />
  </a>
  <figcaption class="center">Jacqueline Klopp presenting</figcaption>
</figure>
</div>

Part of this is about moving more towards mobility-as-a-service with data as the critical underlying infrastructure.

In that vein, the Digital Matatus is about using the cellphones that are in nearly everyone's hands to build up the necessary open data for locations that do not have formalized public transit systems. This involved working with the Nairobi students to map out the transit system. For example, there was a huge number of stops that were informal, based on the patterns of where drivers would drop people off. This data was then picked up and used to do network analysis.

The project also created GTFS data good enough to upload to Google Maps, and there are about 300,000 uses of the data every week, which shows that there is significant demand. In other cities, data like this is ending up on multimodal planning screens.

<div class="center width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-08-jacqueline-klopp.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-08-jacqueline-klopp.jpg" width="2560" height="1707" alt="Jacqueline Klopp talking about the Digital Matatus project" class="responsive" />
  </a>
  <figcaption class="center">Jacqueline Klopp talking about the Digital Matatus project</figcaption>
</figure>
</div>

Jacqueline highlighted that we need better tools, especially where there are no transit agencies. Additionally, we need to rethink standards like GTFS to incorporate the reality places like Nairobi.

Part of this is getting people involved and creating open source and open data! 🙂

## MTA Performance Dashboard — Lauren Tarte and Anne Halvorsen

Our final presentation for the evening was by Lauren Tarte and Anne Halvorsen to talk about the public performance dashboards by the MTA. The transit system wasn't in a great operational state, so the project was started out of a need for greater public transparency. Here's one of the sites calling out the need for a better dashboard: [http://transitcenter.org/2017/08/31/mta-five-qualities-of-a-useful-public-dashboard/](http://transitcenter.org/2017/08/31/mta-five-qualities-of-a-useful-public-dashboard/){:target="_blank"}{:rel="noopener"}

<div class="center width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-09-lauren-tarte-anne-halvorsen.jpg" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-09-lauren-tarte-anne-halvorsen.jpg" width="2560" height="1707" alt="Lauren Tarte and Anne Halvorsen sharing data processing ideas" class="responsive" />
  </a>
  <figcaption class="center">Lauren Tarte and Anne Halvorsen sharing data processing ideas</figcaption>
</figure>
</div>

To build the dashboard, they started with vehicle data (AVL). The MTA also did a lot of research around what makes for good public-facing metrics. They ended up with these three metrics:

* Additional platform time
* Additional train time
* Customer journey time performance

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2019-02-08/2019-02-08-10-lauren-tarte-anne-halvorsen.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2019-02-08/2019-02-08-10-lauren-tarte-anne-halvorsen.gif" width="320" height="320" alt="Lauren Tarte and Anne Halvorsen presenting" class="responsive" />
  </a>
  <figcaption class="center">Lauren Tarte and Anne Halvorsen presenting</figcaption>
</figure>
</div>

Calculating these involved a lot of data and analysis, which included areas of performance wins, such as dropping one calculation from two days to 45 minutes!

The original front end was Power BI (for a number of reasons). They rebuilt it using open source technology.

You can see it here: [http://dashboard.mta.info](http://dashboard.mta.info){:target="_blank"}{:rel="noopener"}

_If you liked this post, let me know, and share with others!_
