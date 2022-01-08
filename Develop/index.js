// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        messsage:'Enter a title',
        validate:  titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("Please enter a title (Required)");
                return false;
            }
        }
    },
    {
        type:'list',
        name:'license',
        message:'What license is used? (Select multiple)',
        choices:['None', 'GNU', 'Apache', 'MIT'],
        validate:licenseInput = () => {
            if (licenseInput) {
                return true; 
            } else {
                console.log('Please make a selection')
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Write a description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please write a description');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'installation',
        message:'How do you install this project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please include installation instructions");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'What is the use of this project?',
        validate: usageInput => {
            if (usageInput) {
            return true;
        } else {
            console.log('Please include a usa for this project');
            return false;
        }
      }
    },
    {
        type:'input',
        name:'contribution',
        message:'What guidlines should be followed in order to contribute',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please include contribution guidlines');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'test',
        message:'How do you test this project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please include a method for testing');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'askMe',
        message:'How can others reach you via GitHub?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please include a links');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:'What is a good email address to reach you?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please include an email address');
                return false;
            }
        }
    }

];



// TODO: Create a function to write README file
const writeToFile = fileContent => {
      return new Promise((resolve, reject) => {
          fs.writeFile('./Develop/README.md', fileContent, err => {
              if (err) {
                  reject(err);
                  return;
              }
              resolve({
                  ok:true,
                  message:'File created'
              });
          });
      });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        consol.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();





// const generatePage = require('./src/readme-template.js');


module.exports = question