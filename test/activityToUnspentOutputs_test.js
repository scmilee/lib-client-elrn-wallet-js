/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const isBuffer = require('is-buffer')
const assert = chai.assert;
const bufferFrom = require('buffer-from');
import Elrn from '..';

suite('activityToUnspentOutputs', function() {
    test('activityToUnspentOutputs', function() {
        const config = require(__dirname + '/config/options.js');
        const elrnClient = new Elrn(config)
        const activity = JSON.parse('{"recommend_include_fee":true,"info":{"nconnected":0,"conversion":100000000,"symbol_local":{"code":"USD","symbol":"$","name":"U.S. dollar","conversion":15018.78098562,"symbolAppearsAfter":false,"local":true},"symbol_btc":{"code":"BTC","symbol":"BTC","name":"Bitcoin","conversion":100000000,"symbolAppearsAfter":true,"local":false},"latest_block":{"block_index":1706335,"hash":"0000000000000000001e348e466d0def5d0781a0da199ebf4a782abf0ef3900a","height":528623,"time":1529635696}},"wallet":{"n_tx":1,"n_tx_filtered":1,"total_received":100000,"total_sent":0,"final_balance":100000},"addresses":[{"address":"xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc","n_tx":1,"total_received":100000,"total_sent":0,"final_balance":100000,"gap_limit":20,"change_index":0,"account_index":1}],"txs":[{"hash":"5bb5e8c28622d707b683ec39f02fa6f723abde103aff6680fa7cfb3d8ab24871","ver":1,"vin_sz":1,"vout_sz":2,"size":226,"weight":904,"fee":1356,"relayed_by":"127.0.0.1","lock_time":0,"tx_index":355831067,"double_spend":false,"result":100000,"balance":100000,"time":1529611683,"block_height":528585,"inputs":[{"prev_out":{"value":422454,"tx_index":334094995,"n":1,"spent":true,"script":"76a914bc7077c696fa4dd0ae3b2a1250b19d30ebd4c82388ac","type":0,"addr":"1JBNmUCiQdV2GB3KXLuBs8HYHrXwtNvo5v"},"sequence":4294967295,"script":"483045022100a9178f16087639553ff46fe55aab16f8d571625333407a4512a1ce979afa301402201a1e55dfcd00cf666b6ae3d0764d1dfbaa9f65d79f35804c9ac377a187c82b19012103ac06c583907468d51c0967d8a00de721cefa886f1eecb3827fa3f1883fc0adee","witness":""}],"out":[{"value":100000,"tx_index":355831067,"n":0,"spent":false,"script":"76a914d9f055f5d7406177cc48047bef118e323127b86c88ac","type":0,"addr":"1LsMYT7CRunQ4njP1UjUDAeHQEqGxNVrUK","xpub":{"m":"xpub6CDy2jtLYBVonu96ARo283eBmgEf3YJhg7kRNEAQ7oz7evLgCEfzGzTiieb8KjgwWzD7R49b5noTnTmKMQK8cZ9zPojTGtLtyNRcxDRQWWc","path":"M/0/0"}}]}]}')
        return elrnClient.activityToUnspentOutputs(activity)
        .then((unspentOutputs) => {
          assert.equal(typeof unspentOutputs, 'object')
        })
    });
});
