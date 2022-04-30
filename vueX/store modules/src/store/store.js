import { createStore, createLogger } from 'vuex'
import counterModule from './modules/counter'
import mutations from './mutations'
import action from './action'
export default createStore({
  plugins:[ createLogger()],  
  modules: {
    count: counterModule
  },
  
  state()
  {
    return {
      appTitle: 'Vuex is Runing in Modules'
    }
  },
  mutations: mutations,
  actions: action,
  getters: {
    uppercaseTItle(state)
    {
      return state.appTitle.toUpperCase()
    }
  }
})