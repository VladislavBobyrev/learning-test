<template>
<div id="{{id}}" class="card">
  <h3>{{title}}</h3>
  <button class="btn" @click="open">
    {{isNewsOpen ? "CLOSE" : "OPEN"}}
  </button>
  <div class="text" v-if="isNewsOpen">{{text}}</div>
  
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
    isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen     
       if(this.isNewsOpen) this.$emit('open-news', 'передача информации родительскому компоненту проша успешно ', 'двустороннее связывание настроено  ')
    }
  }
}
</script>
