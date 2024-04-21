#! /usr/bin/env node
//imported Inquirer module, which provides cli interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";
//Declared a variable assigned it an inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Text: "
    },
]);
const words = answers.Sentence.trim().split(" ");
//prints the array of words to console
console.log(words);
//prints the 
console.log(chalk.bgBlue("Total Words in your text are " + words.length));
