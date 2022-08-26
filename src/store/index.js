import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'This is Vuex + Comp Api'
  },
  getters: {
    appTitle(state){
      return state.title.trim()
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


