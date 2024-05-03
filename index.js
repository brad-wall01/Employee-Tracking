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
            ],
            name: `selections`,
        },
    ])
    .then((data) => {
        let tracker
        if (data.selections==='View All Employees:'){
            tracker = employeeTable()
        }else if (data.selections==='Add Employee:'){
            tracker = addEmployee()
        } else if (data.selections==='Update Employee Role:'){
            tracker = updateEmployeeRole()
        } else if (data.selections==='View All Roles:'){
            tracker = viewRole()
        } else if (data.selections==='Add Role:'){
            tracker = addRole()
        } else if (data.selections==='View All Departments:'){
            tracker = departmentTable()
        } else if (data.selections==='Add Department:'){
            tracker = addDepartment()
        } else if (data.selections==='Quit'){
            return console.log('Thank you for playing.')
        }  
    })
};
mainPrompt()

function addEmployee() {
    inquirer
    .prompt([
        {
            type:`input`,
            message:`Employees First Name`,
            name:`firstName`
        },
        {
            type:`input`,
            message:`Employees Last Name`,
            name:`lastName`
        },
        {
            type:`list`,
            message:`What is the role of the employee?`,
            choices: [
                `Forklift Operator`,
                `Stocking Associate`,
                `Floor Manager`,
                `Salesman`,
                `Sales Manager`
            ],
            name: `employeeRole`,
        },
    ])
    .then ((data) => {
        company_db.query(`INSERT INTO employee(first_name, last_name, role_id)VALUES($1, $2, $3)`, [data.firstName, data.lastName, `1`])
        mainPrompt()
    })
}



