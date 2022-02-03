<template>
  <div class="card" >
    <h2>{{title}} : {{item}}</h2>
    <button class="btn" @click="isOpen = !isOpen">open</button>
    <div class="card__text" v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum nisi tenetur deleniti, recusandae delectus adipisci harum qui vero porro ex illum quam nemo ducimus impedit necessitatibus nam quaerat dolorum.</div>
  </div>
</template>
<script>


export default {
  props: ['title'],
  data(){
    
    return {      
      item: 'Заголовок',
      isOpen:false
    }
  }

}
</script>
