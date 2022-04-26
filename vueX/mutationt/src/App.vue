<template>
<TheNavbar/>
  <div class="container with-nav">
    <div class="card">
      <h1 >Vuex</h1>
      <h2>Счетчик {{$store.state.count}}</h2>
    </div>
    <button class="btn" @click="increment">increment +1</button>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
methods: {
  increment(){
    this.$store.commit('increment')
  }
}
}
</script>
