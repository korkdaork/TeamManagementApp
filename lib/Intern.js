// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {

    //constructore function that shows requirements
    constructor(name, id, email, school) {

        //super calls for constructor in parent (employee)
        super(name, id, email);
        this.school = school;

    };

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

};

module.exports = Intern;