const fs = require('fs');
const inquirer = require('inquirer');
const generateAReadME = require('./generatedReadME');


//fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
// Ternary operator takes in a condition followed by a question mark (?)
// then an expression to execute if the condition is truthy followed by a colon (:)
// and finally the expression to execute if the condition is falsy.
// This operator is frequently used as a shortcut for the if statement.
//err ? console.error(err) : console.log('Commit logged!')
//);

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')


// fs.appendFile('log.text', `${process.argv[2]}\n`, (err) =>
//     err ? console.error('Error happened') : console.log('No errors happened')
//     );

const Userinputs = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Title of the file/project?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'Motivation',
        },
        {
            type: 'input',
            message: 'Why did you build this?',
            name: 'Because',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'Problem',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'Learn',
        },
        {
            type: 'input',
            message: 'A Description?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What are the instuctions?',
            name: 'Instructions',
        },
        {
            type: 'input',
            message: 'Who does credit go to?',
            name: 'Contributing',
        },
        {
            type: 'rawlist',
            message: 'Where there any licenses?',
            name: 'Licenses',
            choices: ['Apache 2.0', 'MIT', 'BSD 3-Clause', 'GPL 3'],
        },
        {
            type: 'input',
            message: 'Were any tests done?',
            name: 'Tests',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ])
};

function lBadge(Licenses) {
    switch (Licenses) {
        case 'MIT':
          return '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
          
        case 'Apache 2.0':
          return '![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    
        case 'GPL':
          return '![GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    
        case 'BSD 3-Clause':
          return '![BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    
        default:
          return '';
      }
}


// 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆`;

const init = () => {
    Userinputs()

        
        .then((inputs) => fs.writeFileSync('ReadME.md', generateAReadME(inputs)))
        .then(() => console.log('Sucessfully wrote test.text'))
        .catch((err) => console.error(err));
}

init();
