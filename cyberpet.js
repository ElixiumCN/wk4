// todo: doing now: classes & subclasses
import inquirer from 'inquirer';


// Variables
let petHappy = 100;
let petClean = 100;
let petHunger = 100;

// 0 = hates [subtract 10 points], 
// 1 = likes [add 10 points], 
// 2 = likes a lot[add 20 points]
// 3 = no stats modified


function addHappyPoints() {
    if(petHappy<=99&&petHappy!=0){
        petHappy += 20;
        console.log(`${response.getName} is 20 points happier.`);
    }
    else if(petHappy==0){
        petHappy+=0;
        console.log(`${response.getName} can't be happier.`);
    }
}

function addCleanPoints() {
    if(petClean<=99&&petClean!=0){
        petClean += 20;
        console.log(`${response.getName} is 20 points cleaner.`);
    }
    else if(petClean==0){
        petClean+=0;
        console.log(`${response.getName} is already completely clean.`);
    }
}

function addHungerPoints() {
    if(petHunger<=99&&petHunger!=0){
        petHunger += 20;
        console.log(`${response.getName} is 20 points less hungry.`);
    }
    else if(petHunger==0){
        petHunger+=0;
        console.log(`${response.getName} can't eat anymore.`);
    }
}

// main Class
class cyberPet {
    constructor (name) {
    this.name = name
    this.happy = 100
    this.clean = 100
    this.hunger = 100


    //
}
}

// const myFunctions = require('subHamster.cjs');
// import Hamster from 'subHamster.js';


// Subclass
class Hamster extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
        this.eatMeat = 0
        this.eatDry = 1
        this.playBone = 0
        this.playBall = 0
        this.playWool = 3
        this.playCleans = 0
        this.cleanPoints = 1
        this.cleanHappyPoints = 1
}   
}

class Cat extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
        this.eatMeat = 0
        this.eatDry = 1
        this.playBone = 0
        this.playBall = 0
        this.playWool = 3
        this.playCleans = 0
        this.cleanPoints = 1
        this.cleanHappyPoints = 1
}   
}

class Dog extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
        this.eatMeat = 0
        this.eatDry = 1
        this.playBone = 0
        this.playBall = 0
        this.playWool = 3
        this.playCleans = 0
        this.cleanPoints = 1
        this.cleanHappyPoints = 1
}   
}

const questions = [
    {
        type: 'list',
        name: 'getType',
        message: "Choose the type of pet that you would like",
        choices: ['Hamster', 'Dog', 'Cat'],
// choices "array" within the inquirer questions rather than an external array, I don't know how to use an external array/list with inquirer
    },
    {
        type: 'input',
        name: 'getName', // the name of the var holding the user input data.
        message: "Give your pet a name"
    }
    
]

const response = await inquirer.prompt(questions)
// let playersPet = new Hamster(response.getName)
// creating new object of cyberPet class with the name response of the questions.

let pet 
if(response.getType === 'Hamster'){
    pet = new Hamster(response.getType)
} else if(response.getType === 'Dog'){
    pet = new Dog(response.getType)
} else if(response.getType === 'Cat'){
    pet = new Cat(response.getType)
}

// let playerPetChoice = `${response.getType}` // create var holding the player chosen subclass (animal type)
// const theCyberPet = new playerPetChoice; // spawns the player chosen subclass (animal type)
console.log(`You have chosen ${response.getType}`);
console.log(`You have named your pet ${response.getName}`);

// Functions

let clock1 = setInterval(depleteHappy, 500); //pet health decrement speed
let clock2 = setInterval(depleteClean, 600); //pet health decrement speed
let clock3 = setInterval(depleteHunger, 700); //pet health decrement speed


function depleteHappy(){
    if(petHappy == 0){
    clearInterval(clock1);
    console.log("Your pet needs play");
    gameovercheck();
    }
    else{
    petHappy--;
    printRealtimeStats();
    }
}

function depleteClean(){
    if(petClean == 0){
    clearInterval(clock2);
    console.log("Your pet needs cleaning");
    gameovercheck();
    }
    else{
    petClean--;
    printRealtimeStats();
    }
}

function depleteHunger(){
    if(petHunger == 0){
    clearInterval(clock3);
    console.log("Your pet needs feeding");
    gameovercheck();
    }
    else{
    petHunger--;
    printRealtimeStats();
    }
}

function gameovercheck(){
    if(petHealth==0&&gameover==0){
    alert("Game Over!");
    gameover++;
    console.log("Something");
    }
    else {
        console.log("Something");
    }
}



function printRealtimeStats(){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${response.getName} stats: Happy: ${petHappy}% Clean: ${petClean}% Hunger: ${petHunger}%`);
}

const questions2 = [
    {
        type: 'list',
        name: 'getAction',
        message: "Interact with your pet",
        choices: ['Play', 'Feed', 'Clean'],
    }
    
]

// inquirer
// .prompt([
// {
//     type:'list',
//     name: 'getAction',
//     message: "What's your chosen action?",
//     choices: ['Play', 'Feed', 'Clean'],

// },
// ])
// .then((answers) => {
//     console.log(`Your chosen action is ${answers.getAction}`);
//     if(`${answers.getAction}` === 'Feed') {
//         addHungerPoints();
//     } 
//     else if(`${answers.getAction}` === 'Clean') {
//         addCleanPoints();    }   
//     else if(`${answers.getAction}` === 'Play') {
//         addHappyPoints();
//     }   
// });

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
        addHungerPoints();
    } 
    else if(answers.getAction === 'Clean') {
        addCleanPoints();    }   
    else if(answers.getAction === 'Play') {
        addHappyPoints();
    } 
    actions()
})
}  
actions() 
