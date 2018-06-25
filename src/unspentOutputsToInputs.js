export default (unspentOutputs, sendAmount, underfundAllowed) => {
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
      if (underfundAllowed === false) {
        alert(cumulativeValue)
        reject(new Error('not enough funds to cover sendAmount'))
      }
      resolve(inputs)
    } catch (err) {
        reject(err);
    }
  })
}
