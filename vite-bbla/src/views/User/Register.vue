<template>
  <div class="b-welcome">
    <div class="b-title">欢迎~</div>
    <div>
      <div>用户：<input v-model="form.user" placeholder="用户名" type="text" /></div>
      <div>密码：<input v-model="form.password" placeholder="密码" type="password" /></div>
      <div><button @click="register">注册</button></div>
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
