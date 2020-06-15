const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//added ino order to create index.html
const OUTPUT_DIR2 = path.resolve(__dirname, "");
const outputPath2 = path.join(OUTPUT_DIR2, "index.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


//================================================ Code Starts Here ==============================================

//==================================== Prompts to get information in order to fill team =======================
//create the team members array
const teamMembers = [];

//generate the html
const generateHTML = () => {
    fs.writeFileSync(outputPath, render(teamMembers));
    fs.writeFileSync(outputPath2, render(teamMembers));
};

//constructor functin taht allows for input and selection of team memembers by user.
const createTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            choices: ["Engineer", "Intern", "Done"],
            message: "Select an employee in order to add them to the team."
        }

        //same as the below const manger = new Manager... except utilizing object destructuring in order to create cleaner code - thanks Justin for the explanation.
        //enter user choice to extract out user choice -
    ]).then(({ userChoice }) => {

        //switch statement instead of the if statement - both are functional
        switch (userChoice) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                generateHTML();
        }

    });
};

//-----------------------------------------------------------------MANAGER------------------------------------------------------
const createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
    ]).then(({ managerName, managerId, managerEmail, officeNumber }) => {

        //pushign information based on responses utilizing object destructuring - thanks Justin for your explanation and help
        const manager = new Manager(managerName, managerId, managerEmail, officeNumber);

        teamMembers.push(manager);

        createTeam();

        //same as the above const manger = new Manager...
        //this is left here for future reference pertaining to cleaner code
        //option 1
        // .then((response) => {
        // const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
        //option 2 - more efficient
        //.then(({ managerName, managerId, managerEmail, officeNumber }) => { const manager = new Manager(managerName, managerId, managerEmail, officeNumber); teamMembers.push(manager);})
        //the above replaces the response after the .then() in order to call on those elements.

    });

};

//-----------------------------------------------------------------ENGINEER---------------------------------------------------
const createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github name?"
        },
    ]).then(({ engineerName, engineerId, engineerEmail, github }) => {
        //pushign information based on responses.
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, github);

        teamMembers.push(engineer);

        createTeam();

    });
};

//------------------------------------------------------------INTERN--------------------------------------------------------
const createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the school the intern is attending?"
        },
    ]).then(({ internName, internId, internEmail, school }) => {
        //pushign information based on responses.
        const intern = new Intern(internName, internId, internEmail, school);

        teamMembers.push(intern);

        createTeam();

    });
};

const doInit = () => {

    createManager();

};

doInit()

