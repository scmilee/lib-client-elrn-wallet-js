/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const bufferFrom = require('buffer-from');
const extensions = require('../src/networksExtensions');
const assert = chai.assert;
import Elrn from '..';

const config = require(__dirname + '/config/options.js');
const elrnClient = new Elrn(config);

suite('masterRootToAccountPubKey', function() {
    test('returns a xpub key to a account', function() {
        
        const derivedPathStr = "m/44'/0'/0'/0/0";
        //mnemonic--> salad ability key forget baby visit dress whip spray arrange fun orphan tip spin mansion
        let seed = bufferFrom('0aa3860185456253d2bbdb7fb5675d039e9873f5b249ba778f0b79148738320c4b0a6b4cdca8067bc8c1e70aa0953d87fbd9e49686777fb7fa348f2af4a06e88', 'hex');
        const rootNode = elrnClient.seedToRoot(seed);
        const accountNumber = 3;
      
        return elrnClient.masterRootToAccountPubKey(rootNode, derivedPathStr , accountNumber)
        .then((address) => {
          assert.equal(address, 'xpub6BymPu2L82c7RMjMMhLPR3z8XNPsgoZLWX6v94zUnkRB6cxiPyqWmHUVHoVJKp3Zv3V3XcZ6t7gATaARueGb1LgRcVczwYoX4ftbyPqDU86');
        })
    });
});
