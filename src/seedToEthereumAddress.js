const hdkey = require('ethereumjs-wallet/hdkey');

/*
    A bit of Tech debt, the libary hdkey has the ability to generate a wallet using
    a seed, but was not able to generate correct wallet addressed after trying
    both string and buffers for the seed input
*/

export default function seedPrivateKeyToEthereumAddress(key, path) {
  if (typeof key !== 'string') {
      return Promise.reject(new Error('must call seedToEthereumAddress with a key'));
  }
  if (typeof path !== 'string') {
      return Promise.reject(new Error('must call seedToEthereumAddress with a path'));
  }
  return new Promise((resolve, reject) => {
      try {
          const splitPath = path.split('/');
          const derivedPath = splitPath.splice(0, splitPath.length).join('/');
          const index = splitPath.join();
          const hdWallet = hdkey.fromExtendedKey(key);
          const derivedNode = hdWallet.derivePath(derivedPath);
          const childWallet = derivedNode.getWallet();
          const walletAddress = childWallet.getChecksumAddressString();
          resolve(walletAddress);
      } catch (err) {
          reject(err);
      }
  });
}
