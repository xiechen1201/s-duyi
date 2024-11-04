<template>
  <div class="wrapper">
    <h1>This is ComponentB component.</h1>
    <div>{{ count }}</div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated } from 'vue'

defineProps({
  count: {
    type: Number,
    default: 0,
  },
})

onBeforeUpdate(() => {
  console.log('ComponentB onBeforeUpdate')
})

onUpdated(() => {
  console.log('ComponentB onUpdated')
})
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid #ccc;
}
</style>
