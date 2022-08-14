// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'username',
        message: 'Github username: ',
    },
    {
        name: 'title',
        message: 'Project title: ',
    },
    {
        name: 'description',
        message: 'Description: ',
    },
    {
        name: 'link',
        message: 'Link: ',
        default: 'None',
    },
    {
        type: 'list',
        name: 'hasScreenshot',
        message: 'Do you have a screenshot?',
        choices: ['Yes', 'No'],
    },
    {
        name: 'screenshotDescription',
        message: 'brief descrition of the screenshot',
        when: (answers) => {
            if (answers.hasScreenshot === 'Yes') return true;
        },
    },
    {
        type: 'checkbox',
        name: 'additionalContent',
        message: `Additional content: `,
        choices: [
            'License', 'Badges',
        ],
    },
    {
        name: 'license',
        message: 'License: ',
        when: (answers) => (answers.additionalContent.includes('License'))
    },
    {
        name: 'badge',
        message: 'badge: ',
        when: (answers) => (answers.additionalContent.includes('Badge'))
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
        writeToFile('./utils/generatedMarkDown.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
