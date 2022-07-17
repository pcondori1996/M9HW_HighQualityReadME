

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


const generateAReadME = (inputs) => {
lBadge(inputs.Licenses);

return `    
# ${inputs.Title} 
${lBadge(inputs.Licenses)}

## Description
${inputs.Description}

### What was your motivation?
- ${inputs.Motivation}
### Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- ${inputs.Because}
### What problem does it solve?
- ${inputs.Problem}
### What did you learn?
- ${inputs.Learn}

## Table of Contents 

-[Installation](#installation)
-[Usage/Instructions](#Usage/Instructions)
-[Contributing](#Contributing)
-[License](#license)
-[Test](#Test)
-[Questions](#Questions)

## Installation
- ${inputs.Instructions}

## Usage/Instructions

## Example
![ReadMe Example](./imgs/ReadME_Example.png)


## Contributing
-${inputs.Contributing}

## License
-The licese used in this project was:${inputs.Licenses}
-${lBadge(inputs.Licenses)}

##Tests 
-${inputs.Tests}

#Questions 
If you have any questions about the repo, open an issue or contact me directly at  ${inputs.email}. You can find more of my work at [pcondori](${inputs.github})

🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆`
};
module.exports = generateAReadME;
