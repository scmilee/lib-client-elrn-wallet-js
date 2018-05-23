/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Elrn from '..';

var bitcoin = require('bitcoinjs-lib')

suite('createKeypair', function() {
    const config = require(__dirname + '/config/options.js');
    const elrnClient = new Elrn(config)
    test('createKeypair creates blackcoin', function() {
        var network = bitcoin.networks['blackcoin']
        elrnClient.createKeypair(network)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            console.log(keypair.publicAddress)
            return
        })
    });
    /*
    test('createKeypair creates bitcoin', function() {
        const coin = 'bitcoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates bitcoin gold', function() {
        const coin = 'bitcoin gold';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates dash', function() {
        const coin = 'dash';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates decred', function() {
        const coin = 'decred';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates digibyte', function() {
        const coin = 'digibyte';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates dogecoin', function() {
        const coin = 'dogecoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates litecoin', function() {
        const coin = 'litecoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates monacoin', function() {
        const coin = 'monacoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates nubits', function() {
        const coin = 'nubits';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates namecoin', function() {
        const coin = 'namecoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates peercoin', function() {
        const coin = 'peercoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates qtum', function() {
        const coin = 'qtum';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates reddcoin', function() {
        const coin = 'reddcoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates vertcoin', function() {
        const coin = 'vertcoin';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    test('createKeypair creates zcash', function() {
        const coin = 'zcash';
        var cinfo = coinInfo(coin).versions;
        elrnClient.createKeypair(cinfo)
        .then((keypair) => {
            assert.notEqual(keypair.publicAddress, undefined)
            assert.notEqual(keypair.privateWif, undefined)
            return
        })
    });
    */
});
