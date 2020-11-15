<!--
 * @Author: your name
 * @Date: 2020-11-13 15:05:49
 * @LastEditTime: 2020-11-15 17:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-bbla/src/views/User/Register.vue
-->
<template>
  <div class="b-welcome">
    <div class="b-title">欢迎~</div>
    <div>
      <input v-model="form.user" placeholder="用户名" type="text" />
      <input v-model="form.password" placeholder="密码" type="password" />
      <div><ElButton @click="register">注册</ElButton></div>
    </div>
  </div>
</template>
<script>
import { reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const { ctx } = getCurrentInstance()
    const form = reactive({
      user: '',
      password: '',
    })
    // register
    const register = async function () {
      const res = await ctx.$axios.post('/api/register', form)
      if (res.data.code === 1) {
        console.log(res.data.msg)
        router.push({
          name: 'Login',
          params: { msg: res.data.msg },
        })
      } else {
        console.log(res.data.msg)
      }
    }
    return { form, register }
  },
}
</script>
