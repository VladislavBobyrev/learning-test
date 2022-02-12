<template>
<div class="container">
  <title class="title">Время мудрых советов {{time}}</title>
  <app-news  v-for="item in news"
  :key="item.id"
  :title='item.title'
  :id='item.id'
  :text='item.text'
  :is-open='item.isOpen'
  >
  </app-news>
  </div>
</template>

<script>
import AppNews from './components/AppNews.vue'
export default {
  // метод
  data() {
    return{
      time: new Date().toLocaleTimeString,
      news: [
        {
          title: 'Новости в мире 2022',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique iste provident dolores odit eligendi neque libero dolorum? Necessitatibus cupiditate ipsa voluptatum rem repudiandae delectus mollitia fugiat repellendus hic eaque.',
          id: 1,
          isOpen: false
        },
        {
          title: 'Vue 3 мудрое решение',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique iste provident dolores odit eligendi neque libero dolorum? Necessitatibus cupiditate ipsa voluptatum rem repudiandae delectus mollitia fugiat repellendus hic eaque.',
          id: 2,
          isOpen: true
        },        
        {
          title: 'Бизнесс выходит в топ',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique iste provident dolores odit eligendi neque libero dolorum? Necessitatibus cupiditate ipsa voluptatum rem repudiandae delectus mollitia fugiat repellendus hic eaque.',
          id: 3
        },
      ]
    }
  },
  // обьект
  components:{
   'app-news' : AppNews
  }
}
</script>

<style lang="css">
body{
  background: rgb(12, 12, 25);
  color: rgb(180, 200, 202);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
}
.container{
  margin: 0 3rem;
  padding: 7rem 0;
  max-width: 62rem;
}
</style>