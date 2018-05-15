export default function createSeed(size=16) {
    return new Promise((resolve, reject) => {
        try {
            resolve(bitcoin.networks);
        } catch (err) {
            reject(err);
        }
    });
}
