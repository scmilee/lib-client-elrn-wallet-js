const bitcoin = require('bitcoinjs-lib');

export default (inputs, receiveAddress, changeAddress, sendAmt, feeAmount) => {
  return new Promise((resolve, reject) => {
    try {
      const sendAmount = parseInt(sendAmt);
      const txb = new bitcoin.TransactionBuilder();
      txb.setVersion(1);
      let cumulativeOutputAmount = 0;
      Object.keys(inputs).map(inputTransaction => {
        Object.keys(inputs[inputTransaction]).map(inputn => {
          cumulativeOutputAmount += inputs[inputTransaction][inputn].value;
          txb.addInput(inputTransaction, parseInt(inputn)); // aka previous transaction output,
          return inputn;
        });
        return inputTransaction;
      });
      const changeAmount = cumulativeOutputAmount - sendAmount - feeAmount;
      txb.addOutput(receiveAddress, sendAmount);
      txb.addOutput(changeAddress, changeAmount);
      resolve(txb);
    } catch (err) {
      reject(err);
    }
  });
};
