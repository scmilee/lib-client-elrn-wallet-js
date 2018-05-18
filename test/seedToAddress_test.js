/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
const bip44Coins = require('bip44-constants');
//import seedToMnemonic from '../src/seedToMnemonic.js';
import Elrn from '..';

suite('seedToAddress', function(seed, derivationPath) {
    test('seedToAddress returns a string', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        let seed = bufferFrom('e226b12f8156a84bffd244243a72e087f0b84eb4ba6c6cd82b227330535e91052ee5933956006775b3c5bbe3a812ae94f96f1dc0476efadacbd6927503d1be6b', 'hex')
        let derivePath = "m/44'/0'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath)
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, '1BJKG3YtBfwRuw2hNF8ZXLLNUBdZchtAhV')
        })
    });
    test('should error if buffer is not passed in for seed', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
          return elrnClient.seedToAddress('seed', "m/44'/0'/0'/0/0")
          .then((mnemonic) => assert.notEqual(true, true))
          .catch((error) => assert.equal(error.message, 'Expected property "0" of type Buffer, got String "seed"'))
    });
    test('should error if derivation path is missing', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        let seed = bufferFrom('e226b12f8156a84bffd244243a72e087f0b84eb4ba6c6cd82b227330535e91052ee5933956006775b3c5bbe3a812ae94f96f1dc0476efadacbd6927503d1be6b', 'hex')
        return elrnClient.seedToAddress(seed)
        .then((mnemonic) => assert.notEqual(true, true))
        .catch((error) => assert.equal(error.message, 'Expected BIP32 derivation path, got undefined'))
    });
});
