<template>
    <div class="form-control" :class="{invalid: error}">
       <label :for="id" >{{lable}}</label>
       <input 
        type="text"
        :id='id'
        :class="{invalid: error}"
        :placeholder="placeholder"
        :value="value"
        @input="change"
       >
         <small 
          v-if="error" 
          :class="{error: error}"
          >
          {{error}}
          </small>
     </div>
</template>

<script>
export default {
  emits: ['update:value'],
  props:{
    value: String,
    error: String,
    lable: String,
    placeholder: String,
  },
  data(){
    return{
      id: 'input-' + Math.random()
    }
  },
  methods: {
    change(e)
     {
      this.$emit('update:value', e.target.value)
      console.log(e.target.value)
     }
    
  }
}
</script>
