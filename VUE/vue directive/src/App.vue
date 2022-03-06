<template>
  <div class="container">
    <div class="card">
      <h1>Directive</h1>
    </div>
    <div class="card">
      <h3>Active input default</h3>
      <input type="text" id="message" v-focus>
      <label for="message">Your messsage</label>
    </div>
  </div>
</template>

<script>
export default {
directives:{
  focus: {
    mounted(el){
      el.focus()
    }
  }
}
}
</script>

<style>

</style>