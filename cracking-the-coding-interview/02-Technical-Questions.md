### Technical Questions

#### Walk Through a Problem

- 1. Listen Carefully

  - Make sure you listen it not just hear it.
  - Read the problems throughly and mark important things
  - Read the Question 3 TIMES

- 2. Draw an Example

  - Do not rush to Solve the questions, instead, first got to whiteboard/pen and paper, and Draw an Example
  - Sample Inputs and possible outcomes
  - Enough data to cover all cases

- 3. State a Brute Force

  - Use the Brute Force approach to solve the problem
  - Then Optimize it

- 4. Optimize

  - Optimize the Solution (Time v/s Space Complexity trade offs)

- 5. Walk through

  - After you have nailed down an Optimal Algorithm, do not just dive into coding. Take a moment
    to solidify your understanding of the algorithm.

- 6. Implement (Actual Coding)

  - Now that you have an optimal algo., you know exactly what you are going to write, go ahead and implement it
  - Start Coding in the far top left corner of the whiteboard

- 7. Test

#### Optimizing and Solve Technique #1: Look for BUD

- BUD

  - B (Bottlenecks)
  - U (Unnecessary work)
  - D (Duplicated work)

- 1. Bottlenecks

  - A Bottleneck is a part of your algorithm that slows down the overall runtime.
  - Example
    - A find elements logic can be optimized instead of Iterativing over all elements (O(N))
    - An Optimize algo can be used to Sort the elements (using Binary Search)

- 2. Unnecessary Work

  - Break the loop whenever necessary instead of looping all the way through.

- 3. Duplicated Work
  - Find the part that contains the duplicate work, and move that to a separate function
    Or something we could do in the same Iteration
