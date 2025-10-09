pet = {
    name: "Chocolate", // Pet's name
    type: "Cat",    // Pet's type
    happiness: 100, // Pet's happiness level
    
    play: function() {
        this.happiness += 10; // Increase happiness by 10
        return 'You played with ${this.name} ! Happiness is now ${this.happiness}.';

},

    feed: function() {
        this.happiness += 20; // Increase happiness by 20
        return 'You fed ${this.name} ! Happiness is now ${this.happiness}.';

    },
    // Method to display the pet's current status
    status: function() {
        console.log ('Pet Nmae: ${this.name}, species: ${this.type}, Happiness: ${this.happiness}');
    },
    // Method to rename the pet
    rename: function(newName) {
        this.name = newName;
        return 'Your pet has been renamed to ${this.name}.';
        console.log(pet.rename("Chocolate"));
        pet.status();

    }
};



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

    
