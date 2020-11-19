<!--
 * @Author: your name
 * @Date: 2020-11-17 15:53:43
 * @LastEditTime: 2020-11-19 09:06:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-bbla/src/views/family/Son.vue
-->
<template>
  <div>msg form grandfa： {{ grandfa.user.grandfa }}</div>
  <el-row>
    <el-col :span="20">
      <div class="grid-content bg-purple">
        <el-input v-model="son" type="text" />
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-light">
        <el-button type="success" plain @click="toGrand">click</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { inject, ref } from 'vue'
export default {
  emits: {
    emitformson: (payload) => {
      return payload
    },
  },
  setup(props, { emit }) {
    const grandfa = inject('grandfa', {})
    const son = ref('son')
    const toGrand = function () {
      // emit('emitformson', grandfa.user.son)
      // 问题1：grandfa.user.son从inject注入 修改孙子组件的son 祖父组件的son也会直接跟着变
      // 问题2：直接修改注入的inject信息也可以？ grandfa.user.son = son.value
      grandfa.user.son = son.value
    }
    return { son, toGrand, grandfa }
  },
}
</script>

<style scoped></style>
