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

#### Optimizing and Solve Technique #2: DIY (Do It Yourself)

- When you get a quetion, try just working it through intuitevely on a real example.
- Think for a moment about how you would solve this problem.

#### Optimizing and Solve Technique #3: Simplify and Generalize

- With Simplify and Generalize, we implement a multi-step approach.
  - First, we simplify or tweak some constraint, such as data type
  - Then, we solve this new simplified version of the problem
  - Finally, once we have an algorithm for the simplified problem, we try to adopt it for the more
    complex version.

#### Optimizing and Solve Technique #4: Base Case and Build

- With Base Case and Build, we solve the problem first for a BASE CASE (e.g. n = 1) and then
  try to build up from there.
- When we get more complex/interseting cases (e.g. n =3, or n = 4)

#### Optimizing and Solve Technique #5: Data Strictire Brainstorm

- Think about the potential Data Structure that we could use

  - Linked List? / Map / Tree / Stack / Queue / Hash Map / Heap / Or any other ...

- The more problems you do, the more developed your instinct on which data structure to apply will be.
- You also develop a more finely tuned instinct as to which of these approaches is the most useful.

#### Best Conceivable Runtime (BCR)

- Considering the Best Conceivable Runtime can offer a useful hint for some problem.
- The BEST Conceivable runtime is, literrally, the best runtime your could concieve of a solution to a problem
  having. You can easily prove that there is no way you could beat the BCR.

- For Example, suppose you want to compute the number of elements that two arrays (of length A and B)
  have in common. You immediately know that you cannot do better than O(A+B) time because you have to
  touch each element in each array O(A+B) is the BEST CONCEIVABLE RUNTIME (BCR)

- OR Suppose, you want to compute all the number of values within an Array. You know you cannot do that
  in better O(N2) time because you have to touch there are N2 Pairs to print.

- Most Likely, we are driving towards an `O(N)` algorithm or an` O(N LOG N)` algorithm.
- If we imagine our current algorithm runtime as `O(N*N)`, then getting to `O(N)` or `O(N LOG N)`
  might mean reducing that second `O(N)` in the equation to `O(1)` or `O(LOG N)`

- This is one way that BCR can be useful. We can use the runtimes to get a "HINT" for what we need to REDUCE.

#### What Good Coding Looks Like

- Broadly speaking, good code has the following properties:

  - Correct
  - Efficient
  - Simple
  - Readable
  - Maintainable

- Apart from that, few more points to keep that in MIND
  - Use Data Structure Generously (The BEST FIT ONE)
  - Appropriate Code Reuse
  - Modular
  - Flexible and Robust
  - Error checking

#### Don't Give Up!

- Always show the eagerness to step up and Solve the Problem.
- Show excitement about solving hard problems. Embrace it!!!
