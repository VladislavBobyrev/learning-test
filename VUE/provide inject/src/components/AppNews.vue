<template>
<div id="{{id}}" class="card">
  <h3>{{title}}</h3>

  <app-button
  class="relax"
   @action="open"
   >
   {{isNewsOpen ? 'CLOSE' : 'OPEN'}}
  </app-button>

  <app-button 
    color="danger"
    v-if="wasRead"
    @action="unmark">
    Отметить не прочитаной
  </app-button>

  <div class="text" v-if="isNewsOpen">
    {{text}}
    <hr>
    <app-button 
    class="btn prlimary"
     v-if="!wasRead"
      @action="mark"
      >
      Прочесть новость
      </app-button>
  </div>
  
</div>
</template>

<script>
import AppButton from "./AppButton.vue"

export default {
  //  обьект
  props: {
    wasRead: Boolean,
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
  // emits: ['open-news'],
  emits: {
   
    // если не хотим валидировать
    // 'open-news': null
    'open-news'(num) {
      if(num){
        return true
      }
      console.warn('no data in open news emit')
      return false
    },
    "read-news"(id){
      if(id){
        return true
      }
      console.warn("no properties id for emit read-news")
      return false
    },
     unmark: null,
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
       if(this.isNewsOpen) this.$emit('open-news', 42)
    },
    mark(){
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    unmark() {
      this.$emit("unmark", this.id)
    }
  },
  components:{
    AppButton
  }
}
</script>
