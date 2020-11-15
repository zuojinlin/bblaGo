<template>
  <div class="b-welcome">
    <div class="b-title">欢迎~</div>
    <div>
      <ElFormItem>
        <ElInput v-model="form.user" placeholder="用户名" type="text" />
      </ElFormItem>
      <ElFormItem>
        <ElInput v-model="form.password" placeholder="密码" type="password" />
      </ElFormItem>
      <div>
        <ElButton v-if="isLogin" class="loginBtn" type="primary" @click="login">登录</ElButton>
        <ElButton v-else @click="register">注册</ElButton>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const { ctx } = getCurrentInstance()
    const isLogin = ref(true)
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
    return { form, login, register, isLogin }
  },
}
</script>
<style>
.b-welcome {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 20px;
  width: 400px;
  border: 1px solid #ccc;
  margin-left: -200px;
  margin-top: -200px;
  /* margin-top: -50%; */
}
.b-welcome .b-title {
  padding: 10px;
}
.loginBtn {
  width: 100%;
}
</style>
