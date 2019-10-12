// CODE here for your Lambda Classes

// Base CLASS -- parent
class Person {
  constructor(attrs) {
    this.name = attrs.name; 
    this.age = attrs.age; 
    this.location = attrs.location; 
  }
  // Methods: 
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`); 
  }
}

// Instructor CLASS -- chiled

class Instructor extends Person {
  constructor(attrs) {
    super(attrs); 
    this.specialty = attrs.specialty; 
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase; 
  }
  // Methods: 
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`); 
  }
  subtractPoints(student, subject, grade) {
    console.log(`${student} grade in ${subject}: `);
    console.log(`Student grade: ${grade} - New Student grade: ${grade - Math.random()}`);
  }
  addPoints(student, subject, grade) {
    console.log(`${student} grade in ${subject}: `);
    let newGrade = grade + Math.random();
    console.log(`Student grade: ${grade} - New Student grade: ${newGrade}`);
  }
}

// Student CLASS -- chiled

class Student extends Person {
  constructor(attrs) {
    super(attrs); 
    this.previousBackground = attrs.previousBackground; 
    this.className = attrs.className; 
    this.grade = attrs.grade; 
    this.fafavSubjects = attrs.favSubjects;
  }
  // Methods: 
  listsSubjects(fafavSubjects) {
    console.log(`Hello my name is ${jane.name}. My favorite subjects are: `);
    for (let i = 0; i < fafavSubjects.length; i++) { 
    console.log(`subject # ${i + 1}:  ${fafavSubjects[i]}`); // prints out an array
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`); 
  } 
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`); 
  }
}

// Project Manager CLASS -- chiled

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs); 
    this.gradClassName = attrs.gradClassName; 
    this.favInstructor = attrs.favInstructor; 
  }
  // Methods: 
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`); 
  }
  debugsCode(studentObj, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`); 
  }
}



// Calling action: 
const fred = new Instructor ({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `Don't forget the homies`, 
}); 

const jane = new Student ({
  name: 'Jane',
  location: 'Verginia',
  age: 25,
  previousBackground: 'Teacher',
  className: 'WEBPT11', 
  grade: 87,
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const eric = new ProjectManager ({
  name: 'Eric',
  location: 'Colorado',
  age: 30,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `say what`, 
  gradClassName: 'WEBPT11',
  favInstructor: 'Fred',
});


console.log(jane.listsSubjects(jane.fafavSubjects));
console.log(jane.grade);
console.log(fred.specialty); 
console.log(fred.demo(`JavaScript - IV`)); 
console.log(fred.subtractPoints(jane.name, `JavaScript - IV`, jane.grade));
console.log(fred.addPoints(jane.name, `JavaScript - IV`, jane.grade));


