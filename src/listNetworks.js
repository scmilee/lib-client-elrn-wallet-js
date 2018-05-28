var bitcoin = require('bitcoinjs-lib');
var networksExtensions = require('./networksExtensions.js');

export default function listNetworks() {
    return new Promise((resolve, reject) => {
        try {
            bitcoin.networks = Object.assign(bitcoin.networks, networksExtensions)
            let networksArray = []
            Object.keys(bitcoin.networks).map((networkName) => {
                const jsonl = `{${networkName}: ${bitcoin.networks[networkName]}}`
                networksArray.push(jsonl);
            })
            resolve(networksArray);
        } catch (err) {
            reject(err);
        }
    });
}
