//Intern Test
const Intern = require('../lib/Intern');

const employee = new Intern('Steven', 27, 'langloiss0003@my.uwstout.edu', 'U of M');


describe('Intern school', () => {

    it('grab Intern school', () => {


        expect(employee.getEmail()).toEqual(expect.any(String))
    })
})
describe('Intern', () => {


    it('grabs Intern role', () => {


        expect(employee.getRole()).toEqual('Intern')
    })
})