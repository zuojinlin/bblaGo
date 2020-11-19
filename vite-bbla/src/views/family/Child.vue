<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-input v-model="val" type="text" @input="toParent" />
      </div>
    </el-col>
  </el-row>
  <slot></slot>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  props: {
    name: {
      type: String,
      default: 'aaa',
    },
  },
  emits: {
    emitformchild: (payload) => {
      return payload
    },
  },
  setup(props, { emit }) {
    const val = ref('')
    const toParent = (evt) => {
      // debugger
      emit('emitformchild', val.value)
    }
    return { toParent, val }
  },
}
</script>

<style scoped></style>
