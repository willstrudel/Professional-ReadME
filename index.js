// TODO: Include packages needed for this application
const inputREADME = require('../utility/utility');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([
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

]).then((response) => {fs.writeFile("SampleReadMe.md",inputREADME(response) , function (err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Your ReadMe has been saved!');
    }
});}).catch(err => console.log(err)); 
