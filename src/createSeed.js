const bip39 = require('bip39')
const crypto = require('crypto')

export default function createSeed() {
    return new Promise((resolve, reject) => {
        try {
            resolve(crypto.randomBytes(16));
        } catch (err) {
            reject(err);
        }
    });
}
