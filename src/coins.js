const shapeshift = require('shapeshift.io')
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
                  // surpressed symbols
                  if (coin == 'BCH') {
                      return
                  }
                  if (coin == 'DCR') {
                      return
                  }
                  if (coin == 'ETH') {
                      return
                  }
                  if (coin == 'ETC') {
                      return
                  }
                  if (coin == 'NMC') {
                      return
                  }
                  if (coin == 'NXT') {
                      return
                  }
                  if (coin == 'RDD') {
                      return
                  }
                  if (coin == 'RCN') {
                      return
                  }
                  if (coin == 'SC') {
                      return
                  }
                  if (coins[coin].name == 'Augur') {
                      return
                  }
                  if (coin == 'XMR') {
                      return
                  }
                  if (coin == 'XRP') {
                      return
                  }
                  if (coin == 'ZEC') {
                      return
                  }
                  extendedCoins[coin] = Object.assign(coins[coin]);
                  extendedCoins[coin].id = coin;
                  extendedCoins[coin].derivePath = "m/0'/0/0";
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
