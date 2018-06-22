/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '../..';

suite('xPubToActivity', function() {
    test('xPubToActivity - bitcoin', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        let xPubString = 'xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc'
        return elrnClient.xPubToActivity(xPubString, 'bitcoin')
        .then((activity) => {
            console.log(JSON.stringify(activity))
            assert.equal(typeof activity, 'object')
        })
    });
});
