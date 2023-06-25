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

