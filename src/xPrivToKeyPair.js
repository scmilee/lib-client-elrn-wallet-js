const bitcoin = require('bitcoinjs-lib');
//takes a extended account private key and an array of addressnumbers ex: m/0/'addressNumber'
//returns an array of private addressess
export default (xPrivKey, addressNumbers) => {
	return new Promise((resolve, reject) => {
		try {
			const privateAddressess = [];
			addressNumbers.map(addressNumber => {
				const derivedNode = bitcoin.HDNode.fromBase58(xPrivKey);
				const child = derivedNode.derive(0)
				.derive(addressNumber);

				const keyPair = child.keyPair;
				privateAddressess.push(keyPair);
				return addressNumber;
			});
			resolve(privateAddressess);
		} catch (err) {
			reject(err);
		}
	});
};
