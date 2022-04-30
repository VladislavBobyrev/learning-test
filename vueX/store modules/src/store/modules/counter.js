export default {
  namespaced: true,
  state()
  {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state)
    {
      state.count++
    },
    add(state, payload)
    {
      state.count += payload.value
    },
  },
  getters: {
    counter(state)
    {
      // if(state.count > 60){
      //     // return state.count + '!'
      //     return 0 
      // }
      return state.count
    },
    doubleCounter(state, getters, rootState, rootGetters)
    {
      // console.log('state', state)
      // console.log('getters', getters)
      // console.log('rootGetters', rootGetters)
      // console.log('rootState', rootState)
      return getters.counter  * 2
    }
  },
  actions: {
    incrementAsync({commit}, payload)
    {
      setTimeout(() => {
        commit('add', payload)
      }, payload.delay);
    }
  }
}