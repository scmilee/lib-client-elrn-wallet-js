
//takes an unsigned transaction and an array of keypairs sourced from all of the unspent outputs
export default (transaction, keypairs) => {
    return new Promise((resolve, reject) => {
       try {
        if (!Array.isArray(keypairs)) Promise.reject(new Error('Must call sign transaction with an array of keypairs'));
        for (let i = 0; i < keypairs.length; i++) {
          transaction.sign(i, keypairs[i]);
        }
        resolve(transaction);
      } catch (err) {
        reject(err);
      }
    });
};
