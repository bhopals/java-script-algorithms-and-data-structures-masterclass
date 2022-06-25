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

#### Intro to Hash Functions

- A Hash function is that takes data of an Arbitary Size and returns a fixed size

- WHAT MAKES A GOOD HASH? (Not a cryptographically secure one)

  - 1. FAST (i.e. Constant Time)
  - 2. Doesn't cluster outputs at specific indices, but distributes uniformly
  - 3. Deterministic (Same INPUT Yields Same OUTPUT)

- WRITING OUR FIRST HASH FUNCTION

  - Simple Hash Example (Here is the Hash that works on Strings Only):

  ```
    function hash(key, arrayLen) {
       let total = 0;
       for (let char of key) {
          let value = char.codeAt(0) - 96;
          total = (total + value) % arrayLen;
       }
       return total;
    }

    hash("pink", 10); // 0
    hash("orangered", 10); // 7
    hash("cyan", 10); // 3

  ```

- REFINING OUR HASH (Problem with our Current Hash)

  - Only Hashes STRINGS
  - Not Constant time (Becase we are looping around) - Linear in key length
  - Could be littler more Random (Because we are using Fixed Calculation - `char.codeAt(0) - 96`)

- REFINED EXAMPLE

  ```
  function hash(key, arrayLen) {
      let total = 0;
      let WEIRED_PRIME = 31; //PRIME NUMBERS
      for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * WEIRED_PRIME + value) % arrayLen;
      }
      return total;
  }

  hash("pink", 10); // 0
  hash("orangered", 10); // 7
  hash("cyan", 10); // 3

  ```

- NOW YOU MIGHT WONDER, WHY PRIME NUMBERS NOT Non-PRIME numbers?
  - The Prime number in the HASH is helpful in SPREADING out the keys UNIFORMLY
  - It is also helpful if the array that you are putting values into has a PRIME LENGTH

#### Handling Hashing Collisions

- COLLISIONS - Same HASH value is returned for two different values

- DEALING WITH COLLISIONS

  - Even with a Large Array and a great HASH Function, Collisions are INEVITABLE
  - There are many strategies for dealing with Collisions, but we will focus on TWO:
    - Separate Chaining
    - Linear Probing

- SEPARATE CHAINING

  - With Separate Chaining, at each index in our ARRAY we store values using a more sophisticated data
    structure (e.g. an ARRAY or a LINKED LIST)
  - This allows us to STORE multiple KEY-VALUE Pairs at the same index.
  - EXAMPLE:
    - If collision occurs at any index, we store those in ARRAY or LINKED LIST at that same index

- LINEAR PROBING

  - With Linear Probing, when we find a collision, we search through the array to find the next empty slot
    unlike with Separate Chaining, this allows us to store a single KEY-VALUE at each index.
  - EXAMPLE:
    - If collision occurs at any index, we store those in ARRAY or LINKED LIST at the very next available index

- SEPARATE CHAINING is RECOMMENDED as we can store more data
