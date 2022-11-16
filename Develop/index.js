// TODO: Include packages needed for this application
const inquirer = require("inquirer")
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log (answers.title)
        console.log (answers.description)
      })
}

// Function call to initialize app
init();
