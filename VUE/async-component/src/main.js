import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'




const app = createApp(App)

//global
// асинхронная загрузка компонента не влеченного в бандл
app.component('asunc-component', defineAsyncComponent(() =>
  {
    return import('./AsuncComponent')
  }))
  
app.mount('#app')
