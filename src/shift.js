const shapeshift = require('shapeshift.io')

export default (withdrawalAddress, pair, options) => {
    return new Promise((resolve, reject) => {
        shapeshift.shift((err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    });
}
