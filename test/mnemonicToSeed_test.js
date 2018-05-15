/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
//import seedToMnemonic from '../src/seedToMnemonic.js';
import Elrn from '..';

suite('mnemonicToSeed', function() {
    test('mnemonicToSeed returns a buffer', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        let newSeed
        return elrnClient.createSeed()
        .then((seed) => {
          newSeed = seed
          return elrnClient.seedToMnemonic(seed)
        })
        .then((mnemonic) => {
          return elrnClient.mnemonicToSeed(mnemonic)
        })
        .then((seed) => assert.equal(isBuffer(seed),  true))
    });
    test('should error if string is not passed in', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.createSeed()
        .then((seed) => elrnClient.mnemonicToSeed(seed))
          .then((seed) => assert.notEqual(true, true))
          .catch((error) => assert.equal(error.message, 'must call mnemonicToSeed with a string'))
    });
});
