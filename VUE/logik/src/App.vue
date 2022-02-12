<template>
<div class="container">
  <h1 class="title">Время мудрых советов {{time}}</h1>
  <span>isOpen news : {{openRate}}| is read news: {{readRate}}</span>

  <app-news  v-for="item in news"
  :key="item.id"
  :title='item.title'
  :id='item.id'
  :text='item.text'
  :is-open='item.isOpen'
  :wasRead = 'item.wasRead'
  @open-news='openNews'
  @read-news="readNews"
  @unmark="unreadNews"
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
      time: new Date().toLocaleTimeString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Новости в мире 2022',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique iste provident dolores odit eligendi neque libero dolorum? Necessitatibus cupiditate ipsa voluptatum rem repudiandae delectus mollitia fugiat repellendus hic eaque.',
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: 'Vue 3 мудрое решение',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique iste provident dolores odit eligendi neque libero dolorum? Necessitatibus cupiditate ipsa voluptatum rem repudiandae delectus mollitia fugiat repellendus hic eaque.',
          id: 2,
          isOpen: true,
             wasRead: false,
        },        
        {
          title: 'Бизнесс выходит в топ',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique iste provident dolores odit eligendi neque libero dolorum? Necessitatibus cupiditate ipsa voluptatum rem repudiandae delectus mollitia fugiat repellendus hic eaque.',
          id: 3,
             wasRead: true,
        },
      ]
    }
  },
  // обьект
  methods: {
    openNews(data){
      this.openRate++
      console.log(data)
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
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