//Manger Test
const Manager = require('../lib/Manager')

const employee = new Manager('Steven', 27, 'langloiss003@my.uwstout.edu', 40);
describe('Manager Office Number', () => {

    it('grab manager office number', () => {


        expect(employee.getofficeNumber()).toEqual(expect.any(Number))
    })
})
describe('Manager', () => {


    it('grabs manager role', () => {


        expect(employee.getRole()).toEqual('Manager')
    })
})