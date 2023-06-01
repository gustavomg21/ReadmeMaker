// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'Please provide usage instructions for your project.',
    },
    {
        type: 'input',
        name: 'contributionInstructions',
        message: 'Please provide contribution instructions for your project.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide test instructions for your project.',
    },  
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Please provide an email address for questions about your project.',
    },
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {   
        type: 'confirm',
        name: 'confirmLiveLink',
        message: 'Would you like to include a link to your live site?',
        default: true,
    },
    {
        type: 'input',
        name: 'liveSiteLink',
        message: 'Please provide a link to your live site.',
        when: ({ confirmLiveLink }) => confirmLiveLink,
    },
    {
        type: 'input',
        name: 'siteDemoLink',
        message: 'Please provide a link to a demo of your site.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
