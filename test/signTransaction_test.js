/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';

suite('signTransaction', function() {
    test('can sign a unsigned transaction', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config);
        const xKeyPair= {
        	xPrivKey: 'xprv9yEcdEMShowWaR4d4QG1kuhTDeQAe5arJtppZqknZUT8n81XehMjjC9EsNQuDUGtPULvm3E5s3qSkhXEL7WGKMJREMpSeeN1pdJTSK1qigj',
        	xPubKey: 'xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc'
        }
        const sendAmount = 1100;
        const destinationAddress = '1FQcZ9AfYAGasWVHXYP7Nd4n2pDSdiwkWy';
        const accountNumber = 0;
        
        return elrnClient.prepareTransaction(destinationAddress, sendAmount , accountNumber, xKeyPair)
        .then((transactionPackage) => {
        	return elrnClient.xPrivToKeyPair(xKeyPair.xPrivKey, transactionPackage.inputPaths)
            .then((keyPairs) => {
                return elrnClient.signTransaction(transactionPackage.preparedTransaction, keyPairs)
                .then((signedTransaction)=> {
                    assert.isAbove(signedTransaction.build().toHex().length, 200 )
                })
            })
        })
        .catch(err => {throw new Error(err)});
    });
});    