const hdkey = require('ethereumjs-wallet/hdkey');

export default function xPrvToEthereumAddress(key, path) {
  if (typeof key !== 'string') {
      return Promise.reject(new Error('must call xPrvToEthereumAddress with a key'));
  }
  if (typeof path !== 'string') {
      return Promise.reject(new Error('must call xPrvToEthereumAddress with a path'));
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
