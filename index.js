// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
inquirer;
prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description about this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you want the user to know about how to use your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use for this project?',
        choices: ['MIT', 'Unlicensed', 'Apache-2.0', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'Would you like installation instructions for this project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What do you want the user to know about contributing to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the user test this project?',
    },
])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
