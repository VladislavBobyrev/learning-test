<template>
  <div class="container">
    <div class="card">
      <!-- <h1 v-color:color="myColor">Directive</h1> -->
      <h1 v-color:[type]="myColor">Directive</h1>
    </div>
    <div class="card">
      <h3>Active input default</h3>
      <input type="text" id="message" v-focus>
      <label for="message">Your messsage</label>
    </div>
    <hr/>
    <button class="btn" @click="myColor='barkblue'">Color blue</button>
    <button class="btn" @click="type = type === 'color' ? 'background' : 'color'">Change type</button>
    {{type}}
  </div>
</template>

<script>
import colorDerective from "./colorDerective"

export default {
  directives:{
  color: colorDerective,
  focus: {
    mounted(el){
      el.focus()
    }
  }, 
},
  data(){
    return{
      myColor:'darkred',
      type: 'color'
    }
  },

}
</script>

<style>

</style>