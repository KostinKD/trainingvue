import { createStore } from 'vuex'
import counterModule from './modules/counterModule'

export default createStore({
  modules:{
    countertestname: counterModule
  },

  state(){
    return {
      appTitle: 'globalstate',
      appBody: 'GLOBAL BODY'
    }
  },
  getters: {
    lowerCaseTitle(state){
      return (
          state.appTitle.toUpperCase()
      )
    }
  }
})
