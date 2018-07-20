import Elrn from '..'

export default function prepareTransaction( destinationAddress , sendAmount , accountInfo , xKeyPair ) {
    return new Promise((resolve, reject) => {
        try {
            const config = {}
            let elrnClient = new Elrn(config)

            const xPub = xKeyPair.xPubKey
            const xPriv = xKeyPair.xPrivKey

            var bitcoinTransactionPrep = async function() {
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
            var ethereumTransactionPrep = async function(){
                let address = await elrnClient.xPrvToEthereumAddress(xPriv, 'm/44\'/0\'/0')
                let activity = await elrnClient.xPubToActivity(address, 'ethereum')
                let unsignedTransaction = await elrnClient.activityToEthereumTx(activity, destinationAddress, sendAmount, null) 
                
                const transactionPackage = {
                  preparedTransaction: unsignedTransaction
                }
                resolve(transactionPackage);
            }

            switch (accountInfo.network) {
                case 'ethereum': {
                    ethereumTransactionPrep();
                }
                //ethereum requires an address not an xpub!!!!!~~~~~~~~~~~~~~~~~~~~

            default:
                bitcoinTransactionPrep();
            }
        } catch (err) {
            reject(err);
        }
    });
}