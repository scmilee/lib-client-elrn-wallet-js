/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
import listNetworks from '../src/listNetworks.js';
import Elrn from '..';

suite('listNetwork', function() {
    test('listNetwork returns an Array', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.listNetworks()
        .then((networks) => {
            assert.equal(Array.isArray(networks), true);
        })
    });
});
