// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Project Title: ',
    },
    {
        name: 'username',
        message: 'GitHub Username: ',
    },
    {
        name: 'description',
        message: 'Description: ',
    },
    {
        name: 'installation',
        message: 'Installation Notes: ',
    },
    {
        name: 'link',
        message: 'Link: ',
    },
    {
        name: 'usage',
        message: 'Instructions and examples for use: ',
    },
    {
        type: 'list',
        name: 'hasScreenshot',
        message: 'Do you have a screenshot saved in the following location: assets/images/screenshot.png?',
        choices: ['Yes', 'No'],
    },
    {
        name: 'credits',
        message: 'List collaborators, GitHub profiles, thirdy-party assets, tutorials: ',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'License: ',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3'],
    },
    {
        name: 'features',
        message: 'If feature rich, list them here: ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => err ? console.info(err) : console.info('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.info('Answer: ', answers);
        writeToFile('./dist/README_MarkDown.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
