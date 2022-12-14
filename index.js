// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your ReadMe?"
    },
    {
        type: "input",
        name: "description",
        message: "what is the description of your ReadMe?"
    },
    {
        type: "input",
        name: "installation",
        message: "how do you install this application?"
    },
    {
        type: "input",
        name: "usage",
        message: "how do we use this application?"
    },
    {
        type: "list",
        name: "license",
        message: "what license would you like to use?",
        choices: ["Apache", "MIT"]
    },
    {
        type: "input",
        name: "contributing",
        message: "what are the contribution guide lines?"
    },
    {
        type: "input",
        name: "tests",
        message: "what are some examples of the test and how do use it?"
    },
    {
        type: "input",
        name: "questions",
        message: "what is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('succsesfully created a ReadMe file!');
      });
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        var readmeData = generateMarkdown(answers)
        writeToFile('README.md', readmeData)
    })
}

// Function call to initialize app
init();
