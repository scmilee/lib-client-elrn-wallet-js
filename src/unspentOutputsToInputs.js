export default (unspentOutputs, sendAmount) => {
  return new Promise((resolve, reject) => {
    try {
      let cumulativeValue = 0;
      let inputs = {};
      Object.keys(unspentOutputs).map((unspentOutputTransaction) => {
        Object.keys(unspentOutputs[unspentOutputTransaction]).map((unspentOutput) => {
          inputs[unspentOutputTransaction] = inputs[unspentOutputTransaction] || {}
          inputs[unspentOutputTransaction][unspentOutput] = Object.assign(unspentOutputs[unspentOutputTransaction][unspentOutput])
          cumulativeValue = cumulativeValue + unspentOutputs[unspentOutputTransaction][unspentOutput].value
          if (cumulativeValue > sendAmount) {
            resolve(inputs)
          }
        })
      })
      reject(new Error('not enough funds to cover sendAmount'))
    } catch (err) {
        reject(err);
    }
  })
}
