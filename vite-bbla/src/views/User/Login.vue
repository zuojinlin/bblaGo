<template>
  <div class="b-welcome">
    <div class="b-title">欢迎~</div>
    <div>
      <div>用户：<input v-model="form.user" placeholder="用户名" type="text" /></div>
      <div>密码：<input v-model="form.password" placeholder="密码" type="password" /></div>
      <div><button @click="login">登录</button></div>
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
    // login
    const login = async function () {
      const res = await ctx.$axios.post('/api/login', form)
      if (res.data.code === 1) {
        console.log(res.data.msg)
        router.push({
          name: 'Home',
          params: { msg: res.data.msg },
        })
      } else {
        console.log(res.data.msg)
      }
    }
    // register
    const register = async function () {
      router.push({
        name: 'Register',
      })
    }

    const submit = function () {
      if (form.user === 'lamjl' && form.password === '123456') {
        console.log('登录成功')
        router.push({
          path: '/home',
        })
      }
    }
    return { form, submit, login, register }
  },
}
</script>
