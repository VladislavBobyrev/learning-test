<template>
<div id="{{id}}" class="card">
  <h3>{{title}}</h3>
  <button class="btn" @click="isOpen = !isOpen" >Open moore news</button>
  <div class="text" v-if="isOpen">{{text}}</div>
  
</div>
</template>

<script>
export default {
  //  обьект
  props: {
    title:{
      type: String,
      // указываем обязательно ли нам принимать это свайство
      requred: true
    },
    id:{
      type: Number,
      requred: true
    },
    text: String,
    isOpen: {
     
      type: Boolean,
       // не обязателное свайство
      requred: false,
      // если параметр не обязательный то можно поставить дефолтное положение
      default: true,
      // валидатор всегда возвращает либо true
      validator(value){
        return value === true || value === false
      }
    }
  },
  //  метод
  data(){
    return {
      // isOpen: false
    }
  }
}
</script>
