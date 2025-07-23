class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

const person1 = new Person("Andi", 12);
console.log(typeof Person);
console.log(person1.name);
person1.eat();
