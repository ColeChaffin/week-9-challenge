// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    "Whats the reason you created this project",
    "What is the title?",
    "Who was involved in the creation of this project?",
    "Are there any instructions to install/use the application",
    "What purpose does this project serve?",
    "Is there anything new you learned while designing and building your application?",
    "What is your conatact information?",
    ""


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
             type: 'input',
             message: questions[0],
              name: 'motivation',
         },

])
}

writeToFile('README.md', layout);
    })
    .catch((error) => console.error(error));
)

// Function call to initialize app
init();
