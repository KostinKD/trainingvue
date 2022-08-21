import { createStore } from 'vuex'

export default createStore({
  state: {
      counter: 1,
    isAuth: true
  },
  getters: {
  },
  mutations: {
    increment(state){
      state.counter++
    },
    addFive(state, payload){
      state.counter += payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
