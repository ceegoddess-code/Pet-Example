//Day4
function createPet(name, species, energy, happiness) {
    const maxEnergy = 30 + 70;
    

    // return
    return {
        name,
        species,
        energy,
        happiness,
        maxEnergy,

        //feed increase happiness randomly
        feed()
        const happinessBoost = Math.floor(Math.random()) * 10 + 5;
        this.happinessBoost += happinessBoost;
        console.log('feeding ${this.name}! happiness is now ${this.happiness}.');
    },
    


    
}
 
const catKennel =[];
const catKennel = [];
const catKennel =[];

//create kennel push 
catKennel.push(creatPet("chocolate", "cat", 60,80));
catKennel.push(createPet("Mid-Knight", "cat", 50, 70));
catKennel.push(createPet("robbie", "cat", 40, 60));
catKennel.push(createPet("Oreo","cat", 30,50 ));
catKennel.push(createPet ("Phat momma", "cat", 45, 65));

// Feed all cats 
for (let i = 0; i < catKennel.length; i ++) {
    catKennel [i].feed();

}
console.log("final cat status:");
catKennel.forEach(pet => pet.status());
