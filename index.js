#!/usr/bin/env node

const inquirer = require('inquirer');
const cp = require('child_process');

console.log("Creating a new ReactJS-Vite-TailwindCSS project...");

let questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "What's the name of your project?",
        default: 'my-react-project'
    },
    {
        type: 'list',
        name: 'scriptType',
        message: "Do you want to use JavaScript or TypeScript?",
        choices: ['javascript', 'typescript'],
        default: 'typescript'
    },
    {
        type: 'confirm',
        name: 'useGit',
        message: 'Do you want to initialize a git repository?',
        default: true
    }
]

inquirer.prompt(questions).then(answers => {
    const { projectName, scriptType, useGit } = answers;

    let template = scriptType === 'javascript' ? 'react' : 'react-ts';
    let command = `npx create-vite ${projectName} --template ${template} && cd ${projectName} && npm install && npm install tailwindcss@latest postcss@latest autoprefixer@latest nodemon`;

    if (useGit) {
        command += ' && git init';
    }

    cp.execSync(command, { stdio: 'inherit' });
});