/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
import listPurposes from '../src/listPurposes.js';
import Elrn from '..';

suite('listPurposes', function() {
    test('listPurposes returns an Object', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.listPurposes()
        .then((purposes) => {
            assert.equal(purposes["0'"].walletType, 'bip32');
            assert.equal(purposes["44'"].walletType, 'bip44');
            assert.equal(purposes["49"].walletType, 'bip49');
        })
    });
});
