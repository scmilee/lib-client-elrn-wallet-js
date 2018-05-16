const axios = require('axios');
const ethplorerApiKey = 'freekey';
const promiseRetry = require('promise-retry');
import fetch from 'node-fetch';

const getTokenContractInfo = function (contractAddress) {
    if(!contractAddress) {return Promise.reject(new Error('called getErc20TokenContractInfo without providing address'))}
    return new Promise((resolve, reject) => {
        try {
            const url = `https://api.ethplorer.io/getTokenInfo/${contractAddress}?apiKey=${ethplorerApiKey}`
            return axios.get(url)
                .then(function(response) {
                    resolve(response.data);
                })
        } catch (err) {
            reject(err);
        }
    });
}

const getAddressInfo = function (walletAddress) {
    if(!walletAddress) {return Promise.reject(new Error('called getErc20AddressInfo without providing address'))}
    return new Promise((resolve, reject) => {
        try {
            const url = `https://api.ethplorer.io/getAddressInfo/${walletAddress}?apiKey=${ethplorerApiKey}`
            return axios.get(url)
                .then(function(response){
                    resolve(response.data);
                });
        } catch (err) {
            reject(err);
        }
    });
}

module.exports.getTokenContractInfo = getTokenContractInfo;
module.exports.getAddressInfo = getAddressInfo;
