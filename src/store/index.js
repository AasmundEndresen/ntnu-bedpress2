import { createStore } from 'vuex'
import { getAllCurrencies } from '../services'
import { generatePrice } from '../util'

export default createStore({
  state: {
    allCurrencies: [],
    policies: []
  },
  getters: {
    getPolicies: state => state.policies,
    getAllCurrencies: state => state.allCurrencies 
  },
  mutations: {
    setAllCurrencies(state, payload) {
      state.allCurrencies = payload
    },
    setPolicy(state, payload) {
      const policy = {...payload, id: state.policies.length + 1, price: generatePrice() }
      state.policies = state.policies?.length ? [...state.policies, policy] : [policy]
    },
    deletePolicy(state, payload) {
      const filtered = state.policies.filter(el => el.id !== payload.id)
      state.policies = filtered?.length ? [...filtered] : []
    }
  },
  actions: {
    async getCurrencies({ commit }) {
      try {
        const data = await getAllCurrencies()
        commit('setAllCurrencies', data)
      } catch(err) {
        console.log(err)
      }
    },
    addPolicy({ commit }, payload) {
      commit('setPolicy', payload)
    },
    removePolicy({ commit }, payload) {
      commit('deletePolicy', payload)
    }
  },
  modules: {
  }
})
