### Introduction to Problem Solving

- WHAT IS AN ALGORITHM

  - A `Process` or `Set of Steps` to accomplish a certain task.

  - Almost everything that you do in Programming involves some kind of Algorithm!
  - It is the foundation for being a successful problem solving and developer

- HOW DO YOU IMPROVE

  - `DEVISE` a Plan for Solving Problems
  - `MASTER` common Problem Solving Patterns

- A Simple, Foolproof, Magical, Miraculous, Fail-safe Approach to Devise a Plan for Solving Problems

- PROBLEM SOLVING

  - A. UNDERSTANDING THE PROBLEM

    - 1. Can I Restate the problems in my own words?
    - 2. What are the inputs that go into the problem?
    - 3. What are the outputs that should come from the solution to the problem?
    - 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve
         the problem? (You may not be able to answer this question until you set about solving problem. That's okay;
         it's still worth considering the question at this early stage.)
    - 5. How should I label the important peieces of data that are part of the problem?

    - EXAMPLE:(Using Above Approach)
      - QUESTION - Write a Function which takes two Numbers and returns their sum.
      - ANSWER
        - 1.  Can I Restate the problems in my own words?
          - Implement Addition
          - Add two numbers
        - 2.  What are the inputs that go into the problem?
          - Two Numbers
          - Need to make sure, Are we taking about addition of Integers? OR Floating Numbers?
          - How about the size? Whats the max value any number can have? (to avoid getting addition result in INFINITY)
          - What if some one passes just few params (< 2) OR Too many params - Handling non-integers and undefined values
          - What should be default value if nothing is passed? or Throw an Error of too few or too many input params
        - 3. What are the outputs that should come from the solution to the problem?
          - Should be Integer? or Float?
          - What about String inputs?
        - 4. Can the outputs be determined from the inputs?
          - What if some one passes just few params (< 2) OR Too many params - Handling non-integers and undefined values
          - What is expected behaviour?
        - 5. How should I label the important peieces of data that are part of the problem?
          - The name of the variable to easily distinguish them in code (especially when algorithm becomes lengthy)

  - B. EXPLORE CONCRETE EXAMPLES

    - Coming up with examples can help you understand the problem better
    - Examples also provide sanity checks that your eventual solution works how it should.

    - 1. Start with `Simple` Examples
    - 2. Progress to More `Complex` Examples
    - 3. Explore Examples with `Empty` Inputs
    - 4. Explore Examples with `Invalid` Inputs

    - EXAMPLE

      - QUESTION - Write a function which takes in a string and returns counts of each character in the string.
      - ANSWER

        - 1. Start with `Simple` Examples
             These things I would clarify first.

          - charCount("aaaaa") // {a: 4} OR {a: 4, b:0, c:0....z:0}
          - charCount("hello") // {h:1 e:1 l:2 o:1 } OR {a:0, b:0, c:0, d:0, e:1 ..h: 1, ...l:2... o:1...z:0 }

        - 2. Progress to More `Complex` Examples

          - charCount("my phone number is 1232 $$#$")
            - Only count chars? How about SPACES? NUMBERS? SPECIAL SYMBOLS?
          - charCount("Hello hiiii. I am")
            - How about UPPER CASE and LOWER CASE?

        - 3. Explore Examples with `Empty` Inputs
          - charCount()
          - charCount('')
          - charCount(' ')
        - 4. Explore Examples with `Invalid` Inputs
             - charCount(null)
             - charCount(undefined)
             - charCount(0)
             - charCount("1123322")
             - charCount("#$#$##")
          - Covering Edge cases helps us build robust and fullproof solution.

  - Break It Down
  - Solve/Simplify
  - Look Back and Refactor

- All the above mentioned problem solving strategies are adapted from `Geroge Polya`, whose book `How To Solve It` is
  a great resource for anyone who wants to become a better problem solver.

- KEYWORDS
  - It is worth being deliberate
  - It is worth have a game plan to follow step by step guide
  - It does not come to you right off the bat
  - It may sound silly or it sounds trivial
  - Ask very deliberate questions
  - I had a moment of panic
  - Help you build more Robust and Full proof solution
