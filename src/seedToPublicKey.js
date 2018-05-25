var bitcoin = require('bitcoinjs-lib')
const isBuffer = require('is-buffer')

export default function seedToPublicKey(seed, derivePathStr, network ) {
    if (isBuffer(seed) != true) Promise.reject(new Error('must call seedToAddress with a buffer (see createSeed.js)'))
    if (!derivePathStr) Promise.reject(new Error('must call seedToAddress with a derive path'))
    return new Promise((resolve, reject) => {
        try {
            var root = bitcoin.HDNode.fromSeedBuffer(seed, bitcoin.networks[network]);
            let child = root.derivePath(derivePathStr)
            var keyPair = child.keyPair;
            resolve(keyPair.getPublicKeyBuffer());
        } catch (err) {
            reject(err);
        }
    });
}
