<template>
  <div class="mx-auto text-center p-5">
    <h1 class="font-bold text-3xl text-red-400">Page 3</h1>
    <input type="text" class="rounded-md border-2 mt-5 p-3 w-1/2" />
    <div class="mt-5">
      <button class="focus:outline-none" @click="count--">-</button>
      <span class="mx-5 font-bold text-2xl align-middle">{{ count }}</span>
      <button class="focus:outline-none" @click="count++">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<script>
export default {
  name: 'page3'
}
</script>

<style scoped></style>