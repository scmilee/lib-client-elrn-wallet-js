var bitcoin = require('bitcoinjs-lib');

export default (inputs, accountPubKey) => {
  return new Promise((resolve, reject) => {
    try {
      let cumulativePaths = [];
      let newPath;
      Object.keys(inputs).map((inputTransaction) => {
        Object.keys(inputs[inputTransaction]).map((inputn) => {
          //make sure the accounts pubkey is the same as this unspentoutputs
          if (accountPubKey == inputs[inputTransaction][inputn].xpub.m) {
            //set the path as our own, split and slice it to remove the m/0 baggage, then add it to the array of paths
            newPath = inputs[inputTransaction][inputn].xpub.path 
            let splitPath = newPath.split('/');
            let coinAddressIndex = splitPath.slice(-1)[0]
            let coinIndexInt = parseInt(coinAddressIndex)
            cumulativePaths.push(coinIndexInt);
          }
        })
      })
      resolve(cumulativePaths)
    } catch(err) {
      reject(err)
    }
  })
}