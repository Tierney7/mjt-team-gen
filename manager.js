const Employee = require('./Employee')

class manager extends Employee {
    constructor(name, id, email, officenumber) {
       super(name, id, email) 
       this.officenumber = officenumber;
    }
}