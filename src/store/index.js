import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state,
  mutations: {
      registerWeb3Instance(state, payload) {
      console.log('registerWeb3instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      console.log(web3Copy)
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
      },
      errorHandler(state, data){
        console.log(state)
        let web3Copy = state.web3
        web3Copy.error = data
        state.web3 = web3Copy
      }

  },
  actions: {
      async registerWeb3 ({commit}) {
      console.log('registerWeb3 Action being executed')
      //const web3 = await getWeb3();
      getWeb3().then(result => {
        console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      }).catch(e => {
        console.log('Error in action registerWeb3', e)
        commit('errorHandler',e)
      })
    }
  },
  modules: {
    
  }
})
