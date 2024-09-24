# Exercises for module 04

## Exercise 1 - `input`, `output` and `model` in angular 18

In this exercise, you will practice using Angular signals to manage an array of numbers. Each number in the array will be tied to a dynamic `CounterComponent`, where the parent component will maintain the overall state of the array.

### 1. Main App Component
You will create a signal to hold an array of numbers. Each number will be passed to a separate `CounterComponent`. The main app will also handle updates from the child components and update the array when needed.

### 2. CounterComponent
Each `CounterComponent` will receive the number from the parent via an `input`. The component will render increment and decrement buttons and emit the updated value back to the parent when these buttons are clicked.

#### Hint
- Use `input` and `output` but do not use a model in this case (do you know why?)

## Instructions

### Main App Component

1. Create a signal to hold an array of numbers, e.g., `[0, 5, 10]`.
2. Dynamically render a `CounterComponent` for each number in the array using `@for`.
3. Pass each number to the child component via an `input.required`.
4. When the child component emits a new value, update the corresponding value in the array using the signal's `update` method and immutable operators.

### CounterComponent

1. Use `input.required` to accept the current number from the parent.
2. Render two buttons to increment and decrement the number.
3. Use `output` to emit the updated number back to the parent component when the buttons are clicked.


