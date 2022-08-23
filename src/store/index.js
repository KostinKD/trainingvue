import { createStore, createLogger } from 'vuex'
import counterModule from './modules/counterModule'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

export default createStore({
  plugins: [createLogger],
  modules:{
    countertestname: counterModule
  },

  state(){
    return {
      appTitle: 'globalstate',
      appBody: 'GLOBAL BODY'
    }
  },
  mutations: mutations,
  actions: actions,
  getters: {
    lowerCaseTitle(state){
      return (
          state.appTitle.toUpperCase()
      )
    }
  }
})
