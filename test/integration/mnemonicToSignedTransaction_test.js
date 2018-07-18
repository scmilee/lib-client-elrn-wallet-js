
/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '../..';

suite('mnemonicTo Signed and Built transaction', function() {
    test('can sign and build a transaction from a mnemonic', function() {
        const config = require(__dirname + '/../config/options.js');
        const elrnClient = new Elrn(config)
        this.timeout(5000);
        const mnemonic = 'strategy worth garlic gallery gesture happy trash boil ceiling weasel happy patrol'
        return elrnClient.mnemonicToSeed(mnemonic)
        .then((seed) => {
            return elrnClient.seedToRoot(seed)
            .then((rootNode) => {
                return elrnClient.bip44RootToAccountPubKey(rootNode, "m/44'/0'/0'/0/0", 0)
                .then((xPub) => {
                    return elrnClient.xPubToActivity(xPub, 'bitcoin')
                    .then((activity) => {
                        return elrnClient.activityToUnspentOutputs(activity)       
                        .then((unspentOutputs) => {
                            return elrnClient.activityToChangeAddress(activity, xPub, elrnClient)
                            .then((changeAddress) => {
                                return elrnClient.unspentOutputsToInputs(unspentOutputs, 1000)
                                .then((inputs) => {
                                    return elrnClient.inputsToPaths(inputs, xPub)
                                    .then((paths) => {
                                        return elrnClient.bip44RootToAccountPrivKey(rootNode, "m/44'/0'/0'/0/0", 0)
                                        .then((xPriv) => {
                                            return elrnClient.xPrivToKeyPair(xPriv, paths)
                                            .then((keyPairs) => {
                                                return elrnClient.inputsToUnsignedTransaction(inputs, '1FQcZ9AfYAGasWVHXYP7Nd4n2pDSdiwkWy', changeAddress, 1000, 1000)
                                                .then((unsignedTransaction) => {
                                                    return elrnClient.signTransaction(unsignedTransaction, keyPairs)
                                                    .then((signedTransaction) => {
                                                        assert.equal(signedTransaction.build().toHex().length , 744 )
                                                    }).catch(err => console.log(err))
                                                }).catch(err => console.log(err))
                                            }).catch(err => console.log(err))
                                        })  .catch(err => console.log(err))
                                    }).catch(err => console.log(err)) 
                                }) .catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }).catch(err => console.log(err))
                    }).catch(err => console.log(err))       
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    });
});