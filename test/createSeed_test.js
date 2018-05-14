/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
import Elrn from '..';

suite('createSeed', function() {
    test('createSeed returns a buffer', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.createSeed()
        .then((seed) => {
          assert.equal(isBuffer(seed), true);
        })
    });
});
