/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('inputsToUnsignedTransaction', function() {
    test('basic transaction', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        const inputs = {
          "5bb5e8c28622d707b683ec39f02fa6f723abde103aff6680fa7cfb3d8ab24871":{
            "0":{
              "value":100000,
              "tx_index":355831067,
              "n":0,"spent":false,
              "script":"76a914d9f055f5d7406177cc48047bef118e323127b86c88ac",
              "type":0,
              "addr":"1LsMYT7CRunQ4njP1UjUDAeHQEqGxNVrUK",
              "xpub":{
                "m":"xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc",
                "path":"M/0/0"
              }
            }
          }
        }
        const receiveAddress = '13kfmzSB5a1uAxiXdXJnG5B6Yoik7sJAts'
        const changeAddress = '1N5usxUBgxjm2yauVTPPKeEiT654VFKAEx'
        const sendAmount = 100
        const feeAmount = 1000
        return elrnClient.inputsToUnsignedTransaction(inputs, receiveAddress, changeAddress, sendAmount, feeAmount)
        .then((unsignedTransaction) => {
          assert.equal(typeof unsignedTransaction, 'object')
       })
    });
});
