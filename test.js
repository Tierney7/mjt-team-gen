const {Employee, Manager, Engineer, Intern} = require('');

describe('Employee', () => {
    it("should return an object containing a name, id, email, and type.", () => {
        const empObj = new Employee("Matt", "1","matt@fakemail.com", "Employee");
        expect(new Employee("Matt", "1", "matt@fakemail.com", "Employee")).toEqual(empObj)
    });

    describe('Manager', () => {
        it("should return an object containing a name, id, email, type, and office number.", () => {
            const manObj = new Manager("Matt", "1","matt@fakemail.com", "Manager");
            expect(new Manager("Matt", "1", "matt@fakemail.com", "Manager")).toEqual(manObj)
        });

        });

    describe('Engineer', () => {
        it("should return an object containing a name, id, email, type, and Github.", () => {
            const engObj = new Engineer("Matt", "1","matt@fakemail.com", "Engineer");
            expect(new Engineer("Matt", "1", "matt@fakemail.com", "Engineer")).toEqual(engObj)
        });
    });

    describe('Intern', () => {
        it("should return an object containing a name, id, email, type, and School.", () => {
            const intObj = new Intern("Matt", "1","matt@fakemail.com", "Intern");
            expect(new Intern("Matt", "1", "matt@fakemail.com", "Intern")).toEqual(intObj)
        });
    })
});
