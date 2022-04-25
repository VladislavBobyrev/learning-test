<template>
  <div class="container with-nav">
    <div class="card">
      <h1>Счетчик на VueX </h1>
      <h2>Счетч {{$store.state.count}}</h2>
      <button @click="increment">increment</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  methods: {
    increment(){
      this.$store.state.count++
    }
  }
}
</script>
