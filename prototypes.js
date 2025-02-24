'use strict'

function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.describe = function() {
    return `${this.name} is a ${this.species}.`;
};


const animal1 = new Animal('Leo', 'Lion');


console.log(animal1.describe());  