const inquirer = require("inquirer");

inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is you name'
    }])
    .then(answers => console.log(answers));

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generateHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to se the output!')
// });