// TODO: Write code to define and export the Employee class

//Create a Employee class that covers all the positions in order to avoid recreating this for each class
class Employee {

    //cunstructor functions that sets name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
};

module.exports = Employee;