/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
//import seedToMnemonic from '../src/seedToMnemonic.js';
import Elrn from '..';

suite('mnemonicToSeed', function() {
    test('mnemonicToSeed returns a buffer', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        let newSeed
        return elrnClient.createSeed()
        .then((seed) => {
          newSeed = seed
          return elrnClient.seedToMnemonic(seed)
        })
        .then((mnemonic) => {
          return elrnClient.mnemonicToSeed(mnemonic)
        })
        .then((seed) => assert.equal(isBuffer(seed),  true))
    });
    test('should error if string is not passed in', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        return elrnClient.createSeed()
        .then((seed) => elrnClient.mnemonicToSeed(seed))
          .then((seed) => assert.notEqual(true, true))
          .catch((error) => assert.equal(error.message, 'must call mnemonicToSeed with a string'))
    });
    test('should match this guy https://iancoleman.io/bip39/', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        const mnemonic = 'spring range position vocal foot tilt drastic diet tube song debris excite'
        return elrnClient.mnemonicToSeed(mnemonic)
        .then((seed) => {
          let bip39Seed = seed.toString('hex')
          assert.equal(bip39Seed, 'c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9')
        })
    });
    test('mnemonic with a password', function() {
      // 'spring range position vocal foot tilt drastic diet tube song debris excite'
        // const config = require(__dirname + '/config/options.js');
        // const elrnClient = new Elrn(config)
        // return elrnClient.createSeed()
        // .then((seed) => elrnClient.mnemonicToSeed(seed))
        //   .then((seed) => assert.notEqual(true, true))
        //   .catch((error) => assert.equal(error.message, 'must call mnemonicToSeed with a string'))
    });
});
