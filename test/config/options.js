/*eslint-disable */

module.exports = {
  host: 'localhost',
  supportedPaths: {
    "m": {
      "0'": {
        // walletType: "bip32"
      },
      "44'": {
        //walletType: "bip44"
        "0": "bitcoin",
        "1": "testnet",
        "2": "litecoin",
        "3": "dogecoin",
        "5": "dash",
        "6": "peercoin",
        "7": "namecoin",
        "10": "blackcoin",
        "20": "digibyte",
        "22": "monacoin",
        "23": "clam",
        "25": "neoscoin",
        "28": "vertcoin",
        "50": "novacoin",
        "60": "ethereum",
        "81": "potcoin",
        "101": "game",
        "129": "revolutionvr",
        "133": "zcash",
        "140": "lbry",
        "141": "komodo",
        "156": "bgold",
        "200": "omnicore"
      },
      "49": {walletType: "bip49"}
    }
  }
}
