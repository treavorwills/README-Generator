// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Title: ',
    },
    {
        name: 'description',
        message: 'Description: ',
    },
    {
        name: 'link',
        message: 'Link: ',
    },
    {
        type: 'list',
        name: 'hasScreenshot',
        message: 'Do you have a screenshot?',
        choices: ['Yes', 'No'],
    },
    {
        type: 'list',
        name: 'hasAdditionalContent',
        message: 'Additional Content?',
        choices: ['Yes', 'No'],
    },
    {
        name: 'additionalContent',
        message: 'The additional content: ',
        when: (answers) => {
            if (answers.hasAdditionalContent === 'Yes') {
                return true;
            }
        },
    },
    // {
    //     type: 'checkbox',
    //     name: 'sections',
    //     message: `Additional README sections: `,
    //     choices: [
    //         'Table of Contents', 'Installation', 'Usage', 'Credits', 'Licesnse', 'Badges', 'Features', 'How to Contribute', 'Tests',
    //     ],
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
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
