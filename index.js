// const inquirer = require('inquirer');

// const fs = require('fs-extra');

// const generateHTML = (data) => {
//     const htmlContent = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>${data.title}</title>
//       </head>
//       <body>
//         <h1>${data.name}</h1>
//         <h2>${data.title}</h2>
//         <h2>${data.description}</h2>
//         <h2>${data.installation}</h2>
//         <h2>${data.usage}</h2>
//         <h2>${data.contribution}</h2>
//         <h2>${data.github}</h2>
//       </body>
//     </html>
//   `;

//   return htmlContent;
// };

// const promptUser = async() => {
//     try {
//         const answers = await inquirer.prompt ([
    
//         {
//             type: 'input',
//             name: 'title',
//             message: 'Enter project title',

//         },

//         {
//             type: 'input',
//             name: 'description',
//             message: 'Enter project description',
//         },

//         {
//             type: 'input',
//             name: 'installation',
//             message: 'Enter steps for installation',
//         },

//         {
//             type: 'input',
//             name: 'usage',
//             message: 'Describe what project will be used for',
//         },

//         {
//             type:'input',
//             name: 'contribution',
//             message: 'Enter contribution info',
//         },

//         {
//             type: 'input',
//             name: 'github',
//             message: 'For questions (github)'
//         },

//         {
//             type: 'list',
//             name: 'license',
//             message: 'Type of license used',
//             choices: ['None', 'ISC', 'MIT'],
//         },
//     ]);


//         console.log(answers);
//         return answers;}

//         catch (error) {
//             console.log(error);
        
//         }
//         };

//         promptUser();

const fs = require('fs');
const inquirer = require('inquirer');

// Prompt questions using Inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information: ',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Enter the project license: ',
      choices: ['None', 'ISC', 'MIT']
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: ',
    },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file successfully generated!');
      }
    });
  });

// Function to generate the README content
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For any questions or inquiries, please contact me:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
`;
}