#! /usr/bin/env node

//imported Inquirer module, which provides cli interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence: "
    }
]);

const words = answers.Sentence.trim().split(" ");

console.log(words);

console.log(chalk.bgGreen("The total Words" + words.length));