import { createStore } from 'vuex'
export default createStore({
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
    doubleCounter(_, getters)
    {
      return getters.counter  * 2
    }
  },
  actions: {
    incrementAsync(context, payload)
    {
      setTimeout(() => {
        context.commit('add', payload)
      }, payload.delay);
    }
  }
})