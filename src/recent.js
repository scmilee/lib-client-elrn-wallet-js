const shapeshift = require('shapeshift.io');
export default () => {
    return new Promise((resolve, reject) => {
        shapeshift.recent((err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
