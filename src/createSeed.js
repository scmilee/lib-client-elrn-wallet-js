const crypto = require('crypto');

export default function createSeed(size = 16) {
    return new Promise((resolve, reject) => {
        try {
            resolve(crypto.randomBytes(size));
        } catch (err) {
            reject(err);
        }
    });
}
