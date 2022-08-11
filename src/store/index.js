import { createStore } from 'vuex'

export default createStore({
  state: {
    user : false
  },
  getters: {
  },
  mutations: {
    test(state,payload){
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
