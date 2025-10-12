//Day5
function createPet(name, type) {
    return {
        name: name,
        type: type,
        happiness: 50,
        // Bonus: Random initial energy between 0 and 50
        energy: Math.floor(Math.random() * 51),

        // Method to play with the pet
        play: function () {
            this.happiness += 10;
            this.energy -= 15;
            return `You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`;
        },

        // Method to feed the pet
        feed: function () {
            this.energy += 20;
            return `${this.name} has been fed. Energy is now ${this.energy}.`;
        },

        // Method to log the pet's current status
        status: function () {
            console.log(`${this.name} the ${this.type} → Happiness: ${this.happiness}, Energy: ${this.energy}`);
        }
    };
}

// Create an array of pets (kennel)
const kennel = [
    createPet("Fluffy", "dog"),
    createPet("Whiskers", "cat"),
    createPet("Bubbles", "fish")
];

// Play with pets: first pet 3 times, second pet once, third pet twice
for (let i = 0; i < 3; i++) {
    console.log(kennel[0].play());
}
console.log(kennel[1].play());
for (let i = 0; i < 2; i++) {
    console.log(kennel[2].play());
}

// Log status after playing
console.log("\nStatus after playing:");
kennel.forEach(pet => pet.status()
// Conditional feeding: only feed pets with energy below 30
console.log("\nFeeding pets with low energy:");
for (let i = 0; i < kennel.length; i++) {
    if (kennel[i].energy < 30) {
        console.log(kennel[i].feed());
    }
}

// Log status after feeding
console.log("\nStatus after feeding:");
kennel.forEach(pet => pet.status());
