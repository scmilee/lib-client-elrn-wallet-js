/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('inputsToPaths', function() {
    test('basic path finding', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        const inputs = {
          "5bb5e8c28622d707b683ec39f02fa6f723abde103aff6680fa7cfb3d8ab24871":{
            "0":{
              "value":100000,
              "tx_index":355831067,
              "n":0,"spent":false,
              "script":"76a914d9f055f5d7406177cc48047bef118e323127b86c88ac",
              "type":0,
              "addr":"1LsMYT7CRunQ4njP1UjUDAeHQEqGxNVrUK",
              "xpub":{
                "m":"xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc",
                "path":"M/0/6"
              }
            }
          },
          "43985dhjfk4fn98s83fd98g79fds980bd08vb09fd8f09f80d9v0vx9080v939s":{
            "0":{
              "value":100000,
              "tx_index":355831067,
              "n":0,"spent":false,
              "script":"76a914d9f055f5d7406177cc48047bef118e323127b86c88ac",
              "type":0,
              "addr":"1LsMYT7CRunQ4njP1UjUDAeHQEqGxNVrUK",
              "xpub":{
                "m":"xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc",
                "path":"M/0/5"
              }
            }
          }

        }
        const pubKey = 'xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc'
        return elrnClient.inputsToPaths(inputs, pubKey)
        .then((paths) => {
          assert.equal(paths[0], '6')
          assert.equal(paths[1], '5')
       })
    });
});