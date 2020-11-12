import { createApp } from 'vue'
import axios from 'axios'
// Vue.prototype.$axios = axios
const app = createApp()
app.config.globalProperties.$axios = axios
export default axios
