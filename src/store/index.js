import { createStore } from 'vuex'

export default createStore({
  state: {
    user : '',
    data:'',
    refreshToken:''
  },
  getters: {
   
  },
  mutations: {
   LOGGD_IN(state,payload){
      state.user = payload
    },
    SET_DATA(state,payload){
      state.data = payload
    },
    SET_REFRESH_TOKEN(state,payload){
      state.refreshToken = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
