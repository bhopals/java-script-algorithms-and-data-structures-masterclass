### Dynamic Programming

- OBJECTIVES

  - Define what Dynamic Programming is
  - Explain what OVERLAPPING SUBPROBLEMS are
  - Understand what OPTIMAL SUBSTRUCTURE is
  - Solve more challanging problems using Dynamic Programming

- OVERLAPPING SUBPROBLEMS and OPTIMAL SUBSTRUCTURE are two conditions/indicators to use
  Dynamic Programming on a given problem.

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
