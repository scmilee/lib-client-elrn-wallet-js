import createKeypair from './src/createKeypair.js';
import createSeed from './src/createSeed.js';
import listNetworks from './src/listNetworks.js'
import seedToMnemonic from './src/seedToMnemonic.js'
import mnemonicToSeed from './src/mnemonicToSeed.js'
import seedToAddress from './src/seedToAddress.js'
import seedToPublicKey from './src/seedToPublicKey.js'
import publicKeyToSegwitAddress from './src/publicKeyToSegwitAddress.js'
import seedPrivateKeyToEthereumAddress from './src/seedPrivateKeyToEthereumAddress.js'
const shapeshift = require('shapeshift')

export default class Elrn {
    constructor(options) {
        let defaultOptions = {};
        this.options = Object.call(defaultOptions, options);
    }
    createKeypair (coinInfo) {
        return createKeypair.call(this.options, coinInfo);
    }
    createSeed () {
        return createSeed.call(this.options);
    }
    listNetworks () {
        return listNetworks.call(this.options);
    }
    seedToMnemonic (seed) {
        return seedToMnemonic.call(this.options, seed);
    }
    mnemonicToSeed (mnemonic) {
        return mnemonicToSeed.call(this.options, mnemonic);
    }
    seedToAddress (seed, derivePath, network) {
        return seedToAddress.call(this.options, seed, derivePath, network);
    }
    seedToPublicKey (seed, derivePath, network) {
        return seedToPublicKey.call(this.options, seed, derivePath, network);
    }
    publicKeyToSegwitAddress (publicKey, derivePath, network) {
        return publicKeyToSegwitAddress.call(this.options, publicKey, derivePath, network);
    }
    seedPrivateKeyToEthereumAddress (seedPrivateKey, derivePath) {
        return seedPrivateKeyToEthereumAddress.call(this.options, seedPrivateKey, derivePath);
    }
    getRate (pair) {
        return shapeshift.getRate.call(this.options, pair);
    }
};
