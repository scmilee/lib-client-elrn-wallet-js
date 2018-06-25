/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('seedToXPub', function() {
    test('seedToXPub', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        let seed = bufferFrom('c92aa4bfbc113f167b5772d98891ced48d6c96639de0e9f7330f21af1568eda04d4488b65a1af77f4ebe7e187dcf133104885e37e92093e3ae61345f11f78989', 'hex')
        let derivePath = "m/44'/0'/0'/0/0"
        return elrnClient.seedToXpub(seed, derivePath, 'bitcoin')
        .then((xPubString) => {
            // BIP32 Extended Public Key
            assert.equal(xPubString, 'xpub6GAy5SXmeDAVUDCQeqhhcNMUGwZBm8dv2zxqQ9EhjGiyW3xofzpQdUMhKwFnLGg94HB1KjALtTeTfJ2TkitMqweX8ybv2dFQXnetpVfESiP')
        })
    });
});
