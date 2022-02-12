<template>
  <div class="conteiner">

    <div class="card">
      <h2>Slot</h2>
    </div>

    <app-slot>
      <p>Hello i am lorem</p>

      <template #header>
        <h3>This is Title</h3>
      </template>

      <template #footer>
        <hr/>
        <h3>This is footer</h3>
      </template>

    </app-slot>

  </div>  
</template>

<script>
import AppSlot from "./AppSlot.vue"

export default {
  components: {
    AppSlot
  }
}
</script>

<style lang="css">
body{
  background: rgb(12, 12, 25);
  color: rgb(180, 200, 202);
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
    color: rgb(76, 191, 80);
}
.container{
  margin: 0 3rem;
  padding: 7rem 0;
  max-width: 62rem;
}
.prlimary{
  background: rgb(16, 140, 66);
}
.danger{
  background: rgb(18, 101, 120);
}
.btn{
  padding: 1em 5rem;
  margin: 1rem;
  border-radius: 5px;
  color: aliceblue;
}
.relax{
  background: rgb(100, 120, 140);
}
.text{
  margin: 0 0 4rem 0;
  color: rgb(100, 120, 140);
}
</style>