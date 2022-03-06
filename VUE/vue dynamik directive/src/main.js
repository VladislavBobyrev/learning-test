import { createApp } from 'vue'
import App from './App.vue'
import './style-dark.css'

createApp(App)
  // Global directive
  // .directive('focus', {
  //   mounted(val)
  //   {
  //    val.focus()
  //   }
  // })
  .mount('#app')
