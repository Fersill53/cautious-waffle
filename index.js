const inquirer = require('inquirer');

const fs = require('fs-extra');

const generateHTML = (data) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${data.title}</title>
      </head>
      <body>
        <h1>${data.name}</h1>
        <h2>${data.title}</h2>
        <h2>${data.description}</h2>
        <h2>${data.installation}</h2>
        <h2>${data.usage}</h2>
        <h2>${data.contribution}</h2>
        <h2>${data.github}</h2>
      </body>
    </html>
  `;

  return htmlContent;
};

const promptUser = async() => {
    try {
        const answers = await inquirer.prompt ([
    
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title',

        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter project description',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Enter steps for installation',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Describe what project will be used for',
        },

        {
            type:'input',
            name: 'contribution',
            message: 'Enter contribution info',
        },

        {
            type: 'input',
            name: 'github',
            message: 'For questions (github)'
        },

        {
            type: 'list',
            name: 'license',
            message: 'Type of license used',
            choices: ['None', 'ISC', 'MIT'],
        },
    ]);


        console.log(answers);
        return answers;}

        catch (error) {
            console.log(error);
        

        //function runQuery() {
        //return inquirer.prompt(questions)
        //.then((answers) =>{
            //console.log(answers)
           // return answers
        }
        };

        promptUser();