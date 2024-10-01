# Module 04 - Component Authoring APIs using signals, Intro to DI

## Projects:
|     |     |
| --- | --- |
| [Notepad](./projects/notepad/) | Authoring components using `input`, `output` and `model` |
| [Immutables](./projects/fun-with-immutables/) | Immutable operators on objects and arrays |
| [DI](./projects//fun-with-di/) | Dependency Injection in Angular 14+ |

## Summary
### Authoring components in angular
* We saw how to manually create a component
    * Create a `.ts` file with a class that reprensents the component
    * Use the `@Component` decorator to mark to angular that the class reprensents a component and configure the selector, the template, the style, and the fact that it is standalone
    * Create an html and css files and add their path to the component decorator
* We then saw how to use the cli to create it
```cmd
ng g c components/comp-name
```

### Using the signal based component APIs
* Angular 18 comes with new ways to define communicatio between components
* We saw how to define an input using the `input` function.
* We saw how to make it mandatory using the `input.required` function.
* We saw how to define an output using the `output` function.
* We saw how to define a pair of input and output for the same data using the `model` function.
* We saw how to make it mandatory using the `model.required` function
* Finally, we saw that we can use it seperatly, as input, as output or as two way bounded signal using the syntaxes:

```html
<!-- Assuming value is a writeable signal -->
<app-comp [data]="value()"/>
<app-comp (dataChange)="value.set($event)"/>
<app-comp [(data)]="value">
```

### Immutable data types
* We talked about working with immutable data types
* We saw how to create them using readonly properties on interfaces
* We saw why it is important to use interfaces and not classes
* We saw how to "modify" and immutable object
    - how to copy values from source
    - how to give new values to specific properties
```typescript
const obj2 = {
    ...obj1, 
    name: 'Changed'
}
```
* We saw how to "modify" immutable arrays
    - how to add values before and after the array
    ```typescript
    const ar1 = [1, 2, 3];
    const ar2 = [0, ...ar1, 4, 5];
    ```
    - how to replace specific item
    ```typescript
    const ar1 = [2, 4, 6, 8];
    const ar2 = ar1.map(i => (i === 4) ? 4.5 : i);
    ```
    - how to remove specific item
    ```typescript
    const ar1 = [2, 4, 5, 6, 8];
    const ar2 = ar1.filter(i => i !== 5);
    ```
    - how to replace item at specific index
    ```typescript
    const ar1 = [2, 4, 5, 8, 10];
    const ar2 = ar1.map((i, index) => index === 2 ? 6 : i)
    ```
    - how to delete at index
    ```typescript
    const ar1 = [2, 4, 5, 6, 8, 10];
    const ar2 = ar1.filter((i, index) => index !== 2);
    ```
* We saw that when we have signals of reference type values (objects and arrays), if we mutate the object, the signal does not fire
* We saw that when we use immutable types, the signals do fire
* We understood why it is much more performant, to use immutable types in angular, despite the overhead of copying the data

### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of the `config`, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
* We saw examples of 2 additional providers: 
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services

### Advanced DI
* The `Injector` is an object that we can inject on our own and use it programatically.
    * We inject it by using the `Injector` token
    * We can use it to get instances of objects per token.
* There are other types of "requests" or "token".
    * We can create a new constant of type  `InjectionToken` to serve as alternative token.
    * We can use the `useValue` and `useFactory` providers to set the value of the token
    * We consume the token using the `@Inject` decorator

### The `inject` function
* Starting with angular 14, we can inject using the `inject` function instead of using constructor parameters
* We saw that we can only use it during "injection context" which means that it can only be called when we are inside a constructor or initializer.
* We saw that we can "trigger" an artifical injection context by storing the `Injector` and then calling the `runInInjectionContext` function
