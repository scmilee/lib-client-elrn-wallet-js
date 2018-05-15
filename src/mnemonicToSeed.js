var bip39 = require('bip39')
const isBuffer = require('is-buffer')
export default function mnemonicToString(mnemonic) {
    if (typeof mnemonic != 'string') {
        return Promise.reject(new Error('must call mnemonicToSeed with a string'))
    }
    return new Promise((resolve, reject) => {
        try {
            resolve(bip39.mnemonicToSeed(mnemonic));
        } catch (err) {
            reject(err);
        }
    });
}
