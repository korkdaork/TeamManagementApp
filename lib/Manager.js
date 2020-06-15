// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//Pull the basic info from Employee
const Employee = require("./Employee");

class Manager extends Employee {

    //constructore function that shows requirements
    constructor(name, id, email, officeNumber) {

        //super calls for constructor in parent (employee)
        super(name, id, email);
        this.officeNumber = officeNumber;

    };

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

};

module.exports = Manager;