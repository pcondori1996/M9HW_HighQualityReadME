const fs = require('fs');
const inquirer = require('inquirer');


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
            choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'BSD 2-Clause'],
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

// const lBadge = (Userinputs.Licenses) =>
// swith(Licenses) {
//  case 1:
//     return [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt);
// break;
// case 2:
//     return [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt);
// break;
// case 3:
//     return [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause);
// break;
//  case 4:
//     return = [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause);
// break;
//     Default: 'No license was chosen';
//     break;
// }

const generateAReadME = ({ Title, Motivation,Because, Problem, Learn, Description, Instructions, Contributing, Licenses, Tests, github, email }) =>
    `##${Title} 
${Licenses}

##Description
${Description}

- What was your motivation?
- ${Motivation}
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- ${Because}
- What problem does it solve?
- ${Problem}
- What did you learn?
- ${Learn}

##Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [License](#license)
-[Test](#Test)
-[Questions](#Questions)

##Installation
- ${Instructions}

##Example


  
![alt text](assets/images/screenshot.png)
    

##Contributing
-${Contributing}

##License
-${Licenses}

##Tests 
-${Tests}

#Questions 
If you have any questions you can message me on my Git: ${github} and you can also email me. ${email}

🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆`;

const init = () => {
    Userinputs()

    .then((inputs) => fs.writeFileSync('tests.txt', generateAReadME(inputs)))
    .then(() => console.log('Sucessfully wrote test.text'))
    .catch((err) => console.error(err));
}

init();
