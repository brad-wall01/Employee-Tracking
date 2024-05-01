const inquirer = require("inquirer")

const mainPrompt = () => {
    inquirer
    .prompt([
        {
            type: `list`,
            name: `action`,
            message: `What would you like to do?`,
            choices: [
                `View All Employees`,
                `Add Employee`,
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }
    ])
    .then((data) => {
        mainLogic(data)
    })
}

mainPrompt()

function loopPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'userAwnser',
                message: 'Whould you like to preform another action?',
                choices: [
                    'Yes', 
                    'No',
                ]
            }
        ])
        .then((data) => {
            if(data.userAwnser === 'Yes'){
                mainPrompt()
            }else{
                console.log('Thanks for using the Employee Database!')
                console.log('Application has closed, press CTL + C to continue using terminal')

            }
        });
}

function mainLogic(data) {

    employees_db.connect()

    if (data.action === `View All Employees`) {
        employees_db.query("SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS title, r.salary AS salary,  d.name AS department, m.last_name ||', '|| m.first_name manager FROM employee e INNER JOIN employee m ON m.id = e.manager_id INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id", (err, {rows}) => {
            if (err) {
                console.log(err);
            }
            console.table(rows);
            loopPrompt()
        })
    }
}