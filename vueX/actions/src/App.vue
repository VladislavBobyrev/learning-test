<template>
<TheNavbar/>
  <div class="container with-nav">
    <div class="card">
      <h1 >Vuex</h1>
      <h2>Счетчик {{$store.getters.counter}} * 2 =
({{$store.getters.doubleCounter }})

      </h2>
    </div>
    <button class="btn" @click="increment">increment +1</button>
    <button class="btn danger" @click="incrementAsync">incrementAsync +100</button>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  methods: {
  increment(){
    this.$store.commit('increment')
  },
  incrementAsync() {
    this.$store.dispatch('incrementAsync', {
      value: 100,
      dalay: 300
    })
  }
}
}
</script>
