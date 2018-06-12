const shapeshift = require('shapeshift.io')

const erc20Extensions = require('./erc20Extensions.js')
const extensions = require('./networksExtensions') // bitcoinjs

// augment shapeshift coins results with known values for ETH tokens and bitcoinjs
export default () => {
    return new Promise((resolve, reject) => {
        try {
          
          shapeshift.coins((err, coins) => {
              if (err) {
                  reject(err);
              }
              let extendedCoins = {}
              Object.keys(coins).map((coin) => {
                  extendedCoins[coin] = Object.assign(coins[coin]);
                  extendedCoins[coin].id = coin;
                  extendedCoins[coin].derivePath = "m/0'/0/0";
                  Object.keys(erc20Extensions).map((erc20extension) => {
                    if (erc20Extensions[erc20extension].symbol == coin) {
                      extendedCoins[coin].id = erc20extension;
                      extendedCoins[coin].derivePath = "m/44'/60'/0'/0/0";
                      extendedCoins[coin].extension = Object.assign(erc20extensions[erc20extension]);
                    }
                  })
                  Object.keys(extensions).map((extension) => {
                    if (extensions[extension].symbol == coin) {
                      extendedCoins[coin].id = extension;
                      extendedCoins[coin].derivePath = extensions[extension].derivePath || "m/0'/0/0";
                      extendedCoins[coin].extension = Object.assign(extensions[extension]);
                    }
                  })
              })
              resolve(extendedCoins)
          })
        } catch (err) {
            reject(err);
        }
    });
}
