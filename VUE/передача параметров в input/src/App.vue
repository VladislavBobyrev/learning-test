<template>

<h1>HEllo I am vue component</h1>

<app-list></app-list>
</template>

<script>
import AppList from './AppList.vue'


export default {
  components: { AppList },
component:{
  AppList
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


