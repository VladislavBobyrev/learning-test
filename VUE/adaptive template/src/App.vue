<template>
<div class="wrapper">
  <header>
    <div>This is hesder</div>
  </header>
  <main>
    <nav>
      <div>This is nav bar</div>
    </nav>
    <section class="example">
      <h1>Main Title</h1>
      <section class="example_items">
      <app-list
      :id="num"
     
      >
      </app-list>
      </section>

    </section>
  </main>
  <footer>
     <div>This is footer</div>
  </footer>
</div>
  
</template>

<script>
import AppList from "./components/AppList.vue"
export default {
  // props:{}
  // emits:{}
  data() {
    return{
      num: [1, 2, 3, 4, 5, 6]
    }
  },
  // computed(){}
  // methods(){}
  // watch(){}
  // render(){}
  components: {
    AppList
  }
}
</script>

<style lang="css">
body{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(12, 12, 25);
  color: rgb(180, 200, 202);
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
    color: rgb(76, 191, 80);
    margin: 0;
    padding: 0;
}
#app{

  display: flex;
  width: 100%;
  justify-content: center;
}
header{
    background: rgb(25, 19, 12);
}
main{
    background: rgb(12, 23, 25);
    display: grid;
    grid-template-columns: 0.3fr 1fr;
}
nav{
    background: rgb(90, 61, 30);
}
footer{
    background: rgb(42, 20, 41);
}
.example_items{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 280px));
  grid-gap: 1rem;
}
.wrapper{
  margin: 0 3rem;
  max-width: 82rem;
  width: 100%;
  display: grid;
  grid-template-rows: 80px 1fr 80px; 
}
.card{
  border-radius: 5px;
  padding: 0.7rem 2rem;
  margin: 1rem;
  color: rgb(164, 165, 138);
  background: rgb(67, 76, 86);
}
.btn{
  padding: 1em 5rem;
  margin: 1rem;
  border-radius: 5px;
  color: aliceblue;
}
.relax{
  background: rgb(100, 120, 140);
}
.text{
  margin: 0 0 4rem 0;
  color: rgb(100, 120, 140);
}
</style>


