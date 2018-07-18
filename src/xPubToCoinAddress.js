const bitcoin = require('bitcoinjs-lib');

export default (xPubKey, addressNumber) => {
    try {
        const derivedNode = bitcoin.HDNode.fromBase58(xPubKey);
        const address = derivedNode.derive(0)
            .derive(addressNumber);

		const keyPair = address.keyPair;
		return keyPair.getAddress().toString();
      } catch (err) {
        console.log(err);
     }
};
