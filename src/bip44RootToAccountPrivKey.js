
export default function bip44RootToAccountPivKey(rootNode, path, accountNumber) {
    return new Promise((resolve, reject) => {
        try {
            const splitPath = path.split('/');
            splitPath[3] = `${accountNumber}'`;
            const derivedPath = splitPath.splice(0, 4).join('/');
            const child = rootNode.derivePath(derivedPath);
           
            resolve(child.toBase58());
        } catch (err) {
            reject(err);
        }
    });
}
