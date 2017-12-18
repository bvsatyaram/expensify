class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  greet () {
    return `Hello from ${this.name}`;
  }

  describe () {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor () {
    return !!this.major;
  }

  describe () {
    let description = super.describe();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description;
  }
}

class Traveller extends Person {
  constructor (name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation () {
    return !!this.homeLocation;
  }

  describe () {
    let description = super.describe();
    if (this.hasHomeLocation()) {
      description += ` I'm from ${this.homeLocation}`;
    }

    return description;
  }
}

const me = new Student('BV Satyaram', 30, 'Computer Science');
console.log(me.describe());

const other = new Student();
console.log(other.describe());

const me1 = new Traveller('BV Satyaram', 30, 'Hyderabad');
console.log(me1.describe());

const other1 = new Traveller();
console.log(other1.describe());
