<template>
  <ul 
  class="card"
  v-if="people.length !== 0">
    <li class="card jc-sb" 
    v-for="person in people"
    :key="person.id"
    >
      {{person.firstName}}
      <button class="btn danger" @click="$emit('remove', person.id) ">delet</button>
    </li>
  </ul>

  <div class="card center" v-else>
    <h3>person is not ready</h3>
    <button c
      lass="btn"
      @click="$emit('load')"
      >
      download list
    </button>
  </div>
</template>

<script>
export default {
  emits:['load', 'remove'],
  props: ['people']
}
</script>

<style>

</style>