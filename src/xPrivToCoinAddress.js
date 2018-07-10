const bitcoin = require('bitcoinjs-lib')

export default ( xPrivKey, addressNumber) => {
    try {
        const derivedNode = bitcoin.HDNode.fromBase58(xPrivKey)
      	const address = derivedNode.derive(0)
      		.derive(addressNumber);

		var keyPair = address.keyPair;
      	return keyPair.getAddress().toString()
      } catch (err) {
        console.log(err);
     }
};