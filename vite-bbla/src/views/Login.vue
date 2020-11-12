<template>
  <div>
    用户：<input v-model="form.user" type="text">
    密码：<input v-model="form.password" type="password">
    <button @click="submit">登录</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const form = reactive({
      user: '',
      password: ''
    })
    const submit = function() {
      if(form.user === 'lamjl' && form.password === '123456') {
        console.log('登录成功')
        router.push({
          path: '/home'
        })
      }
    }
    return {form, submit}
  }
}
</script>