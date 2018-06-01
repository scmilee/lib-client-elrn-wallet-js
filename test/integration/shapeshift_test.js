/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '../../';

suite('shapeshift', function() {
    test('getRate', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.getRate('btc_ltc')
        .then((data) => {
            let pair = data.body.pair
            let rate = data.body.rate
            assert.equal(pair, 'btc_ltc')
            assert.isNumber(parseFloat(rate))
        })
    });
});
