<template>
  <div>
    username: <input v-model="form.username" type="text">
    password: <input v-model="form.password" type="password">
    <button @click="submit">登录</button>
    <button>注册</button>
  </div>
</template>
<script>
import {reactive, computed} from 'vue'
export default {
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })
    const submit = function() {
      if(form.username === 'lamjl' && form.password === '123456') {
        console.log('hello vue3!')
        this.$router.push({
          path: '/home',
          params: {form}
        })
      }
    }
    return {form, submit}
  }
}
</script>