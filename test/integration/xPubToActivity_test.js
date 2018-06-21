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
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let xPubString = 'xpub6CajDacdHWChWvVNMVDEmUQAmB68cGa5xibJspixagJBT88Mb2rFhrHX3qw4rVXb1XkZ6AhE3vM9TtowSzgBu5xCpquBYxYbvWof5N5fTWD'
        return elrnClient.xPubToActivity(xPubString, 'bitcoin')
        .then((activity) => {
            assert.equal(typeof activity, 'object')
        })
    });
});
