<template>
  <ul v-if="people.length !== 0">
    <li class="card" 
    v-for="person in people"
    :key="person.id"
    >
      {{person.firstName}}
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
  emits:['load'],
  props: ['people']
}
</script>

<style>

</style>