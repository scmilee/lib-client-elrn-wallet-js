
export default activity => {
    if (!activity) { return Promise.reject(new Error('called activityToUnspentOutputs without activity')); }
    return new Promise((resolve, reject) => {
        try {
          const unspentOutputs = {};
          activity.txs.map(transaction => {
            return transaction.out.map(output => {
              if (output.spent === false) {
                unspentOutputs[`${transaction.hash}`] = unspentOutputs[`${transaction.hash}`] || {};
                unspentOutputs[`${transaction.hash}`][`${output.n}`] = output;
              }
              return output;
            });
          });
          resolve(unspentOutputs);
        } catch (err) {
            reject(err);
        }
    });
};
