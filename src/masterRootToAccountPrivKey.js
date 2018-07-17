var bitcoin = require('bitcoinjs-lib')

export default function masterRootToAccountPrivKey( rootNode, path , accountNumber ) {
    return new Promise((resolve, reject) => {
        try {
            
            let splitPath = path.split('/');
            splitPath[3] = accountNumber + '\'';
            const derivedPath = splitPath.splice(0,4).join('/');
            let child = rootNode.derivePath(derivedPath)
           
            resolve(child.toBase58());
        } catch (err) {
            reject(err);
        }
    });
}
