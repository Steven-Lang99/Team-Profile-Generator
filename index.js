const manager = require('./lib/Manager')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer')
const inquirer = require('inquirer')
const fs = require('fs')

const team = []

function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'

        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers office number?'
        },
    ])
        .then((data) => {
            const managerinfo = new manager(data.name, data.id, data.email, data.office)
            team.push(managerinfo)
            newteamMember();
        });
}

function newteamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'who',
            message: 'Which employee would you like to add?',
            choices: ['Intern', 'Engineer']
        },
    ])
        .then((data) => {
            if (data.who === 'Intern') {
                internQuestions();
            } else (engineerQuestions())
        });
}

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the Intern from?'
        }
    ])
        .then((data) => {
            const interninfo = new intern(data.name, data.id, data.email, data.school);
            team.push(interninfo)
            newteamMember();
        });
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers GitHub username?'
        },
    ])
        .then((data) => {
            const engineerinfo = new engineer(data.name, data.id, data.email, data.github)
            team.push(engineerinfo);
            newteamMember();
        })
}