/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
const knownAssets = require('./config/knownAssets.js');
const erc20 = require('../src/erc20_token_query');

suite('erc20 token query', function() {
    this.timeout(10000);
    test('fails if no address is provided', (done) => {
        erc20.getTokenContractInfo()
        .then(() => {
          done(new Error('Expected method to reject.'))
        })
        .catch((err) => {
          assert.isDefined(err);
          done();
        })
        .catch(done);
    });
    test('api will retreive ERC20 token information for wallet address', async() => {
        const ethAddress = '0x3028beecaf98393d144876bc533dbdfac2116739'
        const result = await erc20.getAddressInfo(ethAddress);
        assert.equal(result.address, ethAddress);
    });
    test('api functions for Firstblood token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.FIRST.contractAddress);
        assert.equal(result.name, 'Firstblood');
    });
    test('api functions for Aragon token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.ANT.contractAddress);
        assert.equal(result.name, 'Aragon Network Token');
    });
    test('api functions for Bancor token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.BNT.contractAddress);
        assert.equal(result.name, 'Bancor Network Token');
    });
    test('api functions for Blackcoin token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.BLK.contractAddress);
        assert.equal(result.name, 'BLACKcoin');
    });
    test('api functions for Civic token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.CVC.contractAddress);
        assert.equal(result.name, 'Civic');
    });
    test('api functions for district0x token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.DNT.contractAddress);
        assert.equal(result.name, 'district0x Network Token');
    });
    test('api functions for Gnosis token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.GNO.contractAddress);
        assert.equal(result.name, 'Gnosis Token');
    });
    test('api functions for Golem token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.GNT.contractAddress);
        assert.equal(result.name, 'Golem Network Token');
    });
    test('api functions for Matchpool token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.GUP.contractAddress);
        assert.equal(result.name, 'Guppy');
    });
    test('api functions for Numeraire token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.NMR.contractAddress);
        assert.equal(result.name, 'Numeraire');
    });
    test('api functions for OmiseGo token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.OMG.contractAddress);
        assert.equal(result.name, 'OMGToken');
    });
    test('api functions for Qtum token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.QTUM.contractAddress);
        assert.equal(result.name, 'Qtum');
    });
    test('api functions for Augur token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.REP.contractAddress);
        assert.equal(result.name, 'Reputation');
    });
    test('api functions for iExec token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.RLC.contractAddress);
        assert.equal(result.name, 'iEx.ec Network Token');
    });
    test('api functions for Salt token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.SALT.contractAddress);
        assert.equal(result.name, 'Salt');
    });
    test('api functions for Status token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.SNT.contractAddress);
        assert.equal(result.name, 'Status Network');
    });
    test('api functions for Storj token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.STORJ.contractAddress);
        assert.equal(result.name, 'StorjToken');
    });
    test('api functions for Swarm City token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.SWT.contractAddress);
        assert.equal(result.name, 'Swarm City Token');
    });
    test('api functions for WeTrust token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.TRST.contractAddress);
        assert.equal(result.name, 'Trustcoin');
    });
    test('api functions for Tether token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.USDT.contractAddress);
        assert.equal(result.name, 'Tether USD');
    });
    test('api functions for Wings token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.WINGS.contractAddress);
        assert.equal(result.name, 'WINGS');
    });
    test('api functions for 0x token', async() => {
        const result = await erc20.getTokenContractInfo(knownAssets.ZRX.contractAddress);
        assert.equal(result.name, '0x Protocol Token');
    });
});
