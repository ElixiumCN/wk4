
const actions = async () => {
    const doing = await inquirer.prompt([
        {
            type:'list',
            name: 'getAction',
            message: "What's your chosen action?",
            choices: ['Play', 'Feed', 'Clean'],  
        }
    ])

    if(actions.getAction === 'Feed') {
        addHungerPoints();
    } 
    else if(actions.getAction === 'Clean') {
        addCleanPoints();    }   
    else if(actions.getAction === 'Play') {
        addHappyPoints();
    } 
    actions()
}  
actions()