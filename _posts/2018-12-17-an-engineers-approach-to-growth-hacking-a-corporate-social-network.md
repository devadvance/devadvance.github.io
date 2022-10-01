---
layout: post
title: An engineer's approach to growth hacking a corporate social network
image: /images/posts/2018-12-17_4.png
---

# An engineer's approach to growth hacking a corporate social network

## Why grow your Instagram followers when you have plenty of co-workers?

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/). *Also published on [Hacker Noon](https://hackernoon.com/an-engineers-approach-to-growth-hacking-a-corporate-social-network-6727358cc78d){:target="_blank"}{:rel="noopener"}*

Imagine you're at a company with tens of thousands of employees. How do you reach out to all of them? BCC them on a mass email? Work with communications to send a newsletter?

Nope; you become the influencer-equivalent of your corporate social network. 😎

Several years ago, the company I worked for brought a new social network tool called Jive into the company. While Jive is oriented more towards being a community platform rather than a documentation platform — unlike tools like MediaWiki or Confluence — it was able to do both.

I spent a good amount of time over several years internally writing documents about cloud platforms, live blogging technology forums, posting videos and summaries of technical presentations, creating discussions on relevant topics (e.g., "will AI affect call centers?"), and generally bringing awareness to technology-centric topics.

By the end of my tenure at the company, over 1/4th of the company's 50,000 employees had seen my content, watched my videos, or clicked my links.

With that in mind, let's dive into what I did to amplify my content's reach and growth hack a corporate social network.

## A bit of background: what is Jive?

As I mentioned, the social network tool that I used was Jive. Amongst other features, it has the following:

* You can create groups, spaces, and projects to hold and segment content
* You can create different types of content, such as documents, blog posts, discussions, polls, events, videos, and more
* Users can follow each other, optionally receiving in-platform and/or email notifications

Here's a look at some of the content on [the Jive Developers space on the Jive website](https://community.jivesoftware.com/community/developer){:target="_blank"}{:rel="noopener"}:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-17_1.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-17_1.png" width="2000" height="1250" alt="Content in the Jive Developers space" class="responsive" />
  </a>
  <figcaption class="center">Content in the Jive Developers space</figcaption>
</figure>
</div>

## Content as a foundation

Before I could start amplifying my content, I needed content in the first place. Relevant content is key in the world of corporate social networks. This [Gary Vaynerchuk quote](https://www.garyvaynerchuk.com/biography/){:target="_blank"}{:rel="noopener"} is a good place to start:

> *"[N]o amount of paid media is going to turn bad creative into good content."*

That's the truth, especially in a large company where people are bombarded with emails, instant messages, meetings, video calls, physical posters, and digital signage. The relevance of your content will drive engaged viewers. You need to focus on creating genuine, helpful, and memorable content.

If you're an engineer, this means two things: useful technical documentation and technical information for non-technical audiences.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-17_2.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-17_2.png" width="1500" height="970" alt="Simple documentation for a dependency I used (Ora)" class="responsive" />
  </a>
  <figcaption class="center">Simple documentation for a dependency I used (Ora)</figcaption>
</figure>
</div>

Now, as an engineer, it's best practice to write technical documentation for your work, but you can level up by writing *useful *technical documentation that people *voluntarily *choose to reference. Technical information for non-technical audiences is often an engineer's Achilles' heel. But there are ways to start simple conversations that are accessible to everyone.

## Getting better metrics

So now that you have content, the next question is whether or not it's having an impact. Every corporate social platform includes some kind of viewer metrics. Jive, which is the platform I was using, includes "[Impact metrics](https://docs.jivesoftware.com/8.0_on_prem_int/end_user/jive.help.core/#user UnderstandingImpactMetrics.html){:target="_blank"}{:rel="noopener"}" on your content.

For each piece of content you post, you're able to see things like the number of views, number of likes, unique viewers, and number of comments. Here's what the impact metrics view looks like for one document:

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-17_3.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-17_3.png" width="2000" height="1288" alt="Impact metrics for a sample document" class="responsive" />
  </a>
  <figcaption class="center">Impact metrics for a sample document</figcaption>
</figure>
</div>

While it's helpful to look at these metrics for an individual document, it would be *more* helpful to look at them across all your content. I wanted to be able to answer questions such as:

* Who are the top viewers across all of my content?
* Which pieces of content have the most likes/comments/views?
* Are there any correlations between age of post or topic and reactions?

Unfortunately, Jive didn't support that. But Jive does have the v3 API documented [here](https://developers.jivesoftware.com/api/v3/cloud/rest/index.html){:target="_blank"}{:rel="noopener"}.

For this particular project, I chose Node.js, both to lower the barrier of entry for other engineers and to improve my knowledge of Node. After a few days of learning the API and Node, the first version of my tool did the following:

1.  Check for a valid username and password by making an API call
1.  Retrieve all content for the desired user by using the [/contents](https://developers.jivesoftware.com/api/v3/cloud/rest/ContentService.html#getContents(List<String>,
String, int, int, String, boolean, boolean)){:target="_blank"}{:rel="noopener"} resource
1.  For each piece of content, retrieve the views, likes, unique viewers, etc.

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-17_4.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-17_4.png" width="1500" height="1136" alt="An example v2 API call" class="responsive" />
  </a>
  <figcaption class="center">An example v2 API call</figcaption>
</figure>
</div>

But here's the catch: the "impact metrics" that I mentioned above are only accessible via an undocumented "v2" Jive API, and the company wasn't using the [data export service](https://community.jivesoftware.com/docs/DOC-99916){:target="_blank"}{:rel="noopener"}.

Unlike the v3 API, it doesn't support basic auth. However, it works with a cookie, so the modified steps are:

1.  Check for a valid username and password by making an API call
1.  Login via POST request to retrieve a session cookie and store it for later use
1.  Retrieve all content for the desired user by using the
[/contents](https://developers.jivesoftware.com/api/v3/cloud/rest/ContentService.html#getContents(List<String>, String, int, int, String, boolean, boolean)){:target="_blank"}{:rel="noopener"} resource
1.  Save the list of contents with the number of likes, comments, and views in a CSV
1.  For each piece of content, retrieve the views, likes, unique viewers, etc. by using the undocumented v2 impact metrics API (save an aggregate count of unique viewers per piece of content as a CSV and save a fully-expanded list of each unique viewer per piece of content as a CSV)
1.  Save a summary text file with the number of unique viewers across all content, the top 10 unique viewers, and the number of pieces of content

There were a couple small issues with the above, including:

* Impact metrics are only available on certain types of content
* You (generally) cannot retrieve impact metrics for content posted by another user

In the first version of the tool, I handled command line inputs myself. Later iterations used packages like [commander](https://www.npmjs.com/package/commander){:target="_blank"}{:rel="noopener"} and [ora](https://www.npmjs.com/package/ora){:target="_blank"}{:rel="noopener"} to make the CLI tool cleaner.

Finally, I had the metrics I wanted. I knew who my most loyal readers were. I could see the upward trend in views and likes. I could see which subjects performed best.

**But now I wanted to grow the numbers faster.**

## Connection for connection

The idea of "follow-for-follow" or "f4f" is pretty old in social media years, but it hasn't had its moment in the corporate social network world! Or at least that's the premise of the next step I took. 😉

<div class="center width70">
<figure class="fill-parent">
  <a href="/images/posts/2018-12-17_5.png" target="_blank" rel="noopener" class="text-decoration-none">
    <img src="/images/posts/2018-12-17_5.png" width="1500" height="1063" alt="The Jive /streams resource" class="responsive" />
  </a>
  <figcaption class="center">The Jive /streams resource</figcaption>
</figure>
</div>

My working theory was that, similar to social networks like Facebook, Instagram, and others, if you follow a lot of people on Jive, a portion of them will follow you back. With the Jive v3 API, it's pretty easy to do this. You can call the [/streams](https://developers.jivesoftware.com/api/v3/cloud/rest/StreamService.html#addAssociations(String, String)){:target="_blank"}{:rel="noopener"} resource, for example, to create the "association" and follow a user.

I also wanted to be able to unfollow a user, since this would allow me to retry at a later point and have the "new follower" notification occur again. Of course, this also helps with following the social media wisdom of keeping a good ratio. 😆

1.  Based on a flag, either start in follow or unfollow mode. Via another flag,
either follow/unfollow one user or use a list
1.  Check for a valid username and password by making an API call
1.  Save the current list of users I follow
1.  If it is a list, go through and perform the desired follow/unfollow action
1.  As it's processing, save the new follows or unfollows in a text file (this is primarily to be able to unfollow from that list later on)

To further augment this process, I used a CLI tool I had previously built to retrieve lists of users from the internal directory. That means I could choose to do things like "follow all users in X city" or "unfollow users from Y department."

Result? I followed thousands and gained hundreds of followers in return, easy as pie. 🍰

## Takeaway

Many companies still rely primarily on decades-old tools for reaching large audiences, such as corporate communications emails or quarterly town halls. It is particularly hard to engage in one-to-many conversations at a large company.

Corporate social networks, while perhaps less effective in raw collaboration, enable the everyday employee to create that one-to-many conversation. By pairing useful content with straightforward engineering, I could bypass the traditional channels and have an amplified reach for a variety of topics.

This is a practical example of what could be phrased as "it's not what you know, but who knows you," a modification of the more common adage. Instagram influencers know this. LinkedIn leaders know this.

But the corporate world doesn't know it yet, which means an engineer with some time on their hands can own it.

*****

*If you liked this post, let me know, and share with others!*