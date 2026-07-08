class Animal{
    species: string;
    sound: string;
    

    constructor(species: string, sound:string){
        this.species = species;
        this.sound = sound;
    }

    makeSound():void{
        console.log(`Species: ${this.species}, Sound of ${this.species} is ${this.sound}`);
    }
}
const Animal1 = new Animal("Cat","Meoww");
Animal1.makeSound();
const Animal2 = new Animal("Dog","Wooff")
Animal2.makeSound();