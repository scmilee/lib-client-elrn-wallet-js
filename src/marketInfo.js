const shapeshift = require('shapeshift.io')

export default (pair) => {
    return new Promise((resolve, reject) => {
        if (!pair) {
          shapeshift.marketInfo((err, data) => {
              if (err) {
                  reject(err);
              }
              resolve(data)
          })
        } else {
          shapeshift.marketInfo(pair, (err, data) => {
              if (err) {
                  reject(err);
              }
              resolve(data)
          })
        }
    });
}
