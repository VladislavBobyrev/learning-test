const App = {
  data()
  {
    return {
      counter: 42
    }
  }
}


const app = Vue.createApp(App)
app.mount('#app')