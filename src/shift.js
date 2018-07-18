const shapeshift = require('shapeshift.io');

export default (withdrawalAddress, pair, options) => {
    return new Promise((resolve, reject) => {
        shapeshift.shift(withdrawalAddress, pair, options, (err, data) => {
            if (err) {
              console.log(err);
                reject(err);
            }
            resolve(data);
        });
    });
};
