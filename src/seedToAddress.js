var bip39 = require('bip39')
var bitcoin = require('bitcoinjs-lib')
const isBuffer = require('is-buffer')
export default function seedToAddress(seed, derivePathStr) {
    if (isBuffer(seed) != true) Promise.reject(new Error('must call seedToAddress with a buffer (see createSeed.js)'))
    if (!derivePathStr) Promise.reject(new Error('must call seedToAddress with a derive path'))
    return new Promise((resolve, reject) => {
        try {
            //console.log(derivePathStr);
            var root = bitcoin.HDNode.fromSeedBuffer(seed);
            let child = root.derivePath(derivePathStr)
            resolve(child.getAddress())
        } catch (err) {
            reject(err);
        }
    });
}
