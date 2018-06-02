export default function listPurposes() {
    return new Promise((resolve, reject) => {
        try {
            resolve ({
              "0'": {walletType: "bip32"},
              "44'": {walletType: "bip44"},
              "49": {walletType: "bip49"}
            })
        } catch (err) {
            reject(err);
        }
    });
}
