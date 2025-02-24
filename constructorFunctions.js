"use strict";

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new Person("Mary", "Smith", 30);

console.log(person1)
