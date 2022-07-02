### Dynamic Programming

- OBJECTIVES

  - Define what Dynamic Programming is
  - Explain what OVERLAPPING SUBPROBLEMS are
  - Understand what OPTIMAL SUBSTRUCTURE is
  - Solve more challanging problems using Dynamic Programming

- OVERLAPPING SUBPROBLEMS and OPTIMAL SUBSTRUCTURE are two conditions/indicators to use
  Dynamic Programming on a given problem.

- A method for solving a complex problem by breaking down into a collection of simpler subproblems,
  solving each of those subproblems just once, and storing their solutions.

#### Intro to Dynamic Programming

- DEFINITION

  - A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
    solving each of those subproblems just once, and storing their solutions.

- WHERE DOES THE NAME "DYNAMIC PROGRAMMING" COME FROM?
  - It is not any other programming language, but just a process of solving a problem where one needs
    to find the best decisions one after another.
  - It refers to find an optimal program to solve a problem

#### Overlapping Subproblems

- The Dynamic Programming ONLY Works with some specific situations.
- We use Dynamic Programming if we have

  - OPTIMAL SUBSTRUCTURE
  - OVERLAPPING SUBPROBLEMS

- OVERLAPPING SUBPROBLEMS

  - A Problem is said to have OVERLAPPING SUBPROBLEMS if it can be broken down into Subproblems
    which are reused several times.

  - EXAMPLE

    - Fibonacci Sequence
      - Every number after the first two is the sum of the two preceding ones.
      - 0,1,1,2,3,5,8,13...
      - fib(5) ==> fib(4) + fib(3)
      - fib(4) ==> fib(3) + fib(2)
      - fib(3) ==> fib(2) + fib(1)
      - fib(2) ==> fib(1) + fib(1)
      - fib(1) ==> fib(1) + fib(0)

  - Merge Sort Algo - NO Overlapping Subproblems
  - Fibonacci - Overlapping Subproblems
  - When we say "Overlapping Subproblems", it means when we write a solution of the problem, we
    may have some steps that are repeatedly happens

#### Optimal Substructure

- OPTIMAL SUBSTRUCTURE
  - A Problem is said to have OPTIMAL SUBSTRUCTURE if an optimal solution can be constructed
    from optimal solutions of its subproblems.
  - Example
    - Fibonacci Series (The one we have dicussed above)
    - Shortest Path Algorithm

#### Writing a Recursive Solution

- Lets Write it!

  - Fib(n) = Fib(n-1) + Fin(n-2)
  - Fib(2) is 1
  - Fib(1) is 1

- RECURSIVE Solution

  ```
    function fib(n) {
        if(n <= 2) return 1;
        return fib(n-1) + fib(n-2);
    }
  ```

- The BIG O Complexity of the above Solution
  - COMPUTATIONAL/TIME Complexity - `O(2^n)` - Quadratic - Really NOT GOOD!

#### The Problem with the Above Solution

- PROBLEMS

  - REPITIONS: We are doing the repetion over and over again

    - Example

    ```
            fib(7)
            /       \
        fib(6)    fib(5)
        /    \    /    \
    fib(5) fib(4) fib(4) fib(3)
    ```

    - We can see that while calculation fib(7)there are some duplications we are doing while doing
      the calculation - fib(5) getting calulated more than once, same goes for fib(4), and fib(3)

    - Means there are SUBPROBLEMS, and OVERLAP REPITIONS. That means Dynamic Programming can be used here.

  - GROWS QUICKLY Over TIME so not a very perfomant solution

- WHAT CAN WE IMPROVE

  - What If we could REMEMBER OLD VALUES? - Using Dynamic Programming

- DYNAMIC PROGRAMMING
  - A method for solving a complex problem by breaking down into a collection of simpler subproblems,
    solving each of those subproblems just once, and storing their solutions.
  - Using past knowledge to make solving a future problem easier.
  - Called MEMOIZATION.
