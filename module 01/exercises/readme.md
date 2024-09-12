# Exercise in HTML - "My Favorite Hobby" Web Page

## Objective
Create a simple web page about your favorite hobby.

## Tools
VS Code and a web browser.

## Instructions
### 1. Set Up the Basic Structure
- Start with the `<!DOCTYPE html>` declaration.
- Add the `<html>` tag with nested `<head>` and `<body>` tags.
- Inside the `<head>` tag, include a `<title>` tag with a relevant title.
- Hint - you can use VSCode emmits to automagically create the structure for you

### 2. Add Heading and Paragraph
- In the `<body>`, add an `<h1>` tag with a heading like "My Favorite Hobby: [Hobby Name]".
- Below the heading, add a `<p>` tag with a brief introduction to the hobby.

### 3. Insert an Image
- Find an image online related to the hobby (ensure it's free to use).
- Add an `<img>` tag to include the image. Remember to add the `src` attribute for the image URL.

### 4. Create a List
- Add either an ordered (`<ol>`) or unordered (`<ul>`) list describing three reasons why you love this hobby or three things someone needs to start this hobby.

### 5. Add a Link
- Include an `<a>` tag linking to a website with more information about the hobby. Remember to use the `href` attribute for the URL and optionally.

### 6. Style with Basic CSS 
- Inside the `<head>` tag, add a `<style>` tag.
- Write simple CSS rules, like changing the color of the heading or the background color of the body.

## Learning Goals
- Understand the structure of an HTML document.
- Learn how to use tags like `<h1>`, `<p>`, `<img>`, `<ul>/<ol>`, and `<a>`.
- Get an introduction to embedding images and links.
- Optional: Get a basic idea of how CSS can style HTML elements.


# Javascript Exercise

## Exercise 2 - Basic JS and DOM
### Overview
In this example we will create a header, and a list of options that will cause the header to be painted in different colors.

### Step 1 - Project structure
Create a web project: a folder with 3 files: 'index.html', 'main.js' and 'styles.css'. 

Make sure the html page loads the other 2 files using `<script>` and `<link>`

### Step 2 - Content
To the html add the following: 
1. A header with some text
2. A list (use `<ul> and <li>`) with 4 items. Each item should have the name of a different color

### Step 3 - Styling
Style the page nicely with CSS - freely.

### Step 4 - Interactivity
Add javascript code, so that when each of the list items is clicked, it changes the background of the header. Each item should set the color of the header to a different color.


## Exercise 3 - Function Parameters
In this exercise we will practice using functions and parameters

Start with exercise 1, and build on top of it.

### Step 1 - Create one function to handle clicks on all LI items
The function should get the name of the color as parameter, and place the proper class name on the header element.

### Step 2 - Modify the HTML
Now make sure the Li elements do not each call a different function, but that they all call the same function with different parameter.

## Exrcise 4 - Create Element with DOM
In this exercise we will practice: 
1. `document.createElement`
2. `element.addEventHandler`
3. `element.innerText`
4. `element.className`

In our html file we have manually written 4 LI elements - one for each color. Now we would like to have more - perhaps 6 or 8 colors. Writing down each and every one of them is too much work. We would like to automatically create the LI items.

### Step 1 - Setup
in your javascript file, create an array of colors: 
```javascript
    var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'brown'];
```

If your CSS contains different classes for different colors, make sure you also cover the new colors

### Step 2 - LI Creation
Our goal is to remove the `<li>` elements from the initial HTML and to build them from scratch in javascript. To start, lets create the function that inserts new LI elements.

In your javascript file, create a function that accepts a single parameter - the color (as string) - and adds the proper LI. Make sure to do the following:
1. Set the inner text of the LI to the color
2. Set the class name of the LI to the color
3. Attach an event handler for 'click' so that when clicking the LI it will call the function that sets the header color, and will send it the correct color.
4. Add the new LI to the UL element

### Step 3 - Looping over the array
In your HTML, respond to the 'load' event of the body element, and call a function in the Javascript file. 
The function should loop over the array of colors, and call the LI creation function each time with a different color


