const Transaction = require('ethereumjs-tx');
export default (activity, destination , sendAmt, data) => {
    if (!activity) { return Promise.reject(new Error('called activityToEthereumTx without activity')); }
    if(activity.balance < 1250000 + sendAmt) {return Promise.reject(new Error('not enough ether in wallet to complete Transaction.')); }
    return new Promise((resolve, reject) => {
        try {
          const gasPrice = 50;
          const gasLimit = 25000;
          var tx = new Transaction(null, 1)
          
          tx.nonce = 0;
          tx.gasPrice = gasPrice;
          tx.gasLimit = gasLimit;
          tx.value = sendAmt;
          if (data != null) {
            tx.to = destination;
          }else {
            tx.data = data;
          }
          resolve(tx);
        } catch (err) {
          reject(err);
        }
    });
};