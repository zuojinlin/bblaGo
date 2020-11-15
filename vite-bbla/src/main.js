import { createApp } from 'vue'
import router from '/@/router'
import axios from 'axios'

// import './utils/interceptor'
// import style
import 'element3/lib/theme-chalk/index.css'
// 按需引入
// import {
//   ElButton,
//   ElTabs,
//   ElFormItem,
//   ElInput,
//   // ...
// } from 'element3'
// 全量加载
import Element3 from 'element3'
import App from '/@/App.vue'
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.use(Element3)

// app.use(ElTabs).use(ElButton).use(ElInput).use(ElFormItem)
app.mount('#app')
