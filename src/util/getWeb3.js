import Web3 from 'web3'

const getWeb3 = async ()  => {
  var web3js = window.ethereum
  if (typeof web3js !== 'undefined') {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  return new Promise((resolve, reject) => {
    //window.addEventListener("load", async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          // ask user permission to access his accounts
          resolve({
            injectedWeb3: web3.currentProvider.isMetaMask,
            web3 () {
              return web3
            }
          })
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error("Must install MetaMask"));
      }
    //});
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve network ID
      result.web3().version.getNetwork((err, networkId) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          reject(new Error('Unable to retrieve network ID'))
        } else {
          console.log(result)
          // Assign the networkId property to our result and resolve promise
          result = Object.assign({}, result, {networkId})
          
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve coinbase
      result.web3().eth.getCoinbase((err, coinbase) => {
        if (err) {
          reject(new Error('Unable to retrieve coinbase'))
        } else {
          result = Object.assign({}, result, { coinbase })
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve balance for coinbase
      result.web3().eth.getBalance(result.coinbase, (err, balance) => {
        if (err) {
          reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
        } else {
          result = Object.assign({}, result, { balance })
          resolve(result)
        }
      })
    })
  })
}

  
 
export default getWeb3

