/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

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
    test('bitcoin', function() {
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
    test('litecoin', function() {
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
    test('dogecoin', function() {
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
    test('bitcoin gold', function() {
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
    test('blackcoin', function() {
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
    test('clam', function() {
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
    test('dash', function() {
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
    test('digibyte', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/20'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'digibyte')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'DBWNN48Gez6rCsUBuEp4fsoYYbP5u98xV3')
        })
    });
    test('game credits', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/101'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'game')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'GQEwKc76g8yH5iG6V2sXamJg7xdWv3sksa')
        })
    });
    test('monacoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/22'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'monacoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'MFqAa7w8PVs4P13KZtFhwMo42k2fQVjDww')
        })
    });
    test('omnicore', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/200'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'omnicore')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, '1HKz8NAZ9DfE9mdTzA2fX1sLWVoPwnW5Y4')
        })
    });
    test('neoscoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/25'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'neoscoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'NhAiSRK6KS1yxqShU5aQ9vEUK3gxgCCL7c')
        })
    });
    test('namecoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/7'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'namecoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'N1ox4X8Yw1aU3XikB3W8tdTKCCuUA3QVAn')
        })
    });
    test('novacoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/50'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'novacoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, '4bsNwTfSnn13UbbWrg5dCv7dcUEBxYU4kv')
        })
    });
    test('potcoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/81'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'potcoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'PWoUwZ8qVazJzrXgWdznkqdLpQgsBqC4DX')
        })
    });
    test('peercoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/6'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'peercoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'PKhK5CQXSAu7DX5aZ1t4yAkMVa9uuTx7Qu')
        })
    });
    test('komodo', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/141'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'komodo')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'RJbGR69HvTwJtZFjTomK4gwEwZzAgpn39p')
        })
    });
    test('lbry', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/140'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'lbry')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'bR8wiWfVn8de8a7FyNhL4937VB5FLCFkBw')
        })
    });
    test('revolutionvr', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/129'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'revolutionvr')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'VVxWvKPyfQvmUxV1xc8wpgLtjAvsZuNtLH')
        })
    });
    test('vertcoin', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/28'/0'/0/0"
        return elrnClient.seedToAddress(seed, derivePath, 'vertcoin')
        .then((address) => {
            assert.equal(typeof address,  'string')
            assert.equal(address, 'Vn859fLnRi6y5zU5PsTzwQuEfc9PnUSUWJ')
        })
    });
});
