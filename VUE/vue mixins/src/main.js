import { createApp } from 'vue'
import App from './App.vue'
import './style-dark.css'

const alertMixin = {
  emits:['close'],
  props:{
      title: String,
      text: String,
      closable:{
      type:Boolean,
      required:false,
      default:false,
    },
      type: {
      type: String,
       default: 'primary',
       validator(val){
       return ['primary', 'danger', 'warning'].includes(val)
       }
    }
  },
  }
createApp(App)
    .mixin(alertMixin)
  .mount('#app')
