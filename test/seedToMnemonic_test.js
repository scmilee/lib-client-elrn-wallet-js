/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
import Elrn from '..';

suite('seedToMnemonic', function() {
    test('seedToMnemonic returns a string', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.createSeed()
        .then((seed) => elrnClient.seedToMnemonic(seed))
        .then((mnemonic) => assert.equal(mnemonic.toString(),  mnemonic))
    });
    test('should error if buffer is not passed in', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
          return elrnClient.seedToMnemonic('seed')
          .then((mnemonic) => assert.notEqual(true, true))
          .catch((error) => assert.equal(error.message, 'must call seedToMnemonic with a buffer (see createSeed.js)'))
    });
});
