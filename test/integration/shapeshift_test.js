/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '../../';

suite('shapeshift', function() {
    test('exchangeRate', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.exchangeRate('btc_ltc')
        .then((rate) => {
            assert.isNotNaN(parseFloat(rate))
        })
    });
    test('coins', function() {
      const config = require(__dirname + '/../config/options.js');
      const elrnClient = new Elrn(config)
      return elrnClient.coins()
      .then((data) => {
          assert.isNotNull(data.BTC)
      })
    });
    test('depositLimit', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.depositLimit('btc_ltc')
        .then((limit) => {
            assert.isNotNaN(parseFloat(limit))
        })
    });  
    test('emailReceipt', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.emailReceipt('bill@microsoft.com', '1234')
        .then((data) => {
            console.log(data);
            assert.isNotNull(data)
        })
        .catch((err) => assert.equal(err.message, 'There is an error, please contact support.'))
    });
    test('isDown', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.isDown()
        .then((status) => {
            assert.equal(status, false)
        })
    });
    test('marketInfo', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.marketInfo()
        .then((marketInfo) => {
            assert.isNotNull(marketInfo)
        })
    });
    test('marketInfo', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.marketInfo('btc_ltc')
        .then((marketInfo) => {
            // selector doesn't seem to work everything comes back regardless
            assert.isNotNull(marketInfo)
        })
    });
    test('recent', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.recent()
        .then((recent) => {
            assert.isNotNull(recent)
        })
    });
    test('shift', function() {
        this.timeout(60000);
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        const withdrawalAddress = '0x7229225164025b545f52a3b4c1dfba6c4e34cb1d'
        const options = {
          returnAddress: '1LmoNY5vmDkNKDeRqQwSjLksVzQ9GrZysp',
          amount: '.01'
        }
        return elrnClient.shift(withdrawalAddress, 'BTC_ETH', options)
        .then((data) => {
            assert.isNotNull(data.orderId)
        })
    });
    test('shapeShiftStatus', function() {
        this.timeout(60000);
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        const withdrawalAddress = '0x7229225164025b545f52a3b4c1dfba6c4e34cb1d'
        const options = {
          returnAddress: '1LmoNY5vmDkNKDeRqQwSjLksVzQ9GrZysp',
          amount: '.01'
        }
        return elrnClient.shift(withdrawalAddress, 'BTC_ETH', options)
        .then((data) => {
            assert.isNotNull(data.orderId)
            elrnClient.shapeShiftStatus(data.deposit)
            .then((status) => {
              console.log(status)
              assert.isNotNull(status)
            })
        })
    });
});
