import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import './style.css'

createApp(App).use(store).mount('#app')
