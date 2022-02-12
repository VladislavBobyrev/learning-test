<template>
    <img alt="Vue logo" src="./assets/logo.png">
  
  <section class="news">
    <app-news 
    v-for="item in news"
    :key="item"
    :title="item"
    >
    </app-news>
  </section>
</template>


<script>
import AppNews from './components/AppNews.vue'

export default {
  data(){
    return {
      now: new Date().toLocaleString(),
      news: [
      'hello vue 3',
      'tesla forward in 2022 years old',
      'javaScript super lang',
      ]
    }
  },
  components: {
    'app-news': AppNews
  }
}

</script>

<style lang="scss">
body{
  background: rgb(39, 39, 41);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dee7f0;
  margin-top: 60px;
}
.news{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  display: grid;
  grid-gap: 20px;
}
.btn{
  border-radius: 5px;
  background: rgb(93, 98, 93);
  padding: 0.5rem 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  color: rgb(26, 29, 34);
}
</style>
