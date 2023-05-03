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
    "what are you aiming to add to yo0ur project in the future?",
    "Was there anything you found challenging through-out your project build?",
    "What programs did you use while creating this project?",
    "What are the license and terms of use for this project?",
    "How do i report bugs/issues with this project?"
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
              name: 'Reason',
         },
         {
            type: 'input',
            message: questions[1],
             name: 'Title',
        },
        {
            type: 'input',
            message: questions[2],
             name: 'Contributors',
        },
        {
            type: 'input',
            message: questions[3],
             name: 'Instructions',
        },
        {
            type: 'input',
            message: questions[4],
             name: 'Purpose',
        },
        {
            type: 'input',
            message: questions[5],
             name: 'Learned',
        },
        {
            type: 'input',
            message: questions[6],
             name: 'Contact',
        },
        {
            type: 'input',
            message: questions[7],
             name: 'Upcoming',
        },
        {
            type: 'input',
            message: questions[8],
             name: 'Challenges',
        },
        {
            type: 'input',
            message: questions[9],
             name: 'Programs',
        },
        {
            type: 'input',
            message: questions[10],
             name: 'License',
        },
        {
            type: 'input',
            message: questions[11],
             name: 'Bugs',
        },
        {
            type: "checkbox",
            name: "licenceChoice",
            message: "Select license.",
            choices: [
                {name: "Apache License", value: "https://www.apache.org/licenses/LICENSE-2.0"},
                {name: "Boost software license 1.0", value: "https://www.boost.org/LICENSE_1_0.txt)"},
                {name: "BSD 3-Clause License", value: "https://opensource.org/license/BSD-3-clause/"},
                {name: "none", value: " "},]
            
            }
            ])

.then((answers) => {
    const {Reason, Title, Contributors, Instructions, Purpose, Learned, Contact, Upcoming, Challenges, Programs, License, Bugs, licenseChoice} = answers;

    const layout = `
# ${Title}

${licenseChoice}

## Reason
${Reason}

##Title
${Title}

##Contributors
${Contributors}

##Instructions
${Instructions}

##Purpose
${Purpose}

##Learned
${Learned}

##Contact
<a href='${email}' target='_blank'>${email}</a> <a href='${github}' target='_blank'>Github</a>

##Upcoming
${Upcoming}

##Challenges
${Challenges}

##Programs
${Programs}

##License
${License}

##Bugs
${Bugs}
`;
})

writeToFile('README.md', layout)

    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
