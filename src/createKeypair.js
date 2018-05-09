var CoinKey = require('coinkey')

export default function createKeypair(coinInfo) {
    if(!coinInfo) {return Promise.reject(new Error('called createKeypair without coinInfo value'))}
    return new Promise((resolve, reject) => {
        try {
            var ck = new CoinKey.createRandom(coinInfo);
            resolve(ck);
        } catch (err) {
            reject(err);
        }
    });
}
