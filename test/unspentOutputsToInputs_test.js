/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

const unspentOutputs = { 
  '7349f0129cbb0990e8653deaed4761a591ca7c14a2db60523e6ce619449f49c4':
   { '1':
      { value: 422454,
        tx_index: 334094995,
        n: 1,
        spent: false,
        script: '76a914bc7077c696fa4dd0ae3b2a1250b19d30ebd4c82388ac',
        type: 0,
        addr: '1JBNmUCiQdV2GB3KXLuBs8HYHrXwtNvo5v',
        xpub: [Object] } },
  cb3262e234235300bd771f8c938c92c3f9a0f50d55a7a668c9fb5ea3ee4f69a0:
   { '0':
      { value: 34670,
        tx_index: 307662577,
        n: 0,
        spent: false,
        script: '76a914690198767d0bea60b348785427b8032b962416de88ac',
        type: 0,
        addr: '1AaDs1CoDLHgmCMFbb71UEq7SbzKCXYboG',
        xpub: [Object] },
     '1':
      { value: 1348838,
        tx_index: 307662577,
        n: 1,
        spent: false,
        script: '76a91453cd9066e0b3f5bcfe6867b101bdde371ddba61488ac',
        type: 0,
        addr: '18e7LmJitJUzZuZpAGJdMsR8Eh7qd3TsMd' } },
  '21d3eeec19b7202ef3c121c1938cca5e201936875fdef66a9d0359646006d13f':
   { '0':
      { value: 1035384,
        tx_index: 286828189,
        n: 0,
        spent: false,
        script: '76a9147c7e87a355bef15290fdf2fa382b2a7f1cccb7e788ac',
        type: 0,
        addr: '1CMGNEaXeYK7H4yJHSUkskeEtZMJySXUZQ' } } 
  }

suite('unspentOutputsToInputs', function() {
    test('unspentOutputsToInputs', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        const sendAmount = 1348838
        return elrnClient.unspentOutputsToInputs(unspentOutputs, sendAmount)
        .then((inputs) => {
            let cumulativeValue = 0;
            assert.equal(typeof inputs, 'object')
            Object.keys(inputs).map((unspentOutputTransaction) => {
              Object.keys(unspentOutputs[unspentOutputTransaction]).map((unspentOutput) => {
                cumulativeValue = cumulativeValue + unspentOutputs[unspentOutputTransaction][unspentOutput].value
              })
            })
            assert.isAtLeast(cumulativeValue, sendAmount)
        })
    });
    
    test('error if not enough funds', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        const sendAmount = 2100000000000001
        return elrnClient.unspentOutputsToInputs(unspentOutputs, sendAmount)
        .then((inputs) => {
            let cumulativeValue = 0;
            assert.equal(typeof inputs, 'object')
            Object.keys(inputs).map((unspentOutputTransaction) => {
              Object.keys(unspentOutputs[unspentOutputTransaction]).map((unspentOutput) => {
                cumulativeValue = cumulativeValue + unspentOutputs[unspentOutputTransaction][unspentOutput].value
              })
            })
            assert.isAtLeast(cumulativeValue, sendAmount)
        })
        .catch((error) => assert.equal(error.message, "not enough funds to cover sendAmount"))
    });
});
