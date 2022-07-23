const manager = require('./lib/Manager')
const intern = require('./lib/Intern')
const engineer = require('./lib/Engineer')
const inquirer = require('inquirer')
const teamprofile = require('./src/createHTML')
const fs = require('fs')

const team = []
managerQuestions()
//function for the manager questions
function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Managername',
            message: 'What is the name of the manager?'

        },
        {
            type: 'input',
            name: 'Managerid',
            message: 'What is the managers ID?'
        },
        {
            type: 'input',
            name: 'Manageremail',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers office number?'
        },
    ])
        .then((data) => {
            const managerinfo = new manager(data.Managername, data.Managerid, data.Manageremail, data.office)
            team.push(managerinfo)
            newteamMember();
        });
}
//function to pick you wnat to add another employee
function newteamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'who',
            message: 'Which employee would you like to add?',
            choices: ['Intern', 'Engineer', 'No more employees']
        },
    ])
        .then((data) => {
            if (data.who === 'Intern') {
                internQuestions();
            } else if (data.who === 'Engineer') {
                engineerQuestions()
            } else { createIndex(team) }
        });
}
//function for the intern questions
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Internname',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'Internid',
            message: 'What is the Interns ID number?'
        },
        {
            type: 'input',
            name: 'Internemail',
            message: 'What is the Interns email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the Intern from?'
        }
    ])
        .then((data) => {
            const interninfo = new intern(data.Internname, data.Internid, data.Internemail, data.school);
            team.push(interninfo)
            newteamMember()
        });
}
//function for the engineer questions
function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'What is the Engineers ID number?'
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'What is the Engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers GitHub username?'
        },
    ])
        .then((data) => {
            const engineerinfo = new engineer(data.engineername, data.engineerid, data.engineeremail, data.github)
            team.push(engineerinfo);
            newteamMember()
        })
}



// function to create the HTML file
function createIndex(data) {
    fs.writeFile('./dist/HTMLfile.html', teamprofile(data), (err) => {
        if (err) throw err
    })
}



