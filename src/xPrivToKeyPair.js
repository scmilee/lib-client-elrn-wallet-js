const bitcoin = require('bitcoinjs-lib')
//takes a extended account private key and an array of addressnumbers ex: m/0/'addressNumber'
//returns an array of private addressess
export default ( xPrivKey, addressNumbers) => {
	return new Promise((resolve, reject) => {
	    try {
	    	let privateAddressess = [];
	    	addressNumbers.map((addressNumber) => {
		        const derivedNode = bitcoin.HDNode.fromBase58(xPrivKey)
		      	const child = derivedNode.derive(0)
		      		.derive(addressNumber);

				var keyPair = child.keyPair;
				privateAddressess.push(keyPair)
			})
	      	resolve(privateAddressess)
	      } catch (err) {
	        reject(err);
	     }
	})
};