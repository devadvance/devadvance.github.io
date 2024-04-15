---
layout: post
title: Framing engineering discussions with a business perspective
image: /images/posts/2024-04-09-framing-engineering-with-business/2024-04-09-hero.png
excerpt: Framing engineering discussions with a business perspective, with the purpose of guiding, simplifying, and expediting those discussions.
---

# Framing engineering discussions with a business perspective

{% if page.date %}{{ page.date | date: "%A, %B %-d, %Y" }}{% endif %}

[Click here to go to all posts](/posts/).

As software engineers, we often focus on "what" to build and "how" to do it. Yet "why" is an important question, often left to other roles like product managers or business leads. In many cases, software engineers aren't expected to consider the business in their engineering decisions until more senior levels.

Is it surprising? No. After all, we probably shouldn't expect every engineer to think about business-critical impact or top-line/bottom-line impact during their day-to-day work. Even for line managers, the expectation is often on execution rather than any personal impact on business metrics.

However, this lack of emphasis does not mean that engineers at all levels should avoid using, or be deprived of, business framing. That's what this doc is about: framing engineering discussions with a business perspective, with the purpose of guiding, simplifying, and expediting those discussions.

## Starting with users

Often, engineers feel deeply connected with a focus on the user. Incorporating business perspectives into engineering discussions is an important way to incorporate user-centered product development into everyday decision making.

To some, this may seem counterintuitive. It can seem that "focus on the user" is antithetical to requiring products to have sustainable plans that involve balancing benefit and cost.

For any company, users and customers are ultimately people. Even business customers are made up of people. 

Those people are trusting us to provide them with solutions to better their lives and enable their business; they are relying on us. We must respect them by understanding their needs through evidence-based research and only pursuing and offering solutions that we can afford to support long term and with appropriate amounts of risk to where you work and your customers.

We should start small and commit only to implementing, QAing, launching, and supporting work that we understand and can staff, while experimenting with new work in ways that don't put our customers' experiences or businesses at risk. Often, what may seem easy to implement with huge upside may be prohibitively expensive to productionize and maintain.

## Simple business framing

### Framing benefits

While there are certainly many other framing mechanisms, authoritative texts, and expert sources out there, I choose to use these areas for categorizing the benefits of any given engineering work:

* Generate revenue and positive outcomes
* Generate opportunities
* Reduce or mitigate cost
* Avoid cost

What do each of these mean?

**Generating revenue and positive outcomes** is straightforward: does this positively impact some one/customer/organization in a way that matters to them and—in a for-profit environment—does it cause increased revenue?

**Generating opportunities** is interesting. Opportunity can be a variety of things: future business leads, future users, future product features, future revenue, increased resources/capacity, problems we can solve, etc. The premise is that the work is not directly generating those things, but it is producing a prerequisite for those things to happen.

**Reducing and mitigating cost** is straightforward as well. If cost is X now, and is less than X once the work is done, then X has reduced cost. There's some nuance here about implementation costs, recurring costs, and such, but those are best left for later.

**Avoiding cost** is even better than reducing costs, as it focuses on building a sustainable business. One could say that it is the cost that might have otherwise occurred had the work not been done. A great example of this is risk: by doing the right safety, security, and related work, businesses avoid costs to themselves and their users. Often, this work is the hardest to highlight and reward, similar to encouraging building inspection rather than exclusively relying on firefighters.

### Framing costs

I also do an exercise of framing costs for any engineering discussion. In an effort to avoid a real finance conversation at every turn, I tend to simplify* to these categories:

* Implementation cost
* Maintenance cost
* Risk cost
* Opportunity cost

_*A note on costs: this is an incredibly simplified view to be useful for engineering discussions. If you're curious, I encourage further reading on the costs of running a business._

What do each of these mean?

**Implementation cost** refers to the cost of initial implementation, including the time and resources used by engineers, product managers, UX designers, quality assurance (QA), technical program managers, and anyone else involved.

**Maintenance cost** refers to what it takes to keep the implementation running as is. This includes ongoing QA, support, account management, developer relations (DevRel), site reliability engineering (SRE), on-call, engineering maintenance, general upkeep, and more.

**Risk cost** is the cost associated with any possible risks, such as security, accessibility, privacy, brand perception, liability, and more. These ultimately represent a potential cost to our business.

**Opportunity cost** has a lot of available definitions (example: [Wikipedia](https://en.wikipedia.org/wiki/Opportunity_cost){:target="_blank"}{:rel="noopener"}). Essentially, it's what we lose from alternative opportunities by going with the option we settled on.

## Common examples

### The pile of tech debt

"Let's refactor service X!", someone says. "We made some serious tradeoffs for launch. We need to get rid of this tech debt before it becomes a problem."

Let's examine this case more closely. What is the problem?

* Is the tech debt preventing the development of critical feature X? → sounds like this work is related to **generating revenue and positive outcomes**.
* Cleaning up this tech debt will create room for innovation and lead to increased inbound customer leads. → looks like we want to **generate more opportunities**.
* The tech debt is taking 20% of the team's sprints to maintain. → that's a **cost reduction** argument at its core.
* Is the code unstable, liable to break with dependency changes? → sounds like we're trying to reduce risk and **avoid a cost**.

And how much will it cost to solve this problem?

* It's going to take 3 engineer-months to clean up this tech debt. → straightforward **implementation cost of cleaning up the tech debt**.
* Doing this cleanup will require careful attention to detail so we don't break any existing features and don't open up any security or privacy issues. → there might be a lot of **risk cost associated with this tech debt cleanup work**.
* Due to this tech debt cleanup, we're not going to be able to deliver critical features X and Y to customers and we're going to have to ignore some business opportunities. → That's some serious **opportunity cost associated with this cleanup**.

In other words, whether or not cleaning up this pile of tech debt is not just a technical conversation, it's a business conversation with several dimensions. By using business framing, engineers can work towards expressing the need to clean up tech debt in more collaborative ways. It may turn out that—when framed in business terms—tech debt is more impactful to the business than the equivalent feature work.

### The aspirational design

"I need to write a detailed design doc," the engineer says. "We have to ensure that we are architecturally prepared for all of the users/customers/use cases we will have. Then we need to spend several quarters _getting it right_, otherwise we're in trouble."

This is a great example of the [nirvana fallacy](https://en.wikipedia.org/wiki/Nirvana_fallacy){:target="_blank"}{:rel="noopener"}. Nothing short of perfect will suffice; we must _get it right, or else_.

A way to avoid this fallacy is to combine two things:

* Evaluate the design fairly.
* Genuinely consider bona fide alternatives.

The business framing we've touched on is a great way to expand the advantages and disadvantages of a given design to cover more than the purely technical aspects.

Let's start with translating some of the benefits:

* Does this design or an alternative result in a greater impact to our bottom line or our customer's experience? → sounds like we're trying to **generate more revenue or increase the net positive outcome**.
* Does this design provide a platform for future features and future business? → That might be some clear line of sight to **generating more opportunities**.
* Does this design mean we can build X, Y, and Z features with faster and cheaper going forward? → We're trying to **reduce our implementation costs in general**.
* Does this design or an alternative present more risk to our team, product, company, users, or the world? → we're trying to **avoid the cost of those risks** turning into reality, or at the very least, **reduce/mitigate the likelihood of those costs**.

Let's look at some possible costs as well.

* We need to spend an entire quarter designing this solution, evaluating prototypes, and reviewing with the team. → Time spent designing is **a significant implementation cost**.
* Once implemented, this design will require any new engineer on the team to learn a bespoke way of building services/UI/etc. → Overhead created by a design is **an ongoing maintenance cost**, even if it's not maintenance of the implementation itself.
* By doing this design, we'll get an accessibility exception because other roles have asked us to create custom UX that doesn't include built-in accessibility (a11y) features. → This **design has a risk cost** associated with it because it chooses to take on a11y risk.
* We can't do this iteratively, it needs to be done all at once. → By eliminating more iterative alternatives that deliver value sooner, this **design has a possible opportunity cost**.

As part of a well-reasoned design doc, consider a tabular view comparing the preferred option with the alternatives, not only showing the technical characteristics, but also the business benefits and costs as well.

### The long list of medium priority issues

"I know these aren't absolutely essential to our product," the tech lead says, "but we have so many things we really, really need to do to fully call this project 'done'."

Sometimes, it seems like a project or feature never ends. There's a never ending list of medium priority bugs, cleanups, enhancements, and docs that _should_ get done. Where do we draw the line?

Formulating the discussion in business terms will help draw that line using language that anyone in any role can participate in and understand. Let's look at some examples.

* Fixing this open bug will improve our click-through rate (CTR) by 50% for 90% of users. → Sounds like this fix will directly **generate more revenue**.
* We need to address these specific medium priority issues because they are a prerequisite for other deal-critical features. → These high priority features are **generating the opportunity** to deliver other business-critical features.
* By implementing this medium priority feature, we'll reduce the cost to our internal users by 20%. → **Reducing costs to other internal roles** can be just as important as reducing engineering costs.
* These medium priority issues will take 2 engineer-months. If we don't do them, we're going to have to bring on additional headcount. → We'd like to **avoid a larger cost** by paying a smaller cost up front.

Along with the benefits of looking at this long list of medium priority issues, we can also look at the costs associated with addressing them.

* It's going to take four engineer-quarters to get all of these medium priority issues done. → That's a lot of potential **implementation cost** to balance against the benefits.
* When we launch these medium priority features, we'll need additional on-call support and 50 new QA test cases to keep them stable. → QA and on-call are a form of **ongoing maintenance cost** for these issues that might not be part of initial implementation.
* This is just a small medium priority change that fixes some long-standing quirks with our store page. → Those quirks might be indicative of complex country-specific payments requirements and trying to fix those without care might create additional **commerce risk cost**.
* Can we work on these medium priority issues instead of the high priority issues? They've just been sitting in our backlog for so long! → Perhaps those medium priority items are actually high priority and should be reevaluated, or the **opportunity cost** from not working on the high priority issues is too high.

## Putting this into practice

With all this background, the question becomes: how does one put this into practice in day-to-day engineering discussions?

Here are three places to start:

* **In general conversations**: consider framing your points with the business perspective, similar to the examples we've walked through.
* **In designs**: fairly evaluate the options in terms of their business benefits and costs, in addition to their technical benefits and cost.
* **In planning, goals, and OKRs**: consider defining the measurable outcome of yearly plans, goals, or Objectives and Key Results in terms of business benefit. Additionally, you consider how to translate the organization-level plans/goals/OKRs into team-level plans/goals/OKRs using this framing.

Need a template for your design doc? Here's a quick place to start:

|Factor (Benefit or Cost)|(A) Option title A|(B) Option title B|Approach to measuring (examples)|
|:----|:----|:----|:----|
|[Benefit:Revenue] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- DAU/MAU for X<br>- CSAT/NPS for X<br>- Onboarding time for X<br>- etc.|
|[Benefit:Opportunity] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- User interest<br>- Future features powered<br>- Leads generation<br>- % increase capacity<br>- etc.|
|[Benefit:Reduce cost] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- engineer-week reduction<br>- {Role}-hours reduction<br>- QA time reduction<br>- etc.|
|[Benefit:Avoid cost] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- engineer-week maintenance cost avoided<br>- QA time avoided<br>- # OMGs avoided<br>- etc.|
|[Cost:Implementation] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- engineer-weeks cost<br>- product manager-weeks cost<br>- QA-weeks cost<br>- etc.|
|[Cost:Maintenance] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- engineer-weeks cost<br>- product manager-weeks cost<br>- QA-weeks cost<br>- etc.|
|[Cost:Risk] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- a11y exceptions in # of issues<br>- Security risks in CVE count<br>- Brand risk in NPS<br>- etc.|
|[Cost:Opportunity] TODO|TODO. E.g., Yes, No, High, Low, NUMBER|TODO. E.g., Yes, No, High, Low, NUMBER|- Number of missed opportunities<br>- Number of features not built<br>- Number of users not gained<br>- etc.|
{: .comparison-table }

_**Note**: Per a11y best practices, use text to differentiate and treat colors as optional!_

<div class="center width30">
<figure class="fill-parent">
  <picture>
  <source type="image/avif" srcset="/images/posts/2024-04-09-framing-engineering-with-business/2024-04-09-hero.avif" />
    <source type="image/png" srcset="/images/posts/2024-04-09-framing-engineering-with-business/2024-04-09-hero.png" />
    <img src="/images/posts/2024-04-09-framing-engineering-with-business/2024-04-09-hero.png" width="1000" height="750" alt="An image representing software development" class="responsive" />
  </picture>
  <figcaption class="center">An image representing software development</figcaption>
</figure>
</div>