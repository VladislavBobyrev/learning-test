import { createApp } from 'vue'
import App from './App.vue'
import './style-dark.css'
import transpilitPlugin from './transpilitPlugin'

const app = createApp(App)
app.use(transpilitPlugin, {test : 1})
app.mount('#app')
