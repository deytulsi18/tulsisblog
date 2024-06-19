---
title: Getting started with Eleventy
description: A quick start to 11ty
date: 2024-06-12T13:12:47.862Z
tags:
  - post
  - featured
---
<!--StartFragment-->

# Getting started with Eleventy

**Step1 Make a Project Directory** 
Create a directory for your project using the mkdir command (short for make directory):

`mkdir eleventy-sample`


Now move into that directory with the cd command (short for change directory):

`cd eleventy-sample`


**Step2 Install Eleventy** 
Create a package.json 
Installing Eleventy into a project requires a package.json file. The npm command (provided by Node.js) will create one for you with `npm init -y`. -y tells npm to use default values and skips the command line questionnaire.

`npm init -y
Install Eleventy `
@11ty/eleventy is published on npm and we can install and save it into our project’s package.json by running:

npm install @11ty/eleventy --save-dev
You may also install Eleventy globally but the package.json installation method above is recommended.

**Step3 Run Eleventy** 
We can use the npx command (also provided by Node.js) to run our local project's version of Eleventy. Let’s make sure our installation went okay and try to run Eleventy:

`npx @11ty/eleventy`
Here’s what your command line might look like after you run Eleventy:

`npx @11ty/eleventy`
\[11ty] Wrote 0 files in 0.03 seconds (v2.0.1)
If you see (v2.0.1) in your output you know you’re using the newest version. However, Eleventy didn’t process any files! This is expected—we have an empty folder with no templates inside.

**Step4 Create some templates** 
A template is a content file written in a format such as Markdown, HTML, Liquid, Nunjucks, and more, which Eleventy transforms into a page (or pages) when building our site.

Let’s run two commands to create two new template files.

echo '<!doctype html><title>Page title</title><p>Hi</p>' > index.html
echo '# Page header' > README.md
Alternatively, you can create these using any text editor—just make sure you save them into your project folder and they have the correct file extensions.

After you’ve created an HTML template and a Markdown template, let’s run Eleventy again with the following command:

`npx @11ty/eleventy`
The output might look like this:

`npx @11ty/eleventy`
\[11ty] Writing _site/README/index.html from ./README.md (liquid)
\[11ty] Writing _site/index.html from ./index.html (liquid)
\[11ty] Wrote 2 files in 0.04 seconds (v2.0.1)
We’ve compiled our two content templates in the current directory into the output folder (_site is the default).

**Step5 Gaze upon your templates** 
Use --serve to start up a hot-reloading local web server.

`npx @11ty/eleventy --serve`
Your command line might look something like:

`npx @11ty/eleventy --serve`
\[11ty] Writing _site/index.html from ./index.html (liquid)
\[11ty] Writing _site/README/index.html from ./README.md (liquid)
\[11ty] Wrote 2 files in 0.04 seconds (v2.0.0)
\[11ty] Watching…
\[11ty] Server at http://localhost:8080/
Open http://localhost:8080/ or http://localhost:8080/README/ in your favorite web browser to see your Eleventy site live! When you save your template files—Eleventy will refresh the browser with your new changes automatically!

**Step6 Put it online (optional)** 
The easiest way to put your new site online is to head over to Netlify Drop (no account sign-up required) and drag your new Eleventy-generated _site folder to the Netlify Drop web interface. In seconds, your new site will be online for anyone to see!

Read up on a few other deployment options.
Step7 Continue Learning… 
Congratulations—you made something with Eleventy! Now put it to work:

Add more content! In the above tutorial we used HTML and Markdown. Why not JavaScript or WebC (for components) next? Nunjucks and Liquid are also very popular. Maybe you’re feeling super adventurous and want to add your own custom type?.
Use a layout file so that you don’t have to repeat boilerplate on every template.
Add CSS, JavaScript, or Web Fonts to your project.
Learn more of the command line options for Eleventy.
Perhaps you’d like to consume data from third party APIs in your project?

<!--EndFragment-->