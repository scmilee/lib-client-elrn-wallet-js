var bitcoin = require('bitcoinjs-lib')
var hdkey = require('ethereumjs-wallet/hdkey')
const isBuffer = require('is-buffer')

export default (seed) => {
    return new Promise((resolve, reject) => {
        try {
            const rootNode = bitcoin.HDNode.fromSeedBuffer(seed);
        	resolve(rootNode); 
        } catch (err) {
            reject(err);
        }
    });
};