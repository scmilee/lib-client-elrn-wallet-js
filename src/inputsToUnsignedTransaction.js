var bitcoin = require('bitcoinjs-lib');

export default (inputs, receiveAddress, changeAddress, sendAmount, feeAmount) => {
  return new Promise((resolve, reject) => {
    try {
      var txb = new bitcoin.TransactionBuilder()
      txb.setVersion(1)
      let cumulativeOutputAmount = 0;
      Object.keys(inputs).map((inputTransaction) => {
        Object.keys(inputs[inputTransaction]).map((inputn) => {
          cumulativeOutputAmount = cumulativeOutputAmount + inputs[inputTransaction][inputn].value
          txb.addInput(inputTransaction, parseInt(inputn)) // aka previous transaction output,
        })
      })
      const changeAmount = cumulativeOutputAmount - sendAmount - feeAmount;
      txb.addOutput(receiveAddress, sendAmount)
      txb.addOutput(changeAddress, changeAmount)
      resolve(txb)
    } catch(err) {
      reject(err)
    }
  })
}
