class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year || 1;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} and ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!!!";
    }
    return `${this.firstName} ${this.lastName} has been later ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length;
  }
  static EnrollStudents(...students)
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);
firstStudent.fullName();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.addScore(45);
firstStudent.addScore(55);
firstStudent.calculateAverage();


Student.EnrollStudents(firstStudent, secondStudent)