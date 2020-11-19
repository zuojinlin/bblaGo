<!--
 * @Author: your name
 * @Date: 2020-11-12 16:08:46
 * @LastEditTime: 2020-11-19 14:47:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-bbla/src/views/Home.vue
-->
<template>
  <div @click="handleClick">欢迎,{{ user.grandfa }}</div>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <ElCard class="box-card">
            <template #header class="clearfix">
              <ElLink @click="handleClick">Vue3 组件传值</ElLink>
            </template>
            <div>grandfa：{{ user.grandfa }}</div>
            <div>parent to child：{{ user.child }}</div>
            <div>parent to son：{{ user.son }}</div>
            <div class="child-box">
              <Child :name="user.child" @emitformchild="formChildMsg">
                <div>
                  <div class="child-box">
                    <Son @emitformson="formSonMsg"></Son>
                  </div>
                  <div class="child-box">
                    <Son @emitformson="formSonMsg"></Son>
                  </div>
                </div>
              </Child>
            </div>
          </ElCard>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <TodoList></TodoList>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </el-main>
</template>

<script>
import { reactive, provide } from 'vue'
import { useRoute } from 'vue-router'
import Child from './family/Child.vue'
import Son from './family/Son.vue'
import TodoList from './TodoList/TodoList.vue'

export default {
  components: {
    Child,
    Son,
    TodoList,
  },
  setup() {
    const route = useRoute()

    const user = reactive({
      grandfa: route.params.msg || 'lamjl',
      child: 'Child',
      son: 'Son',
    })

    provide(
      'grandfa',
      reactive({
        name: 'grandfa',
        user,
      }),
    )
    const handleClick = function () {
      console.log('el3-link')
    }
    const formChildMsg = (val) => {
      user.child = val
    }
    const formSonMsg = (val) => {
      user.son = val
    }
    return { user, handleClick, formSonMsg, formChildMsg }
  },
}
</script>

<style scoped>
.grid-content {
  max-height: 472.86px;
}
.box-card {
  background-color: #f56c6c;
}
.child-box {
  margin-top: 5px;
  padding: 20px;
  border: 1px solid #ffffff;
}
</style>
