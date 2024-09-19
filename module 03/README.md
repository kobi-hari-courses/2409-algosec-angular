# Module 3 - Introduction Angular, and Signals

### Projects:
|     |     |
| --- | --- |
| [Hello Angular](./projects/hello-angular/) | Bare bones angular application |
| [Notepad](./projects/notepad/) | Angular Directives and CSS Layout |
| [Change Detection](./projects/change-detection/) | Angular Change Detection, Zone and Signals |


### Angular from way above
* We talked again about SPA and the role of client application, UI Server and Data Server
* We explained that angular development is done in a nodeJS environment but the code is compiled to a javascript that runs in the browser
* We talked about how an angular application is served:
    - You write your code in many files
    - The files go through compilation
    - The compiled files are then packed into single `main.js` file
    - The UI Server serves an empty `index.html`
    - The html file links to the main.js which then runs in the browser

### The angular CLI
* Helps us to create new angular projects with many many files
* Helps us to generate angular "items" with initial template
* Helps us to automagically compile and pack our code - **ALL THE TIME**
* Helps us by bringing up a development web server that serves the application to the browser in 'localhost:4200'
* Can also help us to automatically test the code and build it for production
* Is installed using npm

### An angular app structure
* We have created an app using the cli
* We run it using `ng serve` and the browsing the `localhost:4200`
* We went through the configuration files
* We saw how index.html is an empty html file that links to the compiled script
* We inspected `main.ts` and saw that it "bootstraps" a main component  `AppComponent`
* We saw that `AppComponent` is a class with `Component` decorator, which turns it into an angular component
* We saw that an angular component is a new "Html Tag" with its own looks and behavior
    - The behavior is written in typescript 
    - The looks are defined in html and CSS

### Introduction to angular
* We used npm to intall the angular CLI
* We used the cli to generate a new angular project using `ng new [project-name]`
* we have run the application using `ng serve` and viewed the application in the browser
* We went over the project structure and files, including `main.ts`, `index.html` and `styles.css`
* We have inspected the App Component and understood that
    * A plain class turns into an Angular Component using the `@Component` Decorator
* The anuglar engine inspects the DOM, and applies it's magic on elements it recognizes as components
    * Inject the template into the DOM node
    * Instantiate the component class
    * Bind the html to the component instance members

### MVVM
* We understood the evolution that lead to the `Model View View-Model` paradigm
* We learned the role of each part of the pattern
* We understood that a component is a pair of view and view model
* We saw how to create an angular application while thinking "mvvm"
* We wrote a simple search application
* We learned about the concept of **Directive** and understood that there are 2 types of them
    - Element directive - is put on an element and changes its behavior
    - Structural directive - is put on an element and can modify the structure of the HTML DOM
    - disabled
    - class.something
    - style.something
* We talked about the control flow structures: `@if` and `@for`
* We learned how to wire interactivity using angular events
    - for example `(click) = "doSomething()"`
* We learned about the concept of data binding and saw that there are 4 types of bindings
    - `{{value}}` - Text interpolation. For element content only
    - `[directive]="value"` - input binding - for directives and inputs
    - `(event)="action"` - event binding - for events
    - `@if(expression){}` - for control flow, each with its own syntax

### Introduction to angular binding
* We created the angular search
* We have seen how to "think MVVM" - describing the logic of our application in the view model and then writing the view and binding it to the view model.
* We have created a search application view model the performs search of a keyword
* We have seen `@if` and `@for` and understood what are structural directives and how they work
* We have used the `[disabled]` directive to disable the search box and button when the search is in progress

### Introduction to Grid Layout
* We have seen the Grid layout, and how to use it to create modren responsive UI layout
* We have seen how to declare grid lines using `grid-template-rows` and `grid-template-columns` on the container
* We have seen how to place grid children on a specific row or columns using `grid-row` and `grid-column` properties
* for more information, see the [complete guide to grid on CSS TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/): 
* Learn Grid by playing a game: [Grid Garden](https://cssgridgarden.com/)

### The notepad app
* We have created a responsive layout using css grid
* We have created a view model holding the lists of colors, fonts and sizes and the selected item in each array
* We have added actions that modify the selected color, font and size
* We have created a list of items in the HTML, and allowed to select color, size and font
* We have used fancy CSS to decorate it and make the app look nice
* We have learned about [class.XXX] and [style.XXX] directives

### Change Detection in Angular
* We talked about the **Magic** behind angulars change detection
* We talked about threads, tasks, and how zone.js works
* We understood that the automatic change detection is wasteful and not performant and especially - why
* We saw how to trigger manual change detection using the `ChangeDetectionRef`
* We saw how to disable automatic change detection using the decorator property: `changeDetection` and the ChangeDetectionStrategy enumeration
* We saw how to use signals so that we do not rely on change detection at all
* We saw how to use the experimental zoneless change detection

### Introduction to signals
* We saw how to use the `signal(value)` function to create a signal wrapper around a value
* We saw how to use the `signal.set` and `signal.update` methods to modify the value.
    - `.set` - to set a new value
    - `.update` - to set a value that the depends on the old value
* We saw how to derive computed values using `signal.computed`
* We saw how to react to signals using `effect`
* We understood that you cannot call effect anywhere but in the constructor

