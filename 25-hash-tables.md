### Hash Tables

- Store Keys and Values
- Examples
  - Javascript Objects and Maps

#### Hash Tables: Intro

- OBJECTIVES

  - Explain what a HASH TABLE is
  - Define what a HASHING ALGORITHM is
  - Discuss what makes a good HASHING ALGORITHM
  - Understand how collisions occur in a HASH TABLE
  - Handle Collisions using separate CHAINING or LINEAR Probing

- WHAT IS A HASH TABLE?

  - Hash Tables are used to store KEY-VALUE Pairs.
  - They are like ARRAYs, but the KEYS are not ordered.
  - Unlike arrays, HASH TABLES are fast for all of the following operations:
    - Finding values
    - Adding values
    - Removing values

- WHY SHOULD I CARE?

  - Nearly every programming language has some sort of HASH TABLE data structure
  - Because of their SPEED, HASH Tables are very commonly used!

- HASH TABLE Implementation

  - JAVASCRIPT - Objects and Maps
    - Objects have some restrictions, but are basically HASH TABLES
  - JAVA, GO, and SCALA - Maps
  - RUBY - Maps
  - PHYTON - Dictionaries

- HOWEVER, we are going to use our OWN HASH TABLE Implementation (Reinvent the WHEEL :D. Its FUN!!)

- THE HASH PART
  - To implement a HASH TABLE, we will be using an ARRAY
  - In order to look up values by key, we need a way to CONVERT KEYS INTO VALID ARRAY INDICES
  - A Function that performs this task is called HASH Function.
