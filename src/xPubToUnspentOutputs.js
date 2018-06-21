const axios = require('axios');
const promiseRetry = require('promise-retry');

export default (xPubString, network) => {
    if(!xPubString) {return Promise.reject(new Error('called xPubToUnspentOutputs without providing address'))}
    if(!xPubString) {return Promise.reject(new Error('called xPubToUnspentOutputs without providing network (example "bitcoin")'))}
    return new Promise((resolve, reject) => {
        try {
            switch (network) {
                case 'bitcoin':
                    const url = `https://blockchain.info/multiaddr?active=${xPubString}`
                    return axios.get(url)
                    .then(function(response) {
                      let unspentOutputs = {};
                      response.data.txs.map((transaction) => {
                        return transaction.out.map((output) => {
                          if (output.spent === false) {
                            let index = output.n;
                            unspentOutputs[`${transaction.hash}`] = unspentOutputs[`${transaction.hash}`] || {}
                            unspentOutputs[`${transaction.hash}`][`${output.n}`] = output;
                          }
                        })
                      })
                      resolve(unspentOutputs);
                    })
            default:
                reject(new Error(`called xPubToUnspentOutputs with unknown network: ${network}`))
            }
        } catch (err) {
            reject(err);
        }
    });
}
