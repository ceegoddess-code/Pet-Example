//Day 2 create a pet object
function createPet(name, species) {
let happiness = 50;
let energy = 100;

//return the pet object
return {
    name: name,
    species: species,
    happiness: happiness,
    energy: energy,

    //method to play the pet
    play(){
        this.energy -= 20;
        this.happiness += 10;
        return 'you played with ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.';
    },
    //method to feed the pet
    feed(){
        this.energy += 20;
        this.happiness += 20;
        return 'you fed ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}.';
    },

    //method to show pet status
    status(){
        console.log('Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}');
    },

    //method to rest the pet
    rest(){
        this.energy = 100;
        return '${this.name} is fully rested! Energy is now ${this.energy}.';
    }
};
    }

    //create muliple pets
    let pet1 = createPet('Chocolate', 'cat');
    let pet2 = createPet('Mid-knight', 'cat');
    let pet3 = createPet('Oreo', 'cat');

    //test Pet1
    pet1.status();
    console.log(pet1.play());
    pet1.status();
    console.log(pet1.feed());
    pet1.status();
    console.log(pet1.rest());
    pet1.status();

    //test Pet2
    pet2.status();
    console.log(pet2.play());
    pet2.status();
    console.log(pet2.feed());
    pet2.status();
    console.log(pet2.rest());
    pet2.status();

    //test Pet3
    pet3.status();
    console.log(pet3.play());
    pet3.status();
    console.log(pet3.feed());
    pet3.status();
    console.log(pet3.rest());
    pet3.status();