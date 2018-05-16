/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
const knownAssets = require('./config/knownAssets.js');
const erc20 = require('../src/erc20_token_query');


suite('erc20 token query', function() {
    test(' Token Contract fails if no address is provided', (done) => {
        erc20.getTokenContractInfo()
        .then(() => {
          done(new Error('Expected method to reject.'))
        })
        .catch((err) => {
          assert.isDefined(err);
          done();
        })
        .catch(done);
    });
    test('Address info fails if no address is provided', (done) => {
        erc20.getAddressInfo()
        .then(() => {
          done(new Error('Expected method to reject.'))
        })
        .catch((err) => {
          assert.isDefined(err);
          done();
        })
        .catch(done);
    });
});
