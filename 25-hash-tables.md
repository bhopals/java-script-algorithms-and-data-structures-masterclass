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

- HASH TABLE Hash Function

```
 class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

 _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
```

#### Hash Table Set and Get: Psuedocode

- SET Psuedocode

  - Accepts a KEY and a VALUE
  - Hashes the KEY
  - Stores the key-value Pairs in the hash table array via SEPARATE CHAINING
    - Check if the any existing value is already stored on that hash location
      - If it is, push your KEY-VALUE pair `['key', 'value']` on to the ARRAY
      - If not, create an EMPTY Array Item `[]`, and push your KEY-VALUE pair to that `[['key', 'value']]`

- SET Code Example

  ```
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
        this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
  ```

- GET Psuedocode

  - Accepts a KEY
  - Hashes the KEY
  - Retrieves the key-value pair in the HASH Table
    - Go to the HASH position in the hash table, and retrieve the element
      - If that position has single element, return that one
      - If multiple elements, find the right one using KEY and return it
  - If the KEY is not found, returns `UNDEFINED`

- GET Code Example

  ```
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }

  ```

#### HASH Table Keys and Values

- KEY

  - Loops through the hash table array and returns an array of VALUESs in the table

  ```
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //To get unique keys
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  ```

- VALUES

  - Loops through the hash table array and returns an array of VALUES in the table

  ```
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //To get unique values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
  ```

- The DUPLICATE KEY should override the existing VALUES
