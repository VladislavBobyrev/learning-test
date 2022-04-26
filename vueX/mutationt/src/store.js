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
  }
})