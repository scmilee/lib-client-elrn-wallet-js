/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('seedToEthereumAddress', () => {
    const config = require(__dirname + '/config/options.js');
    const elrnClient = new Elrn(config);
    let path = null;
    const key ='xprv9s21ZrQH143K2T7SGZv2WsPQEh8rvr6jxx9KH99hoMXTHgxNAqjUYQYBF8GLBSmszjYGCAJw1rnbce2V3pNXwEC77FRqDt88RVSGh3qtfYR';
    test('Errors if no key is supplied', () => {
        return elrnClient.seedPrivateKeyToEthereumAddress(null, path)
        .then((result) => assert.notEqual(true, true))
        .catch((error) => assert.equal(error.message, 'must call seedPrivateKeyToEthereumAddress with a key'));
    });
    test('Errors if no path is supplied', () => {
        return elrnClient.seedPrivateKeyToEthereumAddress(key, path)
        .then((result) => assert.notEqual(true, true))
        .catch((error) => assert.equal(error.message, 'must call seedPrivateKeyToEthereumAddress with a path'));
    });
    test('seedToEthereumAddress returns a known value for index 0', () => {
        path = 'm/44\'/60\'/0\'/0/0';
        return elrnClient.seedPrivateKeyToEthereumAddress(key, path)
        .then((ethereumAddress) => assert.equal(ethereumAddress, '0x7c2e172d59f11a308d1ceefa1f0cf91314021cc3'));
    });
    test('seedToEthereumAddress returns a known value for index 1', () => {
        path = 'm/44\'/60\'/0\'/0/1';
        return elrnClient.seedPrivateKeyToEthereumAddress(key, path)
        .then((ethereumAddress) => assert.equal(ethereumAddress, '0x95c939159e446b16889920fbe400023f59799236'));
    });
});
