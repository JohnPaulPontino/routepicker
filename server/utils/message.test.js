/**
 * Created by jhaypeepontz on 12/13/17.
 */
const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{

        let from = 'Jen';
        let text = 'Some message ';
        let message = generateMessage(from, text);

        expect(2).toBeA('number');
        expect(message).toInclude({from,text});
    });
});