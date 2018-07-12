export default (activity, xPubKey, elrnClient) => {
    if(!activity) {return Promise.reject(new Error('called actiityToChangeAddress without activity'))}
    return new Promise((resolve, reject) => {
        try {
          let changeAddressIndex =  activity.addresses[0].n_tx;
          let changeAddress = elrnClient.xPubToCoinAddress(xPubKey, changeAddressIndex);
          resolve(changeAddress);
        } catch (err) {
            reject(err);
        }
    });
}