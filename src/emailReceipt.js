const shapeshift = require('shapeshift.io');

export default (emailAddress, txId) => {
    return new Promise((resolve, reject) => {
        shapeshift.emailReceipt(emailAddress, txId, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
