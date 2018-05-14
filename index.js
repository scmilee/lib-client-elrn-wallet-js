import createKeypair from './src/createKeypair.js';
import createSeed from './src/createSeed.js';
const bip44Coins = require('bip44-constants')

export default class Elrn {
    constructor(options) {
        let defaultOptions = {};
        this.options = Object.call(defaultOptions, options);
    }
    getCoins () {
        return bip44Coins;
    }
    createKeypair (coinInfo) {
        return createKeypair.call(this.options, coinInfo);
    }
    createSeed () {
        return createSeed.call(this.options);
    }
};
