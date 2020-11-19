<template>
  <div>
    <el-card class="box-card">
      <template #header class="clearfix">
        <span>Todos</span>
      </template>
      <el-input v-model="todo" type="text" @keyup.enter="addTodo">
        <template #suffix class="el-input__icon el-icon-check"></template>
      </el-input>
      <div class="todolist">
        <div v-for="item in todos" v-show="todos.length" :key="item.id" class="todls">
          <div class="view" @click="toComplated(item)">
            <span :class="{ check: item.complated }" class="checkBox">
              <i class="el-icon-check"></i>
            </span>
            <label :class="{ label: item.complated }">{{ item.title }}</label>
            <el-button class="destroy" type="text" @click="removeTodo(item)">
              <i class="el-icon-close"></i>
            </el-button>
          </div>
        </div>
      </div>
      <div class="total">{{ complated }} left</div>
      <div class="removeComplate" @click="removeComplate">removeComplate</div>
    </el-card>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      todo: '',
      todos: [],
    })
    const addTodo = () => {
      let value = state.todo && state.todo.trim()
      if (!value) {
        return
      }
      state.todos.push({
        id: state.todos.length + 1,
        title: value,
        complated: false,
      })
      state.todo = ''
    }
    const removeTodo = (todo) => {
      state.todos = state.todos.filter((i) => todo != i)
    }
    const toComplated = (item) => {
      item.complated = !item.complated
    }
    const removeComplate = () => {
      state.todos = state.todos.filter((i) => !i.complated)
    }
    const complated = computed(() => state.todos.filter((todo) => !todo.complated).length)
    return { ...toRefs(state), addTodo, complated, removeTodo, toComplated, removeComplate }
  },
}
</script>

<style lang="scss" scoped>
.box-card {
  background-color: #67c23a;
  position: relative;
  height: 472.86px;
  .todolist {
    margin-top: 5px;
    margin-bottom: 5px;
    max-height: 303.86px;
    overflow: auto;
    .todls {
      background-color: #fff;
      border: 1px solid #dcdfe6;
      line-height: 40px;
      padding: 0px 15px;
      border-radius: 4px;
      color: #909399;
      .checkBox {
        position: relative;
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
        width: 25px;
        height: 25px;
        text-align: center;
        border-radius: 50%;
        // border: 1px solid #000;
        .el-icon-check {
          position: absolute;
          top: 5px;
          left: 5px;
        }
      }
      .check {
        color: #fff;
        background: #67c23a;
      }
      .label {
        color: #f56c6c;
        text-decoration: line-through;
      }
      .destroy {
        float: right;
      }
    }
  }
  .total {
    color: #161616;
    position: absolute;
    bottom: 10px;
    left: 15px;
  }
  .removeComplate {
    color: #161616;
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
}
</style>
