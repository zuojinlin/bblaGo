<template>
  <div>
    用户：<input v-model="form.user" type="text" /> 密码：<input
      v-model="form.password"
      type="password"
    />
    <button @click="login">登录</button>
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
    // 获取购物车
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
    const submit = function () {
      if (form.user === 'lamjl' && form.password === '123456') {
        console.log('登录成功')
        router.push({
          path: '/home',
        })
      }
    }
    return { form, submit, login }
  },
}
</script>
