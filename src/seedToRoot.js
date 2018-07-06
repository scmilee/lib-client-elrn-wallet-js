var bitcoin = require('bitcoinjs-lib')
var hdkey = require('ethereumjs-wallet/hdkey')
const isBuffer = require('is-buffer')

export default (seed, coinExt) => {
    try {
        const rootNode = bitcoin.HDNode.fromSeedBuffer(seed);
        return rootNode; 
      
      } catch (err) {
        console.log(err);
     }
};