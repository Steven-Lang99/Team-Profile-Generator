//Engineer Test
const Engineer = require('../lib/Engineer');

const employee = new Engineer('Steven', 27, 'langloiss003@my.uwstout.edu', 'Steven-Lang99');


describe('Engineer Github', () => {

    it('grab engineer github', () => {


        expect(employee.getGithub()).toEqual(expect.stringContaining(employee.github))
    })
})
describe('Engineer', () => {


    it('grabs engineer role', () => {


        expect(employee.getRole()).toEqual('Engineer')
    })
})