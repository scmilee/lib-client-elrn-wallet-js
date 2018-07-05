var bitcoin = require('bitcoinjs-lib')
var hdkey = require('ethereumjs-wallet/hdkey')
const isBuffer = require('is-buffer')

export default (seed, coinExt) => {
    try {
        if (coinExt.type == 'bitcoinjs') {
            const rootNode = bitcoin.HDNode.fromSeedBuffer(seed, coinExt);
            return rootNode; 
        }
        if (coinExt.type == 'erc20') {
            const hdRoot = hdkey.fromMasterSeed(seed);
            return hdroot;
        }
      } catch (err) {
        console.log(err);
     }
};