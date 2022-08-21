import { createStore } from 'vuex'

export default createStore({
  state: {
      counter: 1,
    isAuth: true
  },
  getters: {
    counterGetter(state){
      if (state.counter > 10) {
        return 0
      }
      return state.counter
    },
    doubleCounter(_, getters){
      return getters.counterGetter * 2
    }
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
    incrementAsync(context, payload){
      setTimeout(()=>{
        context.commit('addFive',payload)
      }, payload.delay)
    }
  },
  modules: {
  }
})
