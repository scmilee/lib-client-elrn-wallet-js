/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('seedToPrivateKey', function() {
    test('produces a bitcoin privateKey', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        //strategy worth garlic gallery gesture happy trash boil ceiling weasel happy patrol
        let seed = bufferFrom('c92aa4bfbc113f167b5772d98891ced48d6c96639de0e9f7330f21af1568eda04d4488b65a1af77f4ebe7e187dcf133104885e37e92093e3ae61345f11f78989', 'hex')
        let derivePath = "m/44'/0'/0'/0/0"
        return elrnClient.seedToPrivateKey(seed, derivePath, 'bitcoin')
        .then((privateKey) => {
            assert.equal(privateKey, 'L3X8PYNGYpgvbhsVMyhLpUdaTHGpShnJjgKJnnnakzsgqbaWKnCf')
        })
    });
});
