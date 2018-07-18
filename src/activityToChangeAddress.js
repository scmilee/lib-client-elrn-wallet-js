const bitcoin = require('bitcoinjs-lib');
export default (activity, xPubKey, elrnClient) => {
    if (!activity) { return Promise.reject(new Error('called activityToChangeAddress without activity')); }
    return new Promise((resolve, reject) => {
        try {
          const changeAddressIndex = activity.addresses[0].n_tx;

          const derivedNode = bitcoin.HDNode.fromBase58(xPubKey);
          const address = derivedNode.derive(1)
            .derive(changeAddressIndex);
        
          const keyPair = address.keyPair;
          resolve(keyPair.getAddress().toString());
        } catch (err) {
            reject(err);
        }
    });
};
