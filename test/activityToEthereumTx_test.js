/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';


const activity = {
  "address": "738d145faabb1e00cf5a017588a9c0f998318012",
  "total_received": 9762206505909057760,
  "total_sent": 6916970312523512365,
  "balance": 2845236193385545395,
  "unconfirmed_balance": 0,
  "final_balance": 2845236193385545395,
  "n_tx": 702,
  "unconfirmed_n_tx": 0,
  "final_n_tx": 702
}

suite('activityToEthereumTx', function() {
    test('will return an error if the account has inssuficient funds', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        elrnClient.activityToEthereumTx(activity, '738d145faabb1e00cf5a017588a9c0f998318012', 2500000000000000000000000, null)
        .then((result) => {
          result
        }).catch((error) => {
          assert.equal(error.message, 'not enough ether in wallet to complete Transaction.')
        })
    });
    test('will return an unsigned transaction if there are enough funds', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.activityToEthereumTx(activity, '738d145faabb1e00cf5a017588a9c0f998318012', 25000, null)
        .then((result) => assert.equal(typeof result, 'object'))
    });
});
