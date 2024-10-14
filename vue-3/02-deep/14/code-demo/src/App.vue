<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('张三')
const age = ref(18)
</script>
