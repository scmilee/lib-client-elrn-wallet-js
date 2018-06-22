const axios = require('axios');
const promiseRetry = require('promise-retry');

export default (activity) => {
    if(!activity) {return Promise.reject(new Error('called actiityToUnspentOutputs without activity'))}
    return new Promise((resolve, reject) => {
        try {
          let unspentOutputs = {};
          activity.txs.map((transaction) => {
            return transaction.out.map((output) => {
              if (output.spent === false) {
                unspentOutputs[`${transaction.hash}`] = unspentOutputs[`${transaction.hash}`] || {}
                unspentOutputs[`${transaction.hash}`][`${output.n}`] = output;
              }
            })
          })
          resolve(unspentOutputs);
        } catch (err) {
            reject(err);
        }
    });
}
