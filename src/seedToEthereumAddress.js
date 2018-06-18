var hdkey = require('ethereumjs-wallet/hdkey');
var ethereum = require('ethereumjs-wallet');

/*
    A bit of Tech debt, the libary hdkey has the ability to generate a wallet using
    a seed, but was not able to generate correct wallet addressed after trying
    both string and buffers for the seed input
*/

export default function seedPrivateKeyToEthereumAddress(key, path) {
  if (typeof key != 'string') {
      return Promise.reject(new Error('must call seedPrivateKeyToEthereumAddress with a key'));
  }
  if (typeof path != 'string') {
      return Promise.reject(new Error('must call seedPrivateKeyToEthereumAddress with a path'));
  }
  return new Promise((resolve,reject) => {
      try{
          let splitPath = path.split('/');
          const derivedPath = splitPath.splice(0,5).join('/');
          const index = splitPath.join();
          const hdWallet = hdkey.fromExtendedKey(key);
          const derivedNode = hdWallet.derivePath(derivedPath);
          const nodeChild = derivedNode.deriveChild(index);
          const childWallet = nodeChild.getWallet();
          const walletAddress= childWallet.getAddressString();
          resolve(walletAddress);
      } catch (err) {
          reject(err);
      }
  })
}
