const shapeshift = require('shapeshift.io')

export default () => {
    return new Promise((resolve, reject) => {
        try {
          const coinsArray = [];
          shapeshift.coins((err, coins) => {
              if (err) {
                  reject(err);
              }
              Object.keys(coins).map((coin) => {
                  const coinEntry = Object.assign({id: coin}, coins[coin])
                  coinsArray.push(coinEntry);
              })
              resolve(coinsArray)
          })
        } catch (err) {
            reject(err);
        }
    });
}
