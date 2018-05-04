const bip44coins = require('bip44-constants')

export default class Elrn {
    constructor(options) {
        let defaultOptions = {
            bip44coins: () => bip44coins
        };
        this.options = Object.call(defaultOptions,options);
    }
};
