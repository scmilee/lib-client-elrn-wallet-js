var bitcoin = require('bitcoinjs-lib');
var networksExtensions = require('./networksExtensions.js');

export default function listNetworks() {
    return new Promise((resolve, reject) => {
        try {
            bitcoin.networks = Object.assign(bitcoin.networks, networksExtensions)
            let networksArray = []
            Object.keys(bitcoin.networks).map((networkName) => {
                const networkEntry = Object.assign({id: networkName}, bitcoin.networks[networkName])
                networksArray.push(networkEntry);
            })
            resolve(networksArray);
        } catch (err) {
            reject(err);
        }
    });
}
