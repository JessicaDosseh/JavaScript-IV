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
}

// Student CLASS -- chiled

class Student extends Person {
  constructor(attrs) {
    super(attrs); 
    this.previousBackground = attrs.previousBackground; 
    this.className = attrs.className; 
    this.favSubjects = attrs.favSubjects; // creates an array
  }
  // Methods: 
  listsSubjects(favSubjects) {
    console.log(`My favorite subjects are: ${favSubjects}`); // prints out an array
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
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`, 
}); 

console.log(fred); 
console.log(fred.demo(`JavaScript - IV`)); 
