const axios = require('axios');
//address must be an array
export default function checkAddressBalances (addresses, network) {
  if(!(addresses instanceof Array)){return Promise.reject(new Error('addresses need to be an Array'))}
  if(!network) {return Promise.reject(new Error('called checkAddressBalance without providing network (example "bitcoin")'))}
  return new Promise((resolve, reject) => {
      try {
          switch (network) {
              case 'bitcoin':
                  let url = `https://blockchain.info/balance?active=`
                  for (var i = addresses.length - 1; i >= 0; i--) {
                    url += `${addresses[i]}|`
                  }
                  //remove the last | to fit the api
                  url = url.slice(0,-1);
                  
                  return axios.get(url)
                  .then(function(response) {
                    let addressesTotal = 0;
                    for (var i = addresses.length - 1; i >= 0; i--) {
                       addressesTotal += response.data[addresses[i]].final_balance
                    }
                    resolve(addressesTotal);
                  })
          default:
              reject(new Error(`called checkAddressBalance with unknown network: ${network}`))
          }
      } catch (err) {
          reject(err);
      }
  })
}
