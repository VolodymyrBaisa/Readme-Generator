const chalk = require("chalk");

const errorStyle = chalk.bold.red;
const successStyle = chalk.bold.green;
const infoStyle = chalk.bgMagenta.bold.cyan;

module.exports = class Print {
    err(msg) {
        console.log(errorStyle(msg));
    }

    success(msg) {
        console.log(successStyle(msg));
    }
};
