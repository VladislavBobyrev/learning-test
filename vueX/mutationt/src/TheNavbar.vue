<template>
  <header class="navbar">
    Vuex {{$store.state.count}}
    <button class="btn btn-primary" @click="add" >add +5</button>
  </header>
</template>

<script>
  export default {
    methods: {
      add() {
        // this.$store.commit('add', {
        //   value: 5
        // })
        this.$store.commit({
          type: 'add',
          value: 5
        })
      }
    }
  }
</script>
