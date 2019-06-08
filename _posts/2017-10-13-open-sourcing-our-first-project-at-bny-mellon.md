---
layout: 2018design-post
title: Open sourcing our first project at BNY Mellon
---

# Open sourcing our first project at BNY Mellon

## I finally get to say it: BNY Mellon has open sourced a project. 😄

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

*Originally published on [Medium](https://medium.com/@mattjoseph/open-sourcing-our-first-project-at-bny-mellon-cf28cc3fd91d)*

<div class="center width70"><amp-img src="/images/posts/2017-10-13_1.png" width="641" height="501" alt="BNY Mellon Code Katas on GitHub" layout="responsive"></amp-img></div>
<figcaption class="center">BNY Mellon Code Katas on GitHub</figcaption>

To some, this may seem like much ado about nothing. I assure you, however, that a 230-year plus institution contributing open source to the world is a proud achievement for everyone involved.

## So what's the big deal?

Open source can be a bit of a challenging proposition for large companies, especially [systemically important financial institutions](https://en.wikipedia.org/wiki/Systemically_important_financial_institution). Not only is open sourcing a project often uncharted territory, but for many, even using open source as part of internal projects is a bit new.

Engineers don't often think about it, but open source is not always easy. Licensing, maintainability, security, compatibility, and more all go into deciding whether or not to use an open source project. This is especially true when considering using something enterprise-wide.

When open sourcing an internal project, even more diligence is required.

* Local git setup is correct? Check.

* Clean commits? Check.

* Nothing proprietary? Check.

* Proper license? Check.

* READMEs look okay? Check.

And the list goes on. It takes many individuals to get this done, starting from [Don Raab](https://medium.com/@donraab), the amazing individual whose talent for Java brought this project into existence, all the way through other engineers, legal, and senior leadership. At the end of the day, it took partnership and enthusiasm to make this happen.

## So what's the project?

For the first project, we've [open sourced a series of code katas](https://github.com/BNYMellon/CodeKatas)! I'll borrow from the project README to explain more:

> **What is a Code Kata?**
  
> A hands-on programming exercise which helps hone your skills through practice. Code Katas are usually set up as a series of unit tests which fail. Your task is to make them pass.

These katas are designed to help people learn several things, including great topics like Java 8 lambdas, [Eclipse Collections](https://github.com/eclipse/eclipse-collections), Data/Time APIs, and [Kotlin](https://kotlinlang.org/) (especially timely given[ Kotlin gained first-party support on Android](https://developer.android.com/kotlin/index.html) this summer!).

## What's next?

Open sourcing the code katas is an important milestone on our open source journey. We've been users of open source for quite some time, including projects like Angular, Git, MongoDB, and Node.js. However, contributing back to the community is an important part as well.

We are continuing to explore what we can open source, as well as identifying possible contributions to existing projects. We're also using this as a learning opportunity, refining the process and better understanding how to be a good community member in a safe and responsible manner.

Our work to connect to the engineering community touches on other areas as well, such as [hosting the Open Source Strategy Forum on November 8th](https://opensourcestrategyforum.org/), hosting meetups around technologies such as [MariaDB](https://www.meetup.com/MariaDB-Developers/events/234702611/) and [Java](https://www.meetup.com/The-Pittsburgh-Java-Meetup-Group/events/242379515/), and [sponsoring college hackathons](https://sponsor.mlh.io/directory/#career-partners).

*Thanks for reading! If you liked this post, let me know, and share with others!*
