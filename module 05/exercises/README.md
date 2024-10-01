# Exercises for module 05

## Exercise 1 - NGRX Signal store in Angular 18+

In this exercise, you will practice using NGRX signal store to create statefull signal based services in angular.

### Objective
Create an Angular Signal Store to manage the state of two numbers (`x` and `y`). Practice setting up state, using computed values, and creating methods for modifying state.

### Instructions

#### 1. Setup the Store
- Create a new Signal Store service using `@ngrx/signals`.
- Define two state properties: `x` and `y` with initial values of `0`.

#### 2. Add a Computed Property
- Add a computed property `sum` that calculates the sum of `x` and `y`.

#### 3. Create Modification Methods
- Add methods to the store for updating `x` and `y` independently:
  - `updateX(value: number)`: Sets the state of `x`.
  - `updateY(value: number)`: Sets the state of `y`.

#### 4. Create a Component for Interaction
- Create a component that displays `x`, `y`, and `sum`.
- Provide the store in the component level.
- Add input fields or buttons to allow users to modify `x` and `y` through the store methods.

#### 5. Connect the Component and Store
- Use Angular's dependency injection to provide the store to the component.
- Display the computed `sum` in real-time as the state updates.

## Expected Outcome
In this exercise you learned how to:
- Set up a Signal Store to manage state.
- Use computed properties to calculate values based on the state.
- Create methods to modify state and see the effect on computed properties.
