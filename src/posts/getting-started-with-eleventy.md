---
title: Getting started with Eleventy
description: A quick start to 11ty
date: 2024-06-12T13:12:47.862Z
tags:
  - post
  - featured
---
<!--StartFragment-->

# Getting Started with Eleventy

Eleventy (or 11ty) is a simple, static site generator designed to be an alternative to Jekyll. It’s written in JavaScript and allows you to create websites quickly by converting templates into static HTML. Here’s a step-by-step guide to getting started with Eleventy:

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- Node.js and npm installed on your machine.

## Step 1: Setting Up Your Project

1. **Create a New Project Directory**
    ```bash
    mkdir my-eleventy-site
    cd my-eleventy-site
    ```

2. **Initialize npm**
    ```bash
    npm init -y
    ```

3. **Install Eleventy**
    ```bash
    npm install @11ty/eleventy --save-dev
    ```

## Step 2: Create Basic Files

1. **Create a Basic HTML File**
    - Inside your project directory, create a folder named `src`.
    - In the `src` folder, create an `index.html` file with the following content:
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Eleventy Site</title>
        </head>
        <body>
            <h1>Welcome to My Eleventy Site!</h1>
        </body>
        </html>
        ```

## Step 3: Configure Eleventy

1. **Create an Eleventy Configuration File**
    - Create a file named `.eleventy.js` in the root of your project directory with the following content:
        ```js
        module.exports = function(eleventyConfig) {
            return {
                dir: {
                    input: "src",
                    output: "_site"
                }
            };
        };
        ```

## Step 4: Build and Serve Your Site

1. **Add Scripts to `package.json`**
    - Open your `package.json` and add the following scripts:
        ```json
        "scripts": {
            "build": "eleventy",
            "serve": "eleventy --serve"
        }
        ```

2. **Build Your Site**
    ```bash
    npm run build
    ```

    - This command will generate a `_site` directory with your static HTML files.

3. **Serve Your Site**
    ```bash
    npm run serve
    ```

    - This command will start a local development server. You can view your site by navigating to `http://localhost:8080` in your web browser.

## Step 5: Using Templates and Data

Eleventy supports various templating languages such as Nunjucks, Liquid, Markdown, and more.

1. **Using Markdown**
    - Create a `src/posts` folder and add a markdown file `hello-world.md`:
        ```markdown
        ---
        title: Hello World
        date: 2024-06-19
        ---

        # Hello, World!

        This is my first blog post using Eleventy.
        ```

    - Eleventy will automatically process this markdown file and convert it to HTML.

2. **Using Layouts**
    - Create a `src/_includes` folder.
    - In the `_includes` folder, create a file `base.njk` (Nunjucks template):
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{{ title }}</title>
        </head>
        <body>
            <header>
                <h1>{{ title }}</h1>
            </header>
            <main>
                {{ content | safe }}
            </main>
        </body>
        </html>
        ```

    - Update your `hello-world.md` to use this layout:
        ```markdown
        ---
        title: Hello World
        date: 2024-06-19
        layout: base.njk
        ---

        # Hello, World!

        This is my first blog post using Eleventy.
        ```

## Step 6: Customize and Extend

- Explore more Eleventy features like collections, custom filters, shortcodes, and plugins to customize and extend your site’s functionality.

## Resources
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Eleventy GitHub Repository](https://github.com/11ty/eleventy)

With these steps, you should have a basic Eleventy site up and running. From here, you can explore more advanced features and customize your site to fit your needs.


<!--EndFragment-->