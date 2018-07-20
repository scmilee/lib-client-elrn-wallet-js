const wallet = require('ethereumjs-wallet');
const hdkey = require('ethereumjs-wallet/hdkey');

/*
    A bit of Tech debt, the libary hdkey has the ability to generate a wallet using
    a seed, but was not able to generate correct wallet addressed after trying
    both string and buffers for the seed input
*/

export default function xPrvToEthereumAddress(key, path) {
  if (typeof key !== 'string') {
      return Promise.reject(new Error('must call seedPrivateKeyToEthereumAddress with a key'));
  }
  if (typeof path !== 'string') {
      return Promise.reject(new Error('must call seedPrivateKeyToEthereumAddress with a path'));
  }
  return new Promise((resolve, reject) => {
      try {
          const splitPath = path.split('/');
          const index = splitPath[2];
          console.log(index)

          const hdWallet = hdkey.fromExtendedKey(key);
          const nodeChild = hdWallet.deriveChild(index);

          const childWallet = nodeChild.getWallet();
          const walletAddress =  childWallet.getChecksumAddressString();
          resolve(walletAddress);
      } catch (err) {
          reject(err);
      }
  });
}
