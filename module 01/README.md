# Module 01 - Introduction Web Technologies

## Projects
|     |     |
| --- | --- |
| [Hello HTML](./projects/01.%20hello-html/) | Intro to HTML 5 and CSS |


## Understanding the web
- We talked about the `web` and its protocols
    - The `IP` protocol which allows any 2 computers to connect and communicate
    - The `TCP` and `UDP` protocol which handle the data transfer. Where `TCP` sacrifices speed for reliability while `UDP` is unraliable and used mostly for streaming and scenarios where occasional loss of data is not critical
    - The `HTTP` protocol which is used for transfer of `HTML` documents, and other browser related material.
- About the evolution of the web since 1995
    - We talked about how the web started as a huge distributed storage of documents.
    - It gradually transfered into a collection of scripts and services
    - The web evolved into web sites that provide applications rather than documents. Applications are interactive, and every page that is sent to the client provides a momentary state of the application.
- About AJAX, SPA
    - `AJAX` - Asynchronous Javascript And Xml - is a paradigm were a web page is not replaced as a response to user interaction, but rather changes using `JS`. The code sends the request (instead of the browser) and then makes changes to the `DOM` according to the received response, rather than replacing the entire page.
    - In `AJAX` the server provides data and login, instead of full `HTML` pages that repsent the session and state of the application.
    - `SPA` - Single Page Application - is an application that is pure `AJAX`. In SPA, the server does not provide any html and the page is never replaced. All the session logic is done by the client
- About Clientside technologies
- About browsers, JS engines and HTML Presenters

## Getting Started with Web Development
- Creating our work environment
    - The VSCode editor
- Creating basic web applications
- Using VS Code for development
    - HTML Features
    - CSS Features
    - Javascript Features
- Using Chrome and Firefox for Debugging

## Deep Dive into HTML 5
- Basic "Document" Tags: `h1`, `ul, li`, `p`
- Textual inline tags: `strong`, `em`
- Additional special tags: `img`, `a`
- Multi purpose tags: `div`, `span`
- Semantic tags: `header`, `nav`, `footer`, `section`
- Table tags: `table`, `thead`, `tbody`, `tr`, `th`, `td` and more
- Form Tags: `form`, `input`, `button`, `textarea`, `select`

## Getting started with JS and DOM
* We can use Javascript in our code by using the `<script>` tag
    * We can place it in the `<head>` section or the `<body>` section, which affects when it is executed
    * We can place javascript code directily inside it, or (better) use the `src` attribute to point to another file: `<script src="./my-file.js">`
* In the javascript, we can write lines of code that will be executed as soon as the file is loaded.
* It is more recommened to place the code in functions, and call them when something happens.
* The DOM defines **events** - which are attributes that contain code that is automatically executed when something happens.

```javascript
function doThisOnClick() {
    console.log('Did something');
}
```
```html
<h1 onclick="doThisOnClick()">
Title
</h1>
```

* In our javascript we can use the `document.getElementById` function to find an `HTMLElement` object and do something with it

```html
<h1 id="my-header">The Title</h1>
```

```javascript
function findTheElement() {
    var x = document.getElementById('my-header');
    if (x !== null) {
        // do something with x
    }
}
```
* There are many DOM manipulations that we can do when we hold a reference to an `HTMLElement`
    * We can set a style property: ``` x.style.background="green";```
    * We can modify the inner text: ``` x.innerText = "A whole new text";```
    * We can modify the class name: ``` x.className = "some-class";```

* We saw that by combining Javascript DOM manipulation and CSS we can achieve many interesting results

## Data types in Javascript
There are 6 data types in javascript. These are types of values - not variables. 

1. boolean - The values `true` and `false`.
2. number - All the numbers, including integers, floats, and some special numbers like `NaN`, `Infinity`
3. string - all textual values. You can use 3 different types of quotations: single quote (') , double quote (") and for special strings: back tick (`)
4. objects - a collection of key-value pairs
    - You can create an empty one like this ```var x = {}``` or ```var x = new Object()```
    - You can create a full one like this ```var x = {a: 2, b: 4}```
    - The keys must be strings or numbers and are treated as strings anyway
    - The values can be any legal javascript value
    - Arrays are also objects: 
```javascript
    var x = {0: 'Hello', 1: 'Hi'};
    var y = ['Hello', 'Hi']; 
    // essentialy the same, but the array has some additional methods - as we will see later on
```
You can access a property in two ways:
```javascript
    var x = {a: 40, b: 30};
    var y = x.a;
    var z = x['a']; // the same
    x.a = 50;
    x['a'] = 50; // the same
```
You can get a list of all keys in an object:

```javascript
    var x = {a: 50, b: 60};
    var props = Object.keys(x); // props == ['a', 'b'];
```

You can get a list of key-value pairs in an object:

```javascript
    var x = {a: 50, b: 60};
    var props = Object.entries(x); // props == [['a', 50], ['b', 60]];
```
5. Functions
You can create reusable pieces of code by creating functions.

```javascript
function doSomething() {
    console.log('We are doing something');
}

doSomething();  // called the function
```
- You can define parameters, and then pass them to the function
```javascript
function addAndPrint(num) {
    var txt = `${num} + 5 = ${num + 5}`;
    console.log(txt);
}

addAndPrint(10);
addAndPrint(20);
```

* Functions can return values
```javascript
function double(num) {
    return num * 2;
}

var x = double(10); // x == 20

```

6. undefined - this type contains only the value `undefined`. It is the default value of everything that was not initialized.

```javascript
var x; // x == undefined
console.log(z); // will print undefined

```

## Variables in javascript
Variables are places in memory that holds values. In javascript, you define a variable using the `var` keyword, and then it can store any legal value in javascript: boolean, number, string, object, function or undefined;

```javascript
var x;  // initialized to undefined
var y = 40; // y is a variable that holds a number
```

### Variables do not have type
Variables can hold **any** value, and you can use the same variable to store different value types. A variable that stores a number, can later be assigned a string, or even a full object.

```javascript
var x = 10;
x = 'Hello';
x = {a: 20, b: 'Hello'}
```

### Reference and Value types
The 6 types of javascript are divided into two groups: value types, and reference types.

> boolean, number, string, and undefined are **value types**
> object, function are **reference types**

When you assign value from one variable to another:
- If it is a value type, the value is copied - duplicated
- If it is a reference type, the two variables point to the same object.

```javascript
var x = 10;
var y = x; // y is also 10, but it is a different 10. These are two different instances of 10.

x++; // x is now 11, y is still 10.
```

``` javascript
var x = {a: 20};
var y = x;  // there is only one object in memory with a: 20. both x and y point to the same object.

x.a = 30;   // y.a is also 30, because they both point to the same object, which has changed

```

## Arrays and Loops in Javascript
We can create arrays using the [] operator or with `new Array()`. 

```javascript
var a = [1, 2, 3];
var b = new Array();
```

Arrays are just objects, where the keys are auto-generated by javascript.

But in addition, array objects allow us a few operations that "normal" objects do not.
* We can query the length using the `length` property:
```javascript
var a = [1, 2, 3];
console.log(a.length);
```

* We can add elements to the end using the `push` operator:
```javascript
var a = [1, 2, 3];
a.push(4);
```
* We can remove and return the last element using the `pop` method
```javascript
var a = [1, 2, 3];
var x = a.pop(); // x == 3, a == [1, 2]
```
* We can remove and return the **first** item using the `shift` method
```javascript
var a = [1, 2, 3];
var x = a.shift(); // x == 1, a == [2, 3]
```
* We can add item at the beginning using `unshift`
```javascript
var a = [1, 2, 3];
a.unshift(0); // a = [0, 1, 2, 3]
```

* For more fined control you can use the `splice` method. The `splice` method gets the following parameters: `(start, deleteCount, item1, item2, ...). It starts at the provided index, removes the requested number of items, and then inserts the provided items in their place. Finally it returns the deleted items
```javascript
    var a = [1, 2, 3, 4, 5];
    var x = a.splice(2, 2, 10, 20); // a == [1, 2, 10, 20, 5], x == [3, 4]
```

* The `reverse` method, reverses the array

```javascript
    var a = [1, 2, 3];
    a.reverse(); // [3, 2, 1]
```

### Looping over arrays
You can use the `for` loops to generate and modify an index. Instead, you can use the `for-of` to loop over items of an array

```javascript
var a = [1, 2, 3];
for(var x of a) {
    console.log(x); 
}
```


## Deep dive to the DOM
* What is the DOM
* Selecting Elements with Javascript
    * `document.getElementsById()`
    * `document.getElementsByTagName()`
        * Can also be called on a specific element to restrict the search range
    * `document.getElementsByClassName()`
        * We can search by single class name, or by multiple: `getElementsByClassName("child boy")`
        * Can also be called on an element to restrict the search range
    * `document.querySelector()` searches all elements that match a CSS query
        * Returns the first child that matches the search criteria
        * If no element matches the search criteria, `null` is returned.
        * Can be called on a single element or on the entire document
    * `document.querySelectorAll()` returns a list of elements that match the criteria
* Modifying the DOM
    * Changing element text: `elem.innerText = 'new text'`
    * Changing element inner HTML: `elem.innerHTML = '<h1>WOW</h1>'`
    * Modifying element style: `elem.style.backgroundColor = 'green'`
    * Modifying element class: `elem.className = 'checked'`

* Event Handling
We can dynamically add and remove event handlers from a DOM element using the `addEventListener` and `removeEventListener` functions.

To add an event listener, supply the name of the event, and the callback function. The callback function can receive a single parameter, the browser will use this parameter to give you the event payload.

```javascript
element.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'lime';
})
```









        


