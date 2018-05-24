var bitcoin = require('bitcoinjs-lib')
const isBuffer = require('is-buffer')

export default function publicKeyToSegwitAddress(pubKey, derivePath, network) {
    if (isBuffer(pubKey) != true) Promise.reject(new Error('must call publicKeyToSegwitAddress with a buffer (see seedToPublicKey.js)'))
    return new Promise((resolve, reject) => {
        try {
          var keyhash = bitcoin.crypto.hash160(pubKey);
          var scriptsig = bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
          var addressbytes = bitcoin.crypto.hash160(scriptsig);
          var scriptpubkey = bitcoin.script.scriptHash.output.encode(addressbytes);
          var address = bitcoin.address.fromOutputScript(scriptpubkey, network)
          resolve(address)
        } catch (err) {
            reject(err);
        }
    });
}
