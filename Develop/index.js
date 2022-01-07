// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



const fs = require('fs');

// const generatePage = require('./src/readme-template.js');


//question prompt function-----------
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Enter a Title'
        }
    ]);
};
promptUser().then(answers => console.log(answers));
