const bitcoin = require('bitcoinjs-lib');
const networksExtensions = require('./networksExtensions.js');
const isBuffer = require('is-buffer');

export default function publicKeyToSegwitAddress(pubKey, derivePath, network) {
    if (isBuffer(pubKey) !== true) Promise.reject(new Error('must call publicKeyToSegwitAddress with a buffer (see seedToPublicKey.js)'));
    return new Promise((resolve, reject) => {
        try {
          bitcoin.networks = Object.assign(bitcoin.networks, networksExtensions);
          const keyhash = bitcoin.crypto.hash160(pubKey);
          const scriptsig = bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
          const addressbytes = bitcoin.crypto.hash160(scriptsig);
          const scriptpubkey = bitcoin.script.scriptHash.output.encode(addressbytes);
          const address = bitcoin.address.fromOutputScript(scriptpubkey, network);
          resolve(address);
        } catch (err) {
            reject(err);
        }
    });
}
