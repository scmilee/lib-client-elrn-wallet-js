import Elrn from '..'

export default function prepareTransaction( destinationAddress, sendAmount , accountNumber, xKeyPair ) {
    return new Promise((resolve, reject) => {
        try {
            const config = {}
            let elrnClient = new Elrn(config)

            const xPub = xKeyPair.xPubKey
            const xPriv = xKeyPair.xPrivKey

            var transactionPrep = async function() {
                let activity = await elrnClient.xPubToActivity(xPub, 'bitcoin');
                let changeAddress = await elrnClient.activityToChangeAddress(activity, xPub, elrnClient)
                let unspentOutputs = await elrnClient.activityToUnspentOutputs(activity)
                let inputs = await elrnClient.unspentOutputsToInputs(unspentOutputs, sendAmount)
                let paths = await elrnClient.inputsToPaths(inputs, xPub);
                let unsignedTransaction = await elrnClient.inputsToUnsignedTransaction(inputs, destinationAddress , changeAddress, sendAmount , 1000)
                
                const transactionPackage = {
                    preparedTransaction : unsignedTransaction,
                    inputPaths: paths
                }
                resolve(transactionPackage);
            }
            transactionPrep();
        } catch (err) {
            reject(err);
        }
    });
}