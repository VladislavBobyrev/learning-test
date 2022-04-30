<template>
<TheNavbar/>
  <div class="container with-nav">
    <div class="card">
      <h1 >{{uppercaseTItle}}</h1>
      <h2>Счетчик {{counter}} * 2 =
({{doubleCounter }})

      </h2>
    </div>
    <button class="btn" @click="add">increment +1</button>
    <button class="btn danger" @click="incrementAsync({
      value: 100,
      dalay: 300
    })">incrementAsync +100</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import TheNavbar from './TheNavbar'
export default {
  components: {TheNavbar},
  computed: {
    ...mapGetters(['uppercaseTItle']),
    ...mapGetters('count', ['counter', 'doubleCounter',]),
  },
  methods: {
    ...mapMutations({
      add: 'count/increment'
    }),
    ...mapActions('count', ['incrementAsync'])
}
}
</script>
