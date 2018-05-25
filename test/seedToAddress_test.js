/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
const bip44Coins = require('bip44-constants');
//import seedToMnemonic from '../src/seedToMnemonic.js';
import Elrn from '..';

//'c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9'

suite('seedToAddress', function() {
    // test('seedToAddress returns a string', function() {
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     let seed = bufferFrom('e226b12f8156a84bffd244243a72e087f0b84eb4ba6c6cd82b227330535e91052ee5933956006775b3c5bbe3a812ae94f96f1dc0476efadacbd6927503d1be6b', 'hex')
    //     return elrnClient.seedToAddress(seed, "m/44'/0'/0'/0/0", 'bitcoin')
    //     .then((address) => {
    //         assert.equal(typeof address,  'string')
    //         assert.equal(address, '1BJKG3YtBfwRuw2hNF8ZXLLNUBdZchtAhV')
    //     })
    // });
    // test('should error if buffer is not passed in for seed', function() {
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //       return elrnClient.seedToAddress('seed', "m/44'/0'/0/0/0", 'bitcoin')
    //       .then((mnemonic) => assert.notEqual(true, true))
    //       .catch((error) => assert.equal(error.message, 'Expected property "0" of type Buffer, got String "seed"'))
    // });
    // test('should error if derivation path is missing', function() {
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     //spring range position vocal foot tilt drastic diet tube song debris excite
    //     let seed = bufferFrom('e226b12f8156a84bffd244243a72e087f0b84eb4ba6c6cd82b227330535e91052ee5933956006775b3c5bbe3a812ae94f96f1dc0476efadacbd6927503d1be6b', 'hex')
    //     let derivePath = "m/44'/2'/0'/0"
    //     return elrnClient.seedToAddress(seed)
    //     .then((mnemonic) => assert.notEqual(true, true))
    //     .catch((error) => assert.equal(error.message, 'Expected BIP32 derivation path, got undefined'))
    // });
    test('bitcoin address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/0'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'bitcoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, '164Cw1K93cYrme5s9VdCaPXLpTXE35RN9e')
        })
    });
    test('litecoin address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/2'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'litecoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'LQarSkd7ewx4qW1Mf7m56JtiQXufS2Trdd')
        })
    });
    test('dogecoin address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/3'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'dogecoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'D5MfWuxRhPpL6BoST1gHwkUL8sEqneitqo')
        })
    });
    test('bitcoin gold address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'bgold')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'GLbFEsH33fEn7iQFPNSVW52kPTAUbCieNu')
        })
    });
    test('blackcoin address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/10'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'blackcoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'BGducTAHrsowjjjmtgYaXr1St1hsK1PRXe')
        })
    });
    test('clam address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/23'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'clam')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'xLqjAxG1wNHKtC9cMMbseHaFJKTNdXfKLS')
        })
    });
    test('dash address', function() {
        // calcForDerivationPath()
        // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/5'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'dash')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'XfmnvKyrj6vrBAJy2eZ8f45HPt3xTB6X29')
        })
    });

    // test('bitcoin cash address', function() {
    //     // calcForDerivationPath()
    //     // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     //spring range position vocal foot tilt drastic diet tube song debris excite
    //     let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
    //     let derivePath = "m/44'/145'/0'/0/0"
    //     return elrnClient.seedToAddress(seed, derivePath, 'bitcoin')
    //     .then((address) => {
    //         assert.equal(typeof address,  'string')
    //         assert.equal(address, 'D5MfWuxRhPpL6BoST1gHwkUL8sEqneitqo')
    //     })
    // });
    // test('zcash address', function() {
    //   // calcForDerivationPath()
    //   // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
    //     let derivePath = "m/44'/133'/0'/0/0"
    //     return elrnClient.seedToAddress(seed, derivePath, 'zcash')
    //     .then((address) => {
    //         assert.equal(typeof address,  'string')
    //         assert.equal(address, 't1JoDFCnfjWTmBTEgVQgLjBT2xRhUo71LUa')
    //     })
    // });
});
