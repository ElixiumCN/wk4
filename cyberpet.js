// todo: doing now: classes & subclasses
import inquirer from 'inquirer';
import questions from './happy.js';

// const inquirer = require('inquirer');


// Variables

let petHappy = 100;
let petClean = 100;
let petHunger = 100;

// happy clean & hunger
// main Class

class cyberPet {
    constructor (name) {
    this.name = name
    this.happy = 100
    this.clean = 100
    this.hunger = 100;
    }

}

// const myFunctions = require('subHamster.cjs');

// const Hamster = require('./subHamster.js');



class Hamster extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
    }   

    plays() {
        this.happy += 20;
        console.log(`${response.getName}'s plays with the Hamster Wheel & is 20 points happier.`);
        return this;
    }

    cleans() {
        this.clean += 20;
        console.log(`${response.getName}'s is 20 points cleaner.`);
        return this;
    }


    eats() {
        this.hunger += 20;
        console.log(`You feed ${response.getName} Hamster Pellets. They are 20 points less hungry.`);
        return this;
    }

}


class Cat extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
}   

    plays() {
        this.happy += 20;
        console.log(`${response.getName}'s plays with a Ball of Wool & is 20 points happier.`);
        return this;
    }

    cleans() {
        this.happy -= 20;
        console.log(`${response.getName}'s doesn't like to be cleaned and is 20 points less happy.`);
        return this;
    }


    eats() {
        this.hunger += 20;
        console.log(`You feed ${response.getName} Cooked Beef. They are 20 points less hungry.`);
        return this;
    }



}

class Dog extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
    }
        plays() {
            this.happy += 20;
            console.log(`${response.getName} is playing Fetch with you & is 20 points happier.`);
            return this;
        }
    
        cleans() {
            this.clean += 20;
            console.log(`${response.getName}'s is 20 points cleaner.`);
            return this;
        }
    
    
        eats() {
            this.hunger += 20;
            console.log(`You feed ${response.getName} Purina Pro Plan. They are 20 points less hungry.`);
            return this;
        }
    
}   




const response = await inquirer.prompt(questions)
// let playersPet = new Hamster(response.getName)
// creating new object of cyberPet class with the name response of the questions.
    let pet 
    if(response.getType === 'Hamster'){
        console.log("hello");
        pet = new Hamster(response.getType)
    } else if(response.getType === 'Dog'){
        pet = new Dog(response.getType)
    } else if(response.getType === 'Cat'){
        pet = new Cat(response.getType)
    }


console.log(`You have chosen ${response.getType}`);
console.log(`You have named your pet ${response.getName}`);

// Functions

let clock1 = setInterval(depleteHappy, 500); //pet health decrement speed
let clock2 = setInterval(depleteClean, 600); //pet health decrement speed
let clock3 = setInterval(depleteHunger, 700); //pet health decrement speed


function depleteHappy(){
    if(pet.happy == 0){
    clearInterval(clock1);
    console.log("Your pet needs play");
    gameovercheck();
    }
    else{
        pet.happy--;
    printRealtimeStats();
    }
}

function depleteClean(){
    if(pet.clean == 0){
    clearInterval(clock2);
    console.log("Your pet needs cleaning");
    gameovercheck();
    }
    else{
    pet.clean--;
    printRealtimeStats();
    }
}

function depleteHunger(){
    if(pet.hunger == 0){
    clearInterval(clock3);
    console.log("Your pet needs feeding");
    gameovercheck();
    }
    else{
    pet.hunger--;
    printRealtimeStats();
    }
}

function gameovercheck(){
    if(pet.health==0&&gameover==0){
    alert("Game Over!");
    gameover++;
    console.log("Your pet needs to go to the hospital, you have failed as a Pet Owner.");
    }
    else {
        console.log("Your pet needs to go to the hospital, you have failed as a Pet Owner.");
    }
}

function printRealtimeStats(){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${response.getName} stats: Happy: [${pet.happy}%] Hunger: [${pet.hunger}%] Clean: [${pet.clean}%]`);
}

const questions2 = [
    {
        type: 'list',
        name: 'getAction',
        message: "Interact with your pet",
        choices: ['Play', 'Feed', 'Clean'],
    }
    
]

const actions = async () => {
    const doing = await inquirer.prompt([
        {
            type:'list',
            name: 'getAction',
            message: "What's your chosen action?",
            choices: ['Play', 'Feed', 'Clean', new inquirer.Separator()],  
        }
    ])
    .then((answers) => {
    if(answers.getAction === 'Feed') {
        pet.eats();
    } 
    else if(answers.getAction === 'Clean') {
        pet.cleans();    }   
    else if(answers.getAction === 'Play') {
        pet.plays();
        // pet.eats();
    } 
    actions()
})
}  
actions() 


