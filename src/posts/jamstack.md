---
title: Jamstack
description: The jamstack architechture. JAMstack stands for JavaScript, APIs,
  and Markup. The term was coined by Mathias Biilmann to describe a modern web
  development architecture based on client-side JavaScript, reusable APIs, and
  prebuilt Markup.
date: 2021-07-27T15:37:07.171Z
tags:
  - post
  - featured
---
## Why Jamstack<br>
The Jamstack architecture has many benefits, whether you’re building a large e-commerce site, SaaS application or personal blog.
<br>
<br>
## Better Performance<br>
Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.
<br>
<br>
## Higher Security<br>
With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.
<br>
<br>
## Cheaper, Easier Scaling<br>
When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.
<br>
<br>
## Better Developer Experience<br>
Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.
<br>
<br>
## The future is highly distributed<br>
Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs, and CDNs.
<br>
<br>
## What is Jamstack?<br>
Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.
<br>
<br>
The core principles of pre-rendering, and decoupling, enable sites and applications to be delivered with greater confidence and resilience than ever before.
<br>
<br>
## Explore more of the benefits of Jamstack.<br>

### Pre-rendering<br>
With Jamstack, the entire front end is prebuilt into highly optimized static pages and assets during a build process. This process of pre-rendering results in sites which can be served directly from a CDN, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.
<br>
<br>
With so many popular tools for generating sites, like Gatsby, Hugo, Jekyll, Eleventy, NextJS, and very many more, many web developers are already familiar with the tools needed to become productive Jamstack developers.
<br>
<br>
### Enhancing with JavaScript<br>
With the markup and other user interface assets of Jamstack sites served directly from a CDN, they can be delivered very quickly and securely. On this foundation, Jamstack sites can use JavaScript and APIs to talk to backend services, allowing experiences to be enhanced and personalized.
<br>
<br>
### Supercharging with services<br>
The thriving API economy has become a significant enabler for Jamstack sites. The ability to leverage domain experts who offer their products and service via APIs has allowed teams to build far more complex applications than if they were to take on the risk and burden of such capabilities themselves. Now we can outsource things like authentication and identity, payments, content management, data services, search, and much more.
<br>
<br>
Jamstack sites might utilise such services at build time, and also at run time directly from the browser via JavaScript. And the clean decoupling of these services allows for greater portability and flexibility, as well as significantly reduced risk.
<br>
<br>
Named to help the conversation<br>
The name "Jamstack" came about because as Matt Biilmann and Chris Bach were creating modern web development workflows and capabilities at Netlify, they found there was no easy way to refer to the architectural approach in conversation. Jamstack embraces many existing fundamentals of web architectures, and so they created the term Jamstack to help us talk about it more succinctly.
<br>
<br>
You can learn more about the background, benefits, and case studies of Jamstack in the book Modern web development on the Jamstack, (Biilmann & Hawksworth, O'Reilly, 2019)
<br>
<br>
## Why Jamstack?<br>
A Jamstack architecture can bring all sorts of benefits to the sites and to project workflows. Some of the key benefits are:
<br>
<br>
### Security<br>
The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.
<br>
<br>
Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.
<br>
<br>
### Scale<br>
Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.
<br>
<br>
With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.
<br>
<br>
### Performance<br>
Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.
<br>
<br>
With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.
<br>
<br>
### Maintainability<br>
When hosting complexity is reduced, so are maintenance tasks. A pre-generated site, being served directly from a simple host or directly from a CDN does not need a team of experts to "keep the lights on".
<br>
<br>
The work was done during the build, so now the generated site is stable and can be hosted without servers which might require patching, updating and maintain.
<br>
<br>
### Portability<br>
Jamstack sites are pre-generated. That means that you can host them from a wide variety of hosting services and have greater ability to move them to your preferred host. Any simple static hosting solution should be able to serve a Jamstack site.
<br>
<br>
 Bye-bye infrastructure lock-in.<br>

### Developer Experience<br>
Jamstack sites can be built with a wide variety of tools. They do not depend on the proprietary technologies or exotic and little known frameworks. Instead, they build on widely available tools and conventions. As a result, it's not hard to find enthusiastic and talented developers who have the right skills to build with the Jamstack. Efficiency and effectiveness can prosper.
<br>
<br>
## Best Practices<br>
When building Jamstack projects, you can really get the most out of the stack if you stick to a few best practices.
<br>
<br>
### Entire Project on a CDN<br>
Because Jamstack projects don’t rely on server-side code, they can be distributed instead of living on a single server. Serving directly from a CDN unlocks speeds and performance that can’t be beat. The more of your app you can push to the edge, the better the user experience.
<br>
<br>
### Modern Build Tools<br>
Take advantage of the world of modern build tools. It can be a jungle to get oriented in and it’s a fast moving space, but you’ll want to be able to use tomorrow’s web standards today without waiting for tomorrow’s browsers. And that currently means Babel, PostCSS, Webpack, and friends.
<br>
<br>
### Automated Builds<br>
Because Jamstack markup is prebuilt, content changes won’t go live until you run another build. Automating this process will save you lots of frustration. You can do this yourself with webhooks, or use a publishing platform that includes the service automatically.
<br>
<br>
### Atomic Deploys<br>
As Jamstack projects grow really large, new changes might require re-deploying hundreds of files. Uploading these one at a time can cause inconsistent state while the process completes. You can avoid this with a system that lets you do “atomic deploys,” where no changes go live until all changed files have been uploaded.
<br>
<br>
### Instant Cache Invalidation<br>
When the build-to-deploy cycle becomes a regular occurrence, you need to know that when a deploy goes live, it really goes live. Eliminate any doubt by making sure your CDN can handle instant cache purges.
<br>
<br>
### Everything Lives in Git<br>
With a Jamstack project, anyone should be able to do a git clone, install any needed dependencies with a standard procedure (like npm install), and be ready to run the full project locally. No databases to clone, no complex installs. This reduces contributor friction, and also simplifies staging and testing workflows.