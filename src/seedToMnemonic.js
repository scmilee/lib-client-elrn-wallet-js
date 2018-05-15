var bip39 = require('bip39')
const isBuffer = require('is-buffer')
export default function seedToMnemonic(seed) {
    if (isBuffer(seed) != true) {
        return Promise.reject(new Error('must call seedToMnemonic with a buffer (see createSeed.js)'))
    }
    return new Promise((resolve, reject) => {
        try {
            resolve(bip39.entropyToMnemonic(seed.toString('hex')));
        } catch (err) {
            reject(err);
        }
    });
}
