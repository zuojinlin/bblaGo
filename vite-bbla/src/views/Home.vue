<template>
  <div>{{ user.msg }}</div>
</template>

<script>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const user = reactive({
      msg: route.params.msg,
    })
    return { user }
  },
}
</script>

<style scoped></style>
