# Module 02 Exercises
## Exercise 01 - NodeJS and Npm

### Objective:
The goal of this exercise is to create a basic Node.js project, set it up using npm, incorporate external packages, and use `require` to import and use an external package. Additionally, you will learn to set up and run the project using npm scripts and debug using Visual Studio Code.

### Instructions:

1. **Initialize the project**:
   - Create a new folder for the project and open it in VS Code.
   - Open the terminal in VS Code and run the following command to initialize the project:
     ```bash
     npm init 
     ```

2. **Install an external package**:
   - Use npm to install the `colors` package (used for styling terminal output):
     ```bash
     npm install colors
     ```

3. **Create the main file**:
   - In the root folder, create a file named `index.js`.
   - Add the following code to `index.js`:
     ```javascript
     const colors = require('colors');

     const name = 'Student';
     console.log(colors.blue(`Hello, ${name}! Welcome to the Node.js exercise.`));
     console.log(colors.green('This message is styled using the colors package!'));
     ```

4. **Set up an npm script**:
   - In your `package.json`, add the following start script under the `scripts` section:
     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```

5. **Debug using VS Code**:
   - Open VS Code and set a breakpoint on the line where the `colors.blue` function is called.
   - In VS Code, press `Ctrl+Shift+D` to open the debug view.
   - Create a `.vscode/launch.json` file by clicking "create a launch.json file" and configure it for Node.js debugging:
     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Launch Program",
           "program": "${workspaceFolder}/index.js"
         }
       ]
     }
     ```
   - Run the debugger from VS Code.

6. **Run the project**:
   - To run the project, use the following command in the terminal:
     ```bash
     npm start
     ```

### Summary:
By completing this exercise, you will learn how to:
- Initialize a Node.js project using npm.
- Install and use external packages.
- Set up npm scripts.
- Debug a Node.js application in VS Code.

## Exercise 02 - Typescript

### Objective

In this exercise, you will practice:
* Interfaces
* Union Types
* Functional programming
* Typescript project structure 

### Goal 
Implement a shape calculation and reporting system. The app will calculate the area and circumference of different shapes, including circles, rectangles, and triangles. You will then generate a shape report based on the calculated values.

### Instructions

1. Set up the project structure with the following files:
   - `shapes.ts`: Define the interfaces for specific shapes and export the `Shape` type and the `ShapeKind` type.
   - `calculations.ts`: Implement the shape calculation functions and export the `ShapeCalculator` type, `calculateArea` function, and `calculateCircumference` function.
   - `report.ts`: Create the `createShapeReport` function that generates a shape report and export it.
   - `index.ts`: Use the implemented functions to calculate the area and circumference of shapes and generate the shape report.

2. Implement the `shapes.ts` file:
   - Define the interfaces `Circle`, `Rectangle`, and `Triangle` for each specific shape. Each shape interface should have a `kind` property of a discriminated union type. Export these interfaces.
   - Define the `Shape` type as a union type of `Circle`, `Rectangle`, and `Triangle`.
   - Define the `ShapeKind` type as the mapped type that extracts the `kind` property values from the `Shape` type.

3. Implement the `calculations.ts` file:
   - Import the `Shape` type from `shapes.ts`.
   - Define the `ShapeCalculator` type as a function type that accepts a shape of type `Shape` and returns a number.
   - Implement the `calculateArea` function that calculates the area based on the shape type using a switch statement. Export this function.
   - Implement the `calculateCircumference` function that calculates the circumference based on the shape type using a switch statement. Export this function.

4. Implement the `report.ts` file:
   - Import the `Shape` and `ShapeKind` types from `shapes.ts`, and the `ShapeCalculator` type from `calculations.ts`.
   - Implement the `createShapeReport` function that takes an array of shapes and a shape calculator function. Iterate through the shapes using a `for...of` loop and generate an array of shape reports. Each shape report should have a `kind` property of type `ShapeKind` and a `value` property of type `string`, which represents the calculated value. Export this function.

5. Implement the `index.ts` file:
   - Import the necessary types and functions from `shapes.ts`, `calculations.ts`, and `report.ts`.
   - Create instances of different shapes (e.g., circle, rectangle, triangle).
   - Create an array of shapes containing the instances created in the previous step.
   - Use the `createShapeReport` function with `calculateArea` to generate a shape report for the areas of the shapes. Iterate through the resulting array using a `for...of` loop and log each shape's kind and calculated area to the console.
   - Use the `createShapeReport` function with `calculateCircumference` to generate a shape report for the circumferences of the shapes. Iterate through the resulting array using a `for...of` loop and log each shape's kind and calculated circumference



