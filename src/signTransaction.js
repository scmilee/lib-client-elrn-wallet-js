const bitcoin = require('bitcoinjs-lib')
//takes an unsigned transaction and an array of keypairs sourced from all of the unspent outputs
export default (transaction, keypairs) => {
    return new Promise((resolve, reject) => {
       try {
       	
       		for (var i = 0; i < keypairs.length; i++) {
       			transaction.sign( i , keypairs[i]);
       		}
	        resolve(transaction);
      	} catch (err) {
        	reject(err);
     	}
    });
}