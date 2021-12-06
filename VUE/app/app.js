const App = {
  data()
  {
    return {
      counter: 42,
      title: {
        hello: 'hello',
        userName: 'Vladislav'
      }
    }
  }
}


const app = Vue.createApp(App)
app.mount('#app')