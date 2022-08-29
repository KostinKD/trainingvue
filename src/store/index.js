import { createStore, createLogger } from 'vuex'
import auth from "@/store/modules/auth.module";


const plugins = []

if (process.env.NODE_ENV === 'development'){
  plugins.push(createLogger())
}


export default createStore({
  plugins,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
