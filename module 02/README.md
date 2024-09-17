# Module 02 - NodeJS, npm and Typescript

## Projects
|     |     |
| --- | --- |
| [fun-with-node](projects/fun-with-node/) | Introduction to NodeJS and npm |
| [fun-with-ts](./projects/fun-with-ts) | Introduction to Typescript | 


### NodeJS
* We learned the difference between serverside javascript (**NodeJS**) and clientside web javascript
  * We talked about modularity and the `require` keyword
  * We talked about `webpack`  - a utility to pack "serverside" javascript files into one "web-ready" file

## Npm - Package management and work environment
* We saw how to turn a folder into an npm package by running `npm init`
* We saw how to use the node.js `require` command in order to incorporate another module (file) into our code
* We saw how the `package.json` file manages the project as a package.
* We saw how to install external packages using `npm install` and the `package.json > dependencies` section
* We talked about the diffrence between `dependencies` and `devDependencies` 
* We saw how to install the typescript compiler into the package

## Typescript basics
* We learned about the basic types of typescript
  * The 6 atomic types of javascript: `boolean`, `number`, `string`, `object`, `function` and `undefined`
* Typed arrays: `number[]` and `Array<number>`
* Tuples: `[number, number], [string, boolean, number]`

## Typescript deep dive
* Defining Classes
* Declaring constructors and initializing fields in the constructor signature
* private, public and protected fields
* Defining property getters and setters
* Using interfaces
  * What is special about iterfaces in typescript
* Using the `let` keyword
* the `type` alias
* Fixed object notation: `{x: number, y: boolean}`
* Flexible object notation: `{[key: string]: number}` and the equivilent: `Record<string, number>`
* Function notation: `(x: number, y: string) => boolean` 
* Typescript definition for **Type Safety** as "signature compatible"
* Union Types
* Cross Types
* Mapped types

## Working Environment
* How to create working environment with npm and vscode
* Defining source and dist folders
* We saw how to create the `tsconfig.json` file and configure different aspects of the typescript project
  * What the target version of javascript is
  * Where to locate the source files
  * Where to place the compiled files
  * Libreries to include
  * Adding `map` files to support debugging
  * Running in the compiler in `watch` mode for continous compilation
* We saw how to configure the `VS Code Debugger` for work with our `node.js` project


