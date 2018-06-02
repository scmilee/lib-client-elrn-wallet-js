const shapeshift = require('shapeshift.io')

export default (pair) => {
    return new Promise((resolve, reject) => {
        shapeshift.depositLimit(pair, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    });
}
