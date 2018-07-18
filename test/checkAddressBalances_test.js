/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('checkAddressBalances', function() {
    test('checkAddressBalances returns an amount for the provided address', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        let address = ['13kfmzSB5a1uAxiXdXJnG5B6Yoik7sJAts']
        let network = 'bitcoin'
        return elrnClient.checkAddressBalances(address, network)
        .then((amount) => {
            let total = 0
            for (var i = address.length - 1; i >= 0; i--) {
                total += amount[address[i]].final_balance
            }
            assert.equal(total, 98000);
        });
    });
});
