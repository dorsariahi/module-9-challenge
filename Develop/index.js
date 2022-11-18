// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "what is the title of your ReadMe?"
    },
    {
        type: "input",
        name: "Description",
        message: "what is the description of your ReadMe?"
    },
    {
        type: "input",
        name: "Contents",
        message: ""
    },
    {
        type: "input",
        name: "Installation",
        message: ""
    },
    {
        type: "input",
        name: "Usage",
        message: ""
    },
    {
        type: "input",
        name: "License",
        message: ""
    },
    {
        type: "input",
        name: "Contributing",
        message: ""
    },
    {
        type: "input",
        name: "Tests",
        message: ""
    },
    {
        type: "input",
        name: "Questions",
        message: ""
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
       
      })
}

// Function call to initialize app
init();
