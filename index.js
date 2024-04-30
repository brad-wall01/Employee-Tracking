const inquirer = require("inquierer")


inquirer
    .prompt([
        {
            type: `input`,
            message: `Whats youre favorite ice cream flavor?`
        }
    ])