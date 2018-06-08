const shapeshift = require('shapeshift.io')

export default (depositAddress) => {
    return new Promise((resolve, reject) => {
        shapeshift.status(depositAddress, (err, data) => {
            if (err) {
              console.log(err)
                reject(err);
            }
            resolve(data)
        })
    });
}
