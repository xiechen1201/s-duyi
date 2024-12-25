<template>
  <div>
    <div>{{ count }}</div>
    <button @click="onCliclAddNumBtn">Add Num</button>
  </div>
  <ComponentB :count />
</template>

<script setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue'
import ComponentB from '@/components/ComponentB.vue'

const count = ref(0)

function onCliclAddNumBtn() {
  count.value++
}

onBeforeUpdate(() => {
  console.log('ComponentA onBeforeUpdate')
})

onUpdated(() => {
  console.log('ComponentA onUpdated')
})
</script>

<style lang="scss" scoped></style>
