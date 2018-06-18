var bitcoin = require('bitcoinjs-lib')
var hdkey = require('ethereumjs-wallet/hdkey')
const isBuffer = require('is-buffer')

export default function seedToAddress(seed, path, coinExt) {
    if (isBuffer(seed) != true) Promise.reject(new Error('must call seedToAddress with a buffer (see createSeed.js)'))
    if (!path) Promise.reject(new Error('must call seedToAddress with a derive path'))
    return new Promise((resolve, reject) => {
        try {
            if (coinExt.type == 'bitcoinjs') {
                var root = bitcoin.HDNode.fromSeedBuffer(seed, coinExt);
                let derivedNode = root.derivePath(path)
                var keyPair = derivedNode.keyPair;
                resolve(keyPair.getAddress().toString());
            }
            if (coinExt.type == 'erc20') {
                let splitPath = path.split('/');
                const derivedPath = splitPath.splice(0,5).join('/');
                const index = splitPath.join();
                const hdWallet = hdkey.fromMasterSeed(seed);
                const derivedNode = hdWallet.derivePath(derivedPath);
                const nodeChild = derivedNode.deriveChild(index);
                const childWallet = nodeChild.getWallet();
                const walletAddress= childWallet.getAddressString();
                resolve(walletAddress);
            }

        } catch (err) {
            reject(err);
        }
    });
}
