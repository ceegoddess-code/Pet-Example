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

//Day3 Pet Owner Form
console.log("day3: Pet Array assignment")

function createPet(name, species, energy, happiness) {
    const maxEnergy = Math.floor(Math.random() * 50) + 50;

    return {
        name,
        species,
        energy,
        happiness,
        maxEnergy,

        //Status
        status(){
            console.log('${this.name} ${this.species}:');
            console.log('Energy: ${this.energy}, Happines:${this.happiness}');

        },

        //Fedd increases energy 
        feed(){
            if (this.energy < this.maxEnergy){
                this.energy +=10;
                if (this.energy > this.maxEnergy) this.energy = this.maxEnergy = this.maxEnergy;
                console.log('${this.name} has been fed. Energy is now ${this.energy}.');
            } else {
                console.log('${this.name} is already full of energy!');

            }

            },

            //rest restored energy
            rest() {
                const restAmount = Math.floor(Math.random() * 20) + 10;
                this.energy += restAmount;
                if (this,energy > this.maxenergy) this.energy = this.maxEnergy;

                this.happiness -= 2;
                if (this.happiness <0) this.happiness = 0;

                console.log('${this.name} rested. Energy: ${this.energy}, happiness: ${this.happiness}');

            }
        
        };
    }

    // create Pets
    const pet1 = createPet("chocolate", "cat", 60,80);
    const pet2 = createPet("Mid-Knight", "cat", 50, 70);
    const pet3  = createPet("robbie", "cat", 40, 60);
    const pet4 = createPet("oreo", "cat", 30, 50);
    const pet5 = createPet("phat momma", "cat", 45,65 );

    const kennel =[];

    kennel.push(pet1);
    kennel.push(pet2);
    kennel.push(pet3);
    kennel.push(pet4);
    

    kennel[kennel.lenght] = pet5;

    console.table(kennel);

    kennel.forEach(pet=> pet.rest());

    console.table(kennel);



}




    
