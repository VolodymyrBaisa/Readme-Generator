const chalk = require("chalk");
const inquirer = require("inquirer");

const errorStyle = chalk.bold.red;
const successStyle = chalk.bold.green;
const infoStyle = chalk.bold.blue;

module.exports = class Print {
    err(msg) {
        console.log(errorStyle(msg.stack));
    }

    success(msg) {
        console.log(successStyle(msg));
    }

    info(msg) {
        console.log(infoStyle(msg));
    }

    async questions(questions) {
        return await inquirer.prompt(questions);
    }
};
