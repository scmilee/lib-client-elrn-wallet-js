 /*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const bufferFrom = require('buffer-from');
const extensions = require('../src/networksExtensions');
const assert = chai.assert;
import Elrn from '..';

const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config);

suite('bip44RootToAccountPrivKey', function() {
    test('returns a bitcoin account extended priv key', function() {
        
        const derivedPathStr = "m/44'/0'/0'/0/0";
        //mnemonic--> salad ability key forget baby visit dress whip spray arrange fun orphan tip spin mansion
        let seed = bufferFrom('0aa3860185456253d2bbdb7fb5675d039e9873f5b249ba778f0b79148738320c4b0a6b4cdca8067bc8c1e70aa0953d87fbd9e49686777fb7fa348f2af4a06e88', 'hex');

        const accountNumber = 3;
        elrnClient.seedToRoot(seed)
            .then((rootNode) => {
                return elrnClient.bip44RootToAccountPrivKey(rootNode, derivedPathStr , accountNumber)
                .then((address) => {
                    assert.equal(address, 'xprv9xzQzPVSHf3pCsetFfoP3v3PyLZPHLqV9JBKLgasEQtCDpdZrSXGDVA1SVcL9H1QSePgRTiDD6D6debCoZfoThJ8oCfBK6DQMMBXpA8DYPM');
                })
            })
        
    });
    test('returns a ethereum account extended priv key', function() {
        
        const derivedPathStr = "m/44'/60'/0'/0/0";
        //mnemonic--> salad ability key forget baby visit dress whip spray arrange fun orphan tip spin mansion
        let seed = bufferFrom('0aa3860185456253d2bbdb7fb5675d039e9873f5b249ba778f0b79148738320c4b0a6b4cdca8067bc8c1e70aa0953d87fbd9e49686777fb7fa348f2af4a06e88', 'hex');

        const accountNumber = 3;
        elrnClient.seedToRoot(seed)
            .then((rootNode) => {
                return elrnClient.bip44RootToAccountPrivKey(rootNode, derivedPathStr , accountNumber)
                .then((address) => {
                    assert.equal(address, 'xprv9yAVsGMJ7i1jfEHvwgJPx1866prgHtiZkDd4vpCjy45UKRD1WFe64oaGk6F3nnfbShnC5k1kQMtz2HGDafM6vnk7ef1JyXtyKnpGm88MAA2');
                })
            })
    });
});
