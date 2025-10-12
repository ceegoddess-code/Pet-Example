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
