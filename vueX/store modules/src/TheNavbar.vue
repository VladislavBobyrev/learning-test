<template>
  <header class="navbar">
    <!-- Vuex {{$store.state.count}} -->
    Vuex {{counter}}
    <button class="btn btn-primary" @click="add" >add +5</button>
  </header>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    computed:{
      // counter(){
      //   return this.$storeg.getters.counter
      // }
      ...mapGetters('count', ['counter'])
  },
    methods: {
        ...mapMutations({
          addFive: 'count/add'
        }),
      add() {
        this.addFive({value: 5})
      // this.add({value: 5})
        // this.$store.commit('add', {
        //   value: 5
        // })
        // this.$store.commit({
        //   type: 'add',
        //   value: 5
        // })
      }
    }
  }
</script>
