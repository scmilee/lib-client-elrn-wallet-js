/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('xPrvToEthereumAddress', () => {
    const config = require(__dirname + '/config/options.js');
    const elrnClient = new Elrn(config);
    let path = null;
    //neither notable faint praise bridge aunt neck hire emotion cherry panda cinnamon silly shift hybrid
    const key ='xprv9yVmKtNXTJu967xXfKYoKZS3oxPMNp6o3tZaWpbViaw6MitV9dRK4xBBbuaGM86qWEbwB72HmB8uiYyGugWthSjZy1WcW8LsQiL4i5KmhB7';
    test('Errors if no key is supplied', () => {
        return elrnClient.xPrvToEthereumAddress(null, path)
        .then((result) => assert.notEqual(true, true))
        .catch((error) => assert.equal(error.message, 'must call xPrvToEthereumAddress with a key'));
    });
    test('Errors if no path is supplied', () => {
        return elrnClient.xPrvToEthereumAddress(key, path)
        .then((result) => assert.notEqual(true, true))
        .catch((error) => assert.equal(error.message, 'must call xPrvToEthereumAddress with a path'));
    });
    test('xPrvToEthereumAddress returns a known value for index 0', () => {
        path = 'm/44\'/0\'/0';
        return elrnClient.xPrvToEthereumAddress(key, path)
        .then((ethereumAddress) => assert.equal(ethereumAddress, '0x88f8f968c25e587cb732dcaf238e65eAf62E7e02'));
    });                                                           
    test('xPrvToEthereumAddress returns a known value for index 1', () => {
        path = 'm/0\'/1';
        return elrnClient.xPrvToEthereumAddress(key, path)
        .then((ethereumAddress) => assert.equal(ethereumAddress, '0xDA8FDF2435f08bB54B6bcBC77Ac1b951Fc731C6f'));
    });
});
