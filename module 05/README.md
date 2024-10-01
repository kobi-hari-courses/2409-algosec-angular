# Module 05 - DI Contd, Signal store, and async programming

## Projects
|     |     |
| --- | --- |
| [DI](./projects//fun-with-di/) | Dependency Injection in Angular 14+ |

## Summary

### Dependency Injection - Continuted
#### Recap
- We talked about the new `inject` function as an alternative, more recommended way, to inject dependencies
- We understood that it can only be used when in **Injection context** meaning:
    - During consrtuctor, or initialization of an angular managed object (Components, Directives, Pipes, Injectables)
    - Inside functions that are executed using `runInInjectionContext` with a proper injector
    - Injection context basically means that it runs in the context of a specific Injector.
#### `DestroyRef`
- Every injector can automatically provide its `DestroyRef`
- The `DestroyRef` is an object that can notify you when the injector is being destroyed so you can do cleanup work
- Every injector has its own `DestroyRef`
- We saw that this is a good alternative to using the `OnDestroy` lifecycle hooks

#### Injection Tokens
- In angular, not just services can be injected
    - You can inject parent component into its children
    - You can inject directives placed on the same host, or higher in the hierarchy into the component
    - You can inject `DestroyRef`
    - You can inject the `Injector` itself
- In angular, also constants, configuration values and even functions  are injectable
    - The problem is that you can not use `string`, `number` and `() => void` as injection token
- You can use the class `InjectionToken<T>` to define a custom injection token

```typescript
const MY_VALUE = new InjectionToken<string>('MY_VALUE');
```

- You can set the value using a provider

```typescript
providers: [
    {provide: MY_VALUE, useValue: 'Hello World'}
]
```

- You could inject it using the `@Inject` decorator.
- But now - better way - you can inject it using the `inject` function

```typescript
class MyComponent {
    readonly myValue = inject(MY_VALIUE);
}
```

- Typescript can infer the type of the value from the generic type of the injection context

#### Injection into functions
- One of the benefits of the `inject` function is that it allows us to write functions that use **Depenency Injection**
- You can write utility functions that take care of their own dependency injection
- For example, we saw a function that starts an interval and runs a lambda every second
    - The function needs the injection context (specifically the `DestroyRef` in order to know when to stop)
    - It Uses the `inject` function to fetch the destroy ref and register cleanup logic
- We saw that in order to allow the function to be optionally ran outside injection context, it can optionally receive the destroy ref in the parameters.
- We saw how to define the parameters so that the function can either be called in injection context, or explicitly receive the dependency:

```typescript
function everySecond(destroyRef: DestroyRef = inject(DestroyRef)) {
    // logic that uses destroyRef
}
```



