### Data Structures

- WHAT DO THEY DO??

  - Data structures are collections of values, they contain relationships among these values, and
    the functions or operatios that can be applied to the data.
  - For example, ARRAY - it holds many values, it contains relationships between those values,
    it does have some in-build methods and functionality ways of interating with them, adding to them,
    removing, push, pop, sort, etc.

- WHY SO MANY DATA STRUCTURES??

  - Different DATA STRUCTURES excel at different things. Some are highly specialized, while others
    (like arrays) are more generally used.

- WHY SHOULD I CARE ABOUT DATA STRUCTURES??

  - The more time you spend as a developer, the more likely you will need to use one of these data structures.
  - You have already worked with many of data structures Unknowingly!
  - And of course... INTERVIEWS!

- There is NO ONE Best Data Structures
- They all excel in different situations

- SOME COMMON USE CASES:
  - Working with map/location data? ==> `GRAPH`
  - Need an ordered list with fast inserts/removals at the beginning and end? ==> `LINKED LIST`
  - Web Scrapping nested HTML? ==> `TREE`
  - Need to write a Schedular? ==> `BINARY HEAP`

#### ES2015 Class Syntax

- OBJECTIVES

  - Explain what a class is
  - Understand how javascript implements the idea of classes
  - Define terms like `ABSTRACTION`, `ENCAPSULATION`, and `POLYMORPHISM`
  - Use ES2015 classes to implement data structures

- WHAT IS A CLASS??

  - A Blueprint for creating objects with pre-defined properties and methods

- WHY DO WE NEED TO LEARN CLASSES??

  - We are going to implement `data structures` as `classes`

- Javascript classes, introduced in ECMAScript 2015, are primarily syntatical sugar over Javascript's
  existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance
  model to javascript.

#### Data Structures: The Class Keyword

- THE SYNTAX

```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

- The method to create new objects must be called constructor.
- Constructor is a special method that is used to instantiate new student instances.
- The `class` keyword creates a constant, so you cannot redefine it.
- Watch out for the syntax as well.

- CREATING OBJECTS FROM CLASSES

```
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

#### Data Structures: Adding Instances Methods

- INSTANCE METHODS
  - `fullName`

```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} and ${this.lastName}`
    }
}
let firstStudent = new Student("Colt", "Steele");
firstStudent.fullName() // Your full name is Colt Steele

```

#### Data Structures: Adding Class Methods

- CLASS METHODS
  - Shared across INSTANCES
  - The `static` keyword defines a static method for a class.
  - Cannot be called through a class instances
  - Static methods are often used to create utility functions for an application.

```
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} and ${this.lastName}`
    }
    static enrollStudents(...students) {
        // may be send an email
    }
}
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents(firstStudent, secondStudent) // Your full name is Colt Steele

```

- HOW WE WILL BE USING CLASSES

  - We will be using the constructor and instance methods quite a bit.
  - We will almost never be using static methods.

- One GOTCHA with `this`

  - Inside all of our `instance` methods and constructor, the keyword `this` refers to the object created from
    that class (also known as an `instance`)

- RECAP
  - Classes are blueprints that when created, make objects known as `instances`
  - Classes are created with the `new` keyword
  - The `constructor` function is a special function that gets run when the class is instantiated.
  - Instance methods can be added to classes similar to methods in objects.
  - Class methods cane be added using the `static` keyword.
