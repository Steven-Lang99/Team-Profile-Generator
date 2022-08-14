//Employee Test
const Employee = require('../lib/Employee');

const employee = new Employee('Steven', 27, 'langloiss003@my.uwstout.edu');
describe('Employee Name', () => {


    it('grab employee name', () => {


        expect(employee.getName()).toEqual(expect.any(String))
    })
})
describe('Employee ID', () => {

    it('grab employee Id', () => {


        expect(employee.getId()).toEqual(expect.any(Number))
    })
})
describe('Employee Email', () => {

    it('grab employee email', () => {


        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
    })
})
describe('Employee Role', () => {


    it('grabs employee role', () => {


        expect(employee.getRole()).toEqual('Employee')
    })
})