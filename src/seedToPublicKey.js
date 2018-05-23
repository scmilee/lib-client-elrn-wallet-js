var bitcoin = require('bitcoinjs-lib')
const isBuffer = require('is-buffer')

export default function seedToAddress(seed, derivePathStr, network ) {
    if (isBuffer(seed) != true) Promise.reject(new Error('must call seedToAddress with a buffer (see createSeed.js)'))
    if (!derivePathStr) Promise.reject(new Error('must call seedToAddress with a derive path'))
    return new Promise((resolve, reject) => {
        try {
            // line 482 https://github.com/iancoleman/bip39/blob/master/src/js/index.js
            var root = bitcoin.HDNode.fromSeedBuffer(seed, bitcoin.networks[network]);
            let child = root.derivePath(derivePathStr)
            var keyPair = child.keyPair;
            resolve(keyPair.getPublicKeyBuffer().toString('hex'));
        } catch (err) {
            reject(err);
        }
    });
}
