/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
const bip44Coins = require('bip44-constants');
//import seedToMnemonic from '../src/seedToMnemonic.js';
import Elrn from '..';

//'c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9'

suite('seedToPublicKey', function() {
    // test('seedToAddress returns a string', function() {
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     let seed = bufferFrom('e226b12f8156a84bffd244243a72e087f0b84eb4ba6c6cd82b227330535e91052ee5933956006775b3c5bbe3a812ae94f96f1dc0476efadacbd6927503d1be6b', 'hex')
    //     return elrnClient.seedToAddress(seed, "m/44'/0'/0'/0/0", 'bitcoin')
    //     .then((address) => {
    //         assert.equal(typeof address,  'string')
    //         assert.equal(address, '1BJKG3YtBfwRuw2hNF8ZXLLNUBdZchtAhV')
    //     })
    // });
    // test('should error if buffer is not passed in for seed', function() {
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //       return elrnClient.seedToAddress('seed', "m/44'/0'/0/0/0", 'bitcoin')
    //       .then((mnemonic) => assert.notEqual(true, true))
    //       .catch((error) => assert.equal(error.message, 'Expected property "0" of type Buffer, got String "seed"'))
    // });
    // test('should error if derivation path is missing', function() {
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     //spring range position vocal foot tilt drastic diet tube song debris excite
    //     let seed = bufferFrom('e226b12f8156a84bffd244243a72e087f0b84eb4ba6c6cd82b227330535e91052ee5933956006775b3c5bbe3a812ae94f96f1dc0476efadacbd6927503d1be6b', 'hex')
    //     let derivePath = "m/44'/2'/0'/0"
    //     return elrnClient.seedToAddress(seed)
    //     .then((mnemonic) => assert.notEqual(true, true))
    //     .catch((error) => assert.equal(error.message, 'Expected BIP32 derivation path, got undefined'))
    // });
    // test('bitcoin address', function() {
    //     // calcForDerivationPath()
    //     // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     //spring range position vocal foot tilt drastic diet tube song debris excite
    //     let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
    //     let derivePath = "m/44'/0'/0'/0/0"
    //     return elrnClient.seedToAddress(seed, derivePath, 'bitcoin')
    //     .then((address) => {
    //         assert.equal(typeof address,  'string')
    //         assert.equal(address, '164Cw1K93cYrme5s9VdCaPXLpTXE35RN9e')
    //     })
    // });
    // test('zcash address', function() {
    //   // calcForDerivationPath()
    //   // https://github.com/iancoleman/bip39/blob/master/src/js/index.js
    //     const config = require(__dirname + '/config/options.js');
    //     const elrnClient = new Elrn(config)
    //     let seed = bufferFrom('c88e288c7d4904aa7ac31e910cf2a0474dfc3f88b4fac7ab3a88dc5aaa8ffa0d0bd569e6a45e130048e4d0be5d2cf5d20d63496093f6560fd63eaf9a048832d9', 'hex')
    //     let derivePath = "m/44'/133'/0'/0/0"
    //     return elrnClient.seedToPublicKey(seed, derivePath, 'zcash')
    //     .then((publicKey) => {
    //         assert.equal(typeof publicKey,  'string')
    //         assert.equal(publicKey, '038060c98ee519b2c9fe12d08a527935afd7890211f427717159e4b664e02443cd')
    //     })
    // });
});

/*
// derive HDkey for this row of the table
var key = "NA";
if (useHardenedAddresses) {
    key = bip32ExtendedKey.deriveHardened(index);
}
else {
    key = bip32ExtendedKey.derive(index);
}
// bip38 requires uncompressed keys
// see https://github.com/iancoleman/bip39/issues/140#issuecomment-352164035
var keyPair = key.keyPair;
var useUncompressed = useBip38;
if (useUncompressed) {
    keyPair = new bitcoinjs.bitcoin.ECPair(keyPair.d, null, { compressed: false });
}
// get address
var address = keyPair.getAddress().toString();
// get privkey
var hasPrivkey = !key.isNeutered();
var privkey = "NA";
if (hasPrivkey) {
    privkey = keyPair.toWIF(network);
    // BIP38 encode private key if required
    if (useBip38) {
        privkey = bitcoinjsBip38.encrypt(keyPair.d.toBuffer(), false, bip38password, function(p) {
            console.log("Progressed " + p.percent.toFixed(1) + "% for index " + index);
        });
    }
}
// get pubkey
var pubkey = keyPair.getPublicKeyBuffer().toString('hex');
var indexText = getDerivationPath() + "/" + index;
if (useHardenedAddresses) {
    indexText = indexText + "'";
}
// Ethereum values are different
if (networks[DOM.network.val()].name == "ETH - Ethereum") {
    var privKeyBuffer = keyPair.d.toBuffer(32);
    privkey = privKeyBuffer.toString('hex');
    var addressBuffer = ethUtil.privateToAddress(privKeyBuffer);
    var hexAddress = addressBuffer.toString('hex');
    var checksumAddress = ethUtil.toChecksumAddress(hexAddress);
    address = ethUtil.addHexPrefix(checksumAddress);
    privkey = ethUtil.addHexPrefix(privkey);
    pubkey = ethUtil.addHexPrefix(pubkey);
}
// Ripple values are different
if (networks[DOM.network.val()].name == "XRP - Ripple") {
    privkey = convertRipplePriv(privkey);
    address = convertRippleAdrr(address);
}
// Segwit addresses are different
if (isSegwit) {
    if (!segwitAvailable) {
        return;
    }
    if (isP2wpkh) {
        var keyhash = bitcoinjs.bitcoin.crypto.hash160(key.getPublicKeyBuffer());
        var scriptpubkey = bitcoinjs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
        address = bitcoinjs.bitcoin.address.fromOutputScript(scriptpubkey, network)
    }
    else if (isP2wpkhInP2sh) {
        var keyhash = bitcoinjs.bitcoin.crypto.hash160(key.getPublicKeyBuffer());
        var scriptsig = bitcoinjs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
        var addressbytes = bitcoinjs.bitcoin.crypto.hash160(scriptsig);
        var scriptpubkey = bitcoinjs.bitcoin.script.scriptHash.output.encode(addressbytes);
        address = bitcoinjs.bitcoin.address.fromOutputScript(scriptpubkey, network)
    }
}
addAddressToList(indexText, address, pubkey, privkey);
if (isLast) {
    hidePending();
    updateCsv();
}
}, 50)
}
*/
