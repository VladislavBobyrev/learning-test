<template>
  <label for="sity" >are your sity?</label>
  <input id="sity" name="sity" list="list-sity">

  <datalist id="list-sity" v-for="item in sity">
    <option value="{{item}}"></option>  
  </datalist>
</template>

<script>
export default {
  data() {
    return {
      sity: ['moscow', 'america', 'france', 'egypt', 'london', 'germany', 'belarus', 'ukrain']
    }
  },
}
</script>