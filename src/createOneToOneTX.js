import Elrn from '..'

export default function createOneToOneTX( destinationAddress, sendAmount , accountNumber, xKeyPair ) {
    return new Promise((resolve, reject) => {
        try {
            const config = {}
            let elrnClient = new Elrn(config);

            const xPub = xKeyPair.xPubKey
            const xPriv = xKeyPair.xPrivKey
            return elrnClient.xPubToActivity(xPub, 'bitcoin')
                    .then((activity) => {
                        return elrnClient.activityToUnspentOutputs(activity)       
                        .then((unspentOutputs) => {
                            return elrnClient.activityToChangeAddress(activity, xPub, elrnClient)
                            .then((changeAddress) => {
                                return elrnClient.unspentOutputsToInputs(unspentOutputs, sendAmount)
                                .then((inputs) => {
                                    return elrnClient.inputsToPaths(inputs, xPub)
                                    .then((paths) => {
                                        return elrnClient.xPrivToKeyPair(xPriv, paths)
                                        .then((keyPairs) => {
                                            return elrnClient.inputsToUnsignedTransaction(inputs, destinationAddress , changeAddress, sendAmount , 1000)
                                            .then((unsignedTransaction) => {
                                                return elrnClient.signTransaction(unsignedTransaction, keyPairs)
                                                .then((signedTransaction) => {
                                                    resolve(signedTransaction.build().toHex());
                                                })
                                            })
                                        }) 
                                    }) 
                                }) 
                            })
                        })
                    })
        } catch (err) {
            reject(err);
        }
    });
}