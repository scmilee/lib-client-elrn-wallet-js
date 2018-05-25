/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('seedToPublicKey', function() {
    test('seedToPublicKey', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //spring range position vocal foot tilt drastic diet tube song debris excite
        let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
        let derivePath = "m/44'/0'/0'/0/0"
        return elrnClient.seedToPublicKey(seed, derivePath, 'bitcoin')
        .then((publicKey) => {
            assert.equal(isBuffer(publicKey), true)
            assert.equal(publicKey.toString('hex'), '024b4d589e175cea49ac22648ea1bfce7021e2ffde5cbf27ba8e943f215880b856')
        })
    });
});
