// Node API
// const inquirer = require('inquirer');

import inquirer from 'inquirer';

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, e => {
//     if (e) throw e;

//     console.log('Portfolio complete! Checkout index.html to see the output!');
// });

const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
=================
Add a New Project
=================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);

        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });
}

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:'
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => {
                if (confirmAbout) { return true }
                else { return false }
            }
        }
    ]);
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });