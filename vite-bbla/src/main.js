import { createApp } from 'vue'
import router from '/@/router'
import axios from 'axios'

// import './utils/interceptor'

import App from '/@/App.vue'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')
