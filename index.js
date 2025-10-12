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




    
