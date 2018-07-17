export default (unspentOutputs, sendAmount) => {
  return new Promise((resolve, reject) => {
    try {
      let cumulativeValue = 0;
      const inputs = {};
      Object.keys(unspentOutputs).map(unspentOutputTransaction => {
        Object.keys(unspentOutputs[unspentOutputTransaction]).map(unspentOutput => {
          inputs[unspentOutputTransaction] = inputs[unspentOutputTransaction] || {};
          inputs[unspentOutputTransaction][unspentOutput] = Object.assign(unspentOutputs[unspentOutputTransaction][unspentOutput]);
          cumulativeValue += unspentOutputs[unspentOutputTransaction][unspentOutput].value;
          if (cumulativeValue > sendAmount) {
            resolve(inputs);
          }
          return unspentOutput;
        });
        return unspentOutputTransaction;
      });
      reject(new Error('not enough funds to cover sendAmount'));
    } catch (err) {
        reject(err);
    }
  });
};
