---
layout: post
title: "Recap: Transit Techies NYC #5: GTF5"
image: /images/posts/2018-12-04/2018-12-04-01-tyler-green-kohzy-koh.gif
excerpt: "A quick recap of Transit Techies NYC #5: GTF5, a meetup held on Wednesday, November 28, 2018"
---

# Recap: Transit Techies NYC #5: GTF5

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [Medium](https://mattjoseph.medium.com/recap-transit-techies-5-gtf5-950673bdce51){:target="_blank"}{:rel="noopener"}*

*A quick recap of Transit Techies NYC #5: GTF5, a meetup held on Wednesday, November 28, 2018*

Transit Techies NYC #5: GTF5 was held at the Intersection office in New York with 70+ folks in attendance.

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-04/2018-12-04-01-tyler-green-kohzy-koh.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-04/2018-12-04-01-tyler-green-kohzy-koh.gif" width="320" height="320" alt="Kohzy and Tyler kicking off the meetup" class="responsive" />
  </a>
  <figcaption class="center">Kohzy and Tyler kicking off the meetup</figcaption>
</figure>
</div>

[Kohzy Koh](https://www.linkedin.com/in/kohzy/){:target="_blank"}{:rel="noopener"} kicked us off with holiday cookies and a word from our sponsor, Intersection.

Next, Kohzy and [Tyler Green](https://www.linkedin.com/in/tylergreen/){:target="_blank"}{:rel="noopener"} started the meetup by  explaining an important change in the "speaker signaling system" we would be using. Previously, the meetup used "block-based signaling" for speakers. Now, we would be using "communications-based techie control" for handling speakers, or CBTC 😆 What would a transit meetup be if not for the transit jokes!

Onto our presenters for the evening!

## Smartwatch

The first speaker up was [Abhijit Valluri](https://www.linkedin.com/in/abhijitvalluri/){:target="_blank"}{:rel="noopener"}, who began by talking about how he is frequently late for the bus and train transfers. The whole situation makes him really sad, but fortunately, he is a software engineer with a smartwatch, and he had an idea of how to use those skills to solve his challenge.

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-04/2018-12-04-02-abhijit-valluri.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-04/2018-12-04-02-abhijit-valluri.gif" width="320" height="320" alt="Abhijit talking about his commuting experience" class="responsive" />
  </a>
  <figcaption class="center">Abhijit talking about his commuting experience</figcaption>
</figure>
</div>

He has a Garmin vivoactive 3, which isn't the smartest of smart watches. It uses the Garmin Connect IQ platform, which uses Monkey C, which is a bespoke, object-oriented language. It's called "Monkey C" because the person who made it likes monkeys. 🐵

His back end — which does most of the heavy lifting — is written in PHP. He used that to process the GTFS-realtime data feed from the MTA. He talked us through the GTFS-rt protobuf format and what it involves. The MTA extended the format, but you're not required to use the extension.

Google provides simple PHP GTFS-rt bindings, which makes it straightforward to process. You can learn more about the format and the bindings here: [https://developers.google.com/transit/gtfs-realtime/](https://developers.google.com/transit/gtfs-realtime/){:target="_blank"}{:rel="noopener"}

Next, Abhijit talked about the REST API he created for his app to use. He then demoed the app for all of us to see! It shows the time for the next train, and several others beyond that.

<div class="center width70">
  <amp-youtube
    data-videoid="7ugSNfB-xJ0"
    layout="responsive"
    width="480"
    height="270"
  ></amp-youtube>
  <figcaption class="center">Abhijit demoing his smartwatch app</figcaption>
</div>

An audience member asked about the smartwatch connectivity. Abhijit explained that this smartwatch uses Bluetooth to connect to the phone.

## Visualizing Citi Bikes

Next up was [Mallory Bulkley](https://www.linkedin.com/in/mallorybulkley/){:target="_blank"}{:rel="noopener"}, who took a single day of Citi Bike data and visualized all of the trips using Google Maps and the biking directions API.

We started off by getting some context: Citi Bike provides a lot of data on a monthly basis, including trip start and stop location, length of trip, gender, birth year, and more. They provide this for every trip!

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-04/2018-12-04-03-mallory-bulkley.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-04/2018-12-04-03-mallory-bulkley.gif" width="320" height="320" alt="Mallory presenting her visualization" class="responsive" />
  </a>
  <figcaption class="center">Mallory presenting her visualization</figcaption>
</figure>
</div>

From Google Maps biking directions API, you get a list of all inflection points in a route. In theory, it would have been easy to animate based on an average speed between inflection points. The problem with that approach: traffic circles. Since there are so many inflection points in a circle, the average speed is too fast during straight segments and too slow along the curved segments.

To fix that, Mallory ended up calculating a per segment speed based on the length of the whole trip.

<div class="center width70">
  <amp-youtube
    data-videoid="pp2cy0DaEsA"
    layout="responsive"
    width="480"
    height="270"
  ></amp-youtube>
  <figcaption class="center">Mallory speaking about her visualization work</figcaption>
</div>

She talked through some of the things she found, such as:

*   Longer rides the older that folks are
*   Average trip length is less than 13 minutes
*   Rides by gender vary by time of day

She used Firebase to store the routes and JavaScript for the animations, amongst other tools. You can [check out Mallory's interactive visualization on her website](https://mallorybulkley.com/citi-bike-visualization/){:target="_blank"}{:rel="noopener"}!

## MYmta Mobile App

Next up was [Scott Morris](https://www.linkedin.com/in/smorris-digitalleader/){:target="_blank"}{:rel="noopener"} to talk about the recently-launched MYmta mobile app, which is in beta. The MTA launched the app as both a native mobile app and a responsive web app.

They've been spending a lot of time getting feedback from users, and the idea of launching the beta was to open up feedback collection to everyone.

<div class="center width70">
  <amp-youtube
    data-videoid="W8dS1de7xEM"
    layout="responsive"
    width="480"
    height="270"
  ></amp-youtube>
  <figcaption class="center">Scott speaking about the MYmta app</figcaption>
</div>

The day after the meetup, they're launching app updates to support Paratransit users. Paratransit provides curb-to-curb service for users with disabilities.

Scott mentioned that one common question is, "why not just clean up the data and let developers like Google or Apple provide apps?" What they found is that people do want a single experience from the MTA, and they also want features like the ability to communicate with the MTA ("dialogue not monologue").

<div class="float-left width30">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-04/2018-12-04-04-scott-morris.gif" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-04/2018-12-04-04-scott-morris.gif" width="320" height="320" alt="Scott talking through future enhancements" class="responsive" />
  </a>
  <figcaption class="center">Scott talking through future enhancements</figcaption>
</figure>
</div>

For building the app, the MTA focused on an iterative process, and they're transitioning to proper agile development in 2019. The iterative process has also provided other systems benefits, like documentation of inventory and data cleanup, which help other projects.

They're focused on fixing user experience, data cleanup, and more.

One audience question was about whether or not the data is all available in the developer portal. The short answer is yes, but there's some cleanup to make it work in an app, which other app developers also do.

Another person asked about duplication of functionality across apps like NJ Transit and others causing issues, but that's something that will take time to address.

The last question was about whether or not this will replace the MetroCards. That's a separate focus, but the idea is to provide a unified experience at the end.

For more about Transit Techies NYC, check out the website here: [https://transittechies.nyc](https://transittechies.nyc){:target="_blank"}{:rel="noopener"}

_If you liked this post, let me know, and share with others!_