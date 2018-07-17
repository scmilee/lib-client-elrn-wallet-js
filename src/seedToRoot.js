const bitcoin = require('bitcoinjs-lib');

export default seed => {
    return new Promise((resolve, reject) => {
        try {
            const rootNode = bitcoin.HDNode.fromSeedBuffer(seed);
            resolve(rootNode); 
        } catch (err) {
            reject(err);
        }
    });
};
