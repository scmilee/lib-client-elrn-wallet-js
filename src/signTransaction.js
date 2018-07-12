const bitcoin = require('bitcoinjs-lib')
//takes an unsigned transaction and an array of privatekeys sourced from all of the unspent outputs
export default (transaction, privKeys) => {
    return new Promise((resolve, reject) => {
       try {
       	
       		for (var i = 0; i < privKeys.length; i++) {
       			transaction.sign( i , privKeys[i]);
       		}
	        resolve(transaction);
      	} catch (err) {
        	reject(err);
     	}
    });
}