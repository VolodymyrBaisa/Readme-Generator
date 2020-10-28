# Readme Generator

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/VolodymyrBaisa/Readme-Generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/VolodymyrBaisa/Readme-Generator?style=flat&logo=appveyor)

Check out the badges hosted by [shields.io](https://shields.io/).


## Description 

*The what, why, and how:* 

Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation

*Steps required to install project and how to get the development environment running:*

To generate your own README, first run npm install in order to install the following npm package dependencies as specified in the package.json. The application itself can be invoked with node index.js.

## Usage 

*Instructions and examples for use:*

When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project. The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo. Finally, fs.writeFile is used to generate your project's README.md file.

## License

GNU LGPLv3

---

## Questions?

![Developer Profile Picture](https://avatars2.githubusercontent.com/u/13339113?v=4) 

For any questions, please contact me with the information below:

GitHub: [@VolodymyrBaisa](https://api.github.com/users/VolodymyrBaisa)
