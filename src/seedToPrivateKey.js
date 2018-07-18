const bitcoin = require('bitcoinjs-lib');
const isBuffer = require('is-buffer');

export default function seedToPrivateKey(seed, derivePathStr, network) {
    if (isBuffer(seed) !== true) Promise.reject(new Error('must call seedToPrivateKey with a buffer (see createSeed.js)'));
    if (!derivePathStr) Promise.reject(new Error('must call seedToPrivateKey with a derive path'));
    return new Promise((resolve, reject) => {
        try {
            const root = bitcoin.HDNode.fromSeedBuffer(seed, bitcoin.networks[network]);
            const child = root.derivePath(derivePathStr);
            const keyPair = child.keyPair;
            resolve(keyPair.toWIF());
        } catch (err) {
            reject(err);
        }
    });
}
