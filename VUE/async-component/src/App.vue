<template>
 <asunc-component></asunc-component>
  <br/>
  <app-button 
  ref="myBtn"
  >
    button 1
  </app-button>
  <app-button 
  class="primary"
  ref="myBtn"
  >
    button 2
  </app-button>
</template>

<script>
import AppButton from "./components/AppButton.vue"
export default {
  components: {
  AppButton
},
mounted() {
  console.log(this.$refs.myBtn.appButtonLog())
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
