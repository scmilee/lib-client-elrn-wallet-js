import createSeed from './src/createSeed.js';
import prepareTransaction from './src/prepareTransaction.js';
import seedToMnemonic from './src/seedToMnemonic.js';
import mnemonicToSeed from './src/mnemonicToSeed.js';
import seedToAddress from './src/seedToAddress.js';
import seedToPublicKey from './src/seedToPublicKey.js';
import seedToPrivateKey from './src/seedToPrivateKey.js';
import publicKeyToSegwitAddress from './src/publicKeyToSegwitAddress.js';
import seedPrivateKeyToEthereumAddress from './src/seedPrivateKeyToEthereumAddress.js';
import exchangeRate from './src/exchangeRate.js';
import coins from './src/coins.js';
import depositLimit from './src/depositLimit.js';
import emailReceipt from './src/emailReceipt.js';
import isDown from './src/isDown.js';
import marketInfo from './src/marketInfo.js';
import recent from './src/recent.js';
import shift from './src/shift.js';
import shapeShiftStatus from './src/shapeShiftStatus.js';
import seedToXpub from './src/seedToXpub.js';
import xPubToActivity from './src/xPubToActivity.js';
import activityToUnspentOutputs from './src/activityToUnspentOutputs.js';
import activityToChangeAddress from './src/activityToChangeAddress.js';
import unspentOutputsToInputs from './src/unspentOutputsToInputs.js';
import inputsToUnsignedTransaction from './src/inputsToUnsignedTransaction.js';
import inputsToPaths from './src/inputsToPaths.js';
import masterRootToAccountPrivKey from './src/masterRootToAccountPrivKey.js';
import masterRootToAccountPubKey from './src/masterRootToAccountPubKey.js';
import seedToRoot from './src/seedToRoot.js';
import signTransaction from './src/signTransaction.js';
import xPubToCoinAddress from './src/xPubToCoinAddress.js';
import xPrivToKeyPair from './src/xPrivToKeyPair.js';
import checkAddressBalances from './src/checkAddressBalances.js';

export default class Elrn {
    constructor(options) {
        const defaultOptions = {};
        this.options = Object.call(defaultOptions, options);
    }
    createSeed() {
        return createSeed.call(this.options);
    }
    seedToMnemonic(seed) {
        return seedToMnemonic.call(this.options, seed);
    }
    mnemonicToSeed(mnemonic) {
        return mnemonicToSeed.call(this.options, mnemonic);
    }
    seedToAddress(seed, derivePath, network) {
        return seedToAddress.call(this.options, seed, derivePath, network);
    }
    seedToRoot(seed) {
        return seedToRoot.call(this.options, seed);
    }
    seedToPublicKey(seed, derivePath, network) {
        return seedToPublicKey.call(this.options, seed, derivePath, network);
    }
    seedToPrivateKey(seed, derivePath, network) {
        return seedToPrivateKey.call(this.options, seed, derivePath, network);
    }
    publicKeyToSegwitAddress(publicKey, derivePath, network) {
        return publicKeyToSegwitAddress.call(this.options, publicKey, derivePath, network);
    }
    seedPrivateKeyToEthereumAddress(seedPrivateKey, derivePath) {
        return seedPrivateKeyToEthereumAddress.call(this.options, seedPrivateKey, derivePath);
    }
    exchangeRate(pair) {
        return exchangeRate.call(this.options, pair);
    }
    checkAddressBalances(address, network) {
        return checkAddressBalances.call(this.options, address, network);
    }
    coins() {
        return coins.call(this.options);
    }
    prepareTransaction(destinationAddress, sendAmount, accountNumber, xPriv) {
        return prepareTransaction.call(this.options, destinationAddress, sendAmount, accountNumber, xPriv);
    }
    depositLimit(pair) {
        return depositLimit.call(this.options, pair);
    }
    emailReceipt(emailAddress, txId) {
        return emailReceipt.call(this.options, emailAddress, txId);
    }
    isDown(pair) {
        return isDown.call(this.options);
    }
    marketInfo() {
        return marketInfo.call(this.options);
    }
    recent() {
        return recent.call(this.options);
    }
    shift(withdrawalAddress, pair, shapeshiftOptions) {
        return shift.call(this.options, withdrawalAddress, pair, shapeshiftOptions);
    }
    shapeShiftStatus(depositAddress) {
        return shapeShiftStatus.call(this.options, depositAddress);
    }
    seedToXpub(seed, derivePath, network) {
        return seedToXpub.call(this.options, seed, derivePath, network);
    }
    signTransaction(transaction, keyPairs) {
        return signTransaction.call(this.options, transaction, keyPairs);
    }
    xPubToActivity(xPubString, network) {
        return xPubToActivity.call(this.options, xPubString, network);
    }
    activityToUnspentOutputs(activity) {
        return activityToUnspentOutputs.call(this.options, activity);
    }
    activityToChangeAddress(activity, xPubKey, elrnClient) {
        return activityToChangeAddress.call(this.options, activity, xPubKey, elrnClient);
    }
    unspentOutputsToInputs(unspentOutputs, sendAmount) {
        return unspentOutputsToInputs.call(this.options, unspentOutputs, sendAmount);
    }
    inputsToUnsignedTransaction(inputs, receiveAddress, changeAddress, sendAmount, feeAmount) {
        return inputsToUnsignedTransaction.call(this.options, inputs, receiveAddress, changeAddress, sendAmount, feeAmount);
    }
    inputsToPaths(inputs, xPubKey) {
        return inputsToPaths.call(this.options, inputs, xPubKey);
    }
    masterRootToAccountPrivKey(rootNode, derivePath, accountNumber) {
        return masterRootToAccountPrivKey.call(this.options, rootNode, derivePath, accountNumber);
    }
    masterRootToAccountPubKey(rootNode, derivePath, accountNumber) {
        return masterRootToAccountPubKey.call(this.options, rootNode, derivePath, accountNumber);
    }
    xPubToCoinAddress(derivePath, xPubKey, addressNumber) {
        return xPubToCoinAddress.call(this.options, derivePath, xPubKey, addressNumber);
    }
    xPrivToKeyPair(xPrivKey, addressNumbers) {
        return xPrivToKeyPair.call(this.options, xPrivKey, addressNumbers);
    }
}
