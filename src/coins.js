const shapeshift = require('shapeshift.io');
const extensions = require('./networksExtensions'); // HD Wallet Support

// augment shapeshift coins results with known values for ETH tokens and bitcoinjs
export default () => {
    return new Promise((resolve, reject) => {
        try {
          shapeshift.coins((err, coins) => {
              if (err) {
                  reject(err);
              }
              const extendedCoins = {};
              Object.keys(coins).map(coin => {
                  // surpressed symbols
                  if (coin === 'BCH') {
                      return coin;
                  }
                  if (coin === 'DCR') {
                      return coin;
                  }
                  if (coin === 'ETH') {
                      return coin;
                  }
                  if (coin === 'ETC') {
                      return coin;
                  }
                  if (coin === 'NMC') {
                      return coin;
                  }
                  if (coin === 'NXT') {
                      return coin;
                  }
                  if (coin === 'RDD') {
                      return coin;
                  }
                  if (coin === 'RCN') {
                      return coin;
                  }
                  if (coin === 'SC') {
                      return coin;
                  }
                  if (coins[coin].name === 'Augur') {
                      return coin;
                  }
                  if (coin === 'XMR') {
                      return coin;
                  }
                  if (coin === 'XRP') {
                      return coin;
                  }
                  if (coin === 'ZEC') {
                      return coin;
                  }
                  if (coin.id === 'blackcoin') {
                      return coin;
                  }
                  extendedCoins[coin] = Object.assign(coins[coin]);
                  extendedCoins[coin].id = coin;
                  extendedCoins[coin].derivePath = 'm/0\'/0/0';
                  Object.keys(extensions).map(extension => {
                    if (extensions[extension].symbol === coin) {
                      extendedCoins[coin].id = extension;
                      extendedCoins[coin].derivePath = extensions[extension].derivePath || 'm/0\'/0/0';
                      extendedCoins[coin].extension = Object.assign(extensions[extension]);
                    }
                    return extension;
                  });
                return coin;
              });
              resolve(extendedCoins);
          });
        } catch (err) {
            reject(err);
        }
    });
};
