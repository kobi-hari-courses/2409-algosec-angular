# Exercises for module 03

## Exercise 1 - Getting started with angular 18

### 1. Installing Angular CLI
- Open your terminal or command prompt.
- Install the Angular CLI globally by running the following command:
  ```bash
  npm install -g @angular/cli
  ```
- Verify the installation by checking the version:
  ```bash
  ng version
  ```
- You should see the installed version of Angular CLI displayed in the output.

### 2. Starting a New Angular Project
- Create a new Angular project by running the following command:
  ```bash
  ng new my-first-app
  ```
- You will be prompted to answer a few questions:
  - Would you like to add Angular routing? (Select **Yes** or **No** depending on your preference)
  - Choose a stylesheet format (Select **CSS** for now).
- Once the project is created, navigate into the project directory:
  ```bash
  cd my-first-app
  ```
- You can now open the folder / project in **Visual Studio Code** by typing the following command: 

    ```bash
    code .
    ```


### 3. Running the Application
- Open a **cmd** terminal in Visual Studio Code.

> Make sure you use a **cmd** terminal and not a **powershell** terminal

- Start the development server using the command:
  ```bash
  ng serve
  ```
- Open a web browser and navigate to `http://localhost:4200`. You should see the default Angular welcome page.

### 4. Removing the Default Content
- Open the project in your preferred code editor.
- Navigate to the `src/app/app.component.html` file.
- Delete all the content within the components template (the default HTML content).
- Save the file.
- Notice that in the browser you now have an empty page

### 5. Adding a Property in TypeScript
- Navigate to `src/app/app.component.ts`.
- Inside the `AppComponent` class, add a new property called `caption` and assign a string value to it:
  ```typescript
  export class AppComponent {
    caption = 'My First Angular App';
  }
  ```

### 6. Displaying the Property in HTML
- Go back to the `app.component.html` file.
- Use Angular's interpolation to display the value of the `title` property:
  ```html
  <h1>{{ caption }}</h1>
  ```
- Save the file, and the browser should automatically reload with the updated content. You should now see the title displayed on the page.

### Exercise Complete
- You have successfully created a basic Angular project, modified the app component, and displayed a property from the component's TypeScript file in the HTML.



## Exercise 2 - Working with Events and Data Binding in Angular 18

In this exercise, you will continue working on the project created in the previous exercise. You will practice handling button and input events, modifying the state of the component, and displaying information dynamically on the screen.

### 1. Adding a Button to the App Component
- Open `src/app/app.component.html`.
- Add a button element:
  ```html
  <button (click)="onButtonClick()">Click me</button>
  ```

### 2. Connecting the Button Click Event to a Method
- Open `src/app/app.component.ts`.
- Add a new method to the `AppComponent` class that will be triggered when the button is clicked:
  ```typescript
  export class AppComponent {
    caption = 'My First Angular App';
    
    onButtonClick() {
      console.log('Button clicked!');
      this.caption = 'Button Clicked!';
    }
  }
  ```

- Save the file and check the browser. When you click the button, the title should change to "Button Clicked!" and the message will be logged to the console.

### 3. Adding an Input Field to the App Component
- In `src/app/app.component.html`, add an input field and bind its input event to a method:
  ```html
  <input type="text" #textBox (input)="onInputChange(textBox.value)" placeholder="Type something" />
  ```

### 4. Connecting the Input Event to a Method
- In `src/app/app.component.ts`, add a method to handle the input event:
  ```typescript
  export class AppComponent {
    caption = 'My First Angular App';
    inputText = '';

    onButtonClick() {
      this.caption = 'Button Clicked!';
    }

    onInputChange(value: string) {
      this.inputText = value;
    }
  }
  ```

- This method updates the `inputText` property whenever the user types in the input field.

### 5. Displaying the Input Value on the Screen
- In `src/app/app.component.html`, display the value of the `inputText` property below the input field:
  ```html
  <p>You typed: {{ inputText }}</p>
  ```

- Save the changes and check the browser. As you type into the input field, the text you type should be displayed dynamically on the screen.

### 6. Exercise Complete
- You have successfully connected button and input events to methods, modified the component's state, and displayed information dynamically on the screen.



## Exercise 3 - Using Control Flow (@if and @for) in Angular 18

In this exercise, you will use Angular’s new control flow (`@if` and `@for`) to control the visibility of elements and display lists dynamically based on component data.

### 1. Adding a Toggle Button for Conditional Rendering
- Open `src/app/app.component.html`.
- Add a button that toggles the visibility of a message using `@if`:
  ```html
  <button (click)="toggleMessage()">Toggle Message</button>
  @if (showMessage) {
    <p>This is a conditional message!</p>
  }
  ```

### 2. Connecting the Button Event to Toggle Visibility
- Open `src/app/app.component.ts`.
- Add a property `showMessage` and a method `toggleMessage` to the `AppComponent` class to toggle the visibility of the message:
  ```typescript
  export class AppComponent {
    caption = 'My First Angular App';
    showMessage = false;

    toggleMessage() {
      this.showMessage = !this.showMessage;
    }
  }
  ```
- Save the file. In the browser, you should now be able to toggle the visibility of the message by clicking the button.

### 3. Displaying a List of Items Using `@for`
- In `src/app/app.component.ts`, add an array of strings to represent a list of items:
  ```typescript
  export class AppComponent {
    title = 'My First Angular App';
    showMessage = false;
    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    
    toggleMessage() {
      this.showMessage = !this.showMessage;
    }
  }
  ```

### 4. Using `@for` to Display the Items
- In `src/app/app.component.html`, add an unordered list that uses `@for` to iterate over the `items` array and display each item:
  ```html
  <ul>
    @for (item of items; track item) {
      <li>{{ item }}</li>
    }
  </ul>
  ```

### 5. Exercise Complete
- You have successfully used `@if` to conditionally display content and `@for` to iterate over and display a list of items dynamically in your Angular app.

## Exercise 4 - Using [class.xxx] and [style.xxx] Directives in Angular 18

In this exercise, you will practice using Angular’s `[class.xxx]` and `[style.xxx]` directives to dynamically apply CSS classes and styles based on component data.

### 1. Adding a Button and Conditional Class Binding
- Open `src/app/app.component.html`.
- Add a button that will dynamically apply a CSS class when clicked:
  ```html
  <button (click)="toggleHighlight()" [class.highlight]="isHighlighted">Toggle Highlight</button>
  ```
  
- Define the `highlight` class in the `src/styles.css` file (or any global stylesheet):
  ```css
  .highlight {
    background-color: yellow;
    color: black;
  }
  ```

### 2. Adding Logic to Toggle the Class
- Open `src/app/app.component.ts`.
- Add a property `isHighlighted` and a method `toggleHighlight` to control the button’s appearance:
  ```typescript
  export class AppComponent {
    isHighlighted = false;

    toggleHighlight() {
      this.isHighlighted = !this.isHighlighted;
    }
  }
  ```
- Save the file and check the browser. When you click the button, it should toggle the `highlight` class, changing the button’s background color.

### 3. Applying Dynamic Styles Using `[style.xxx]`
- In `src/app/app.component.html`, add a paragraph that dynamically changes its text color based on a component property:
  ```html
  <p [style.color]="textColor">This text will change color dynamically.</p>
  <button (click)="changeColor()">Change Text Color</button>
  ```

### 4. Adding Logic to Dynamically Change Styles
- In `src/app/app.component.ts`, add a property `textColor` and a method `changeColor` to update the style dynamically:
  ```typescript
  export class AppComponent {
    isHighlighted = false;
    textColor = 'black';

    toggleHighlight() {
      this.isHighlighted = !this.isHighlighted;
    }

    changeColor() {
      this.textColor = this.textColor === 'black' ? 'blue' : 'black';
    }
  }
  ```

- Save the file and check the browser. When you click the "Change Text Color" button, the text color should toggle between black and blue.

### 5. Exercise Complete
- You have successfully used `[class.xxx]` to conditionally apply CSS classes and `[style.xxx]` to dynamically apply inline styles based on component properties.

