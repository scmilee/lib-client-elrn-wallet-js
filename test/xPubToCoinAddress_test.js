/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const bufferFrom = require('buffer-from');
const assert = chai.assert;
import Elrn from '..';

const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config);

suite('xPub to Coin Address', function() {
    test('returns a bitcoin coin address', function() {
        const addressNumber = 0;
        //mnemonic is -> strategy worth garlic gallery gesture happy trash boil ceiling weasel happy patrol
        //the extended account private key below is from the 0 account from the mnemonic above
        const address = elrnClient.xPubToCoinAddress( 'xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc', addressNumber)
        
        assert.equal(address, '1LsMYT7CRunQ4njP1UjUDAeHQEqGxNVrUK');
    });
    
});
