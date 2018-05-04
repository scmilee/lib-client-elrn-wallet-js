const bip44Coins = require('bip44-constants')

export default class Elrn {
    constructor(options) {
        let defaultOptions = {};
        this.options = Object.call(defaultOptions, options);
    }
    getCoins () {
        return bip44Coins;
    }
};
