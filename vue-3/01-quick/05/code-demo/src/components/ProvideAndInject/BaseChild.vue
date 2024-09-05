<template>
  <span>{{ name }}</span>
  <span>{{ age }}</span>
  <button @click="changeUserName">
    更新 provide 数据
  </button>
</template>

<script setup>
import { inject } from 'vue';

const name = inject('name');
const changeUserName = inject('changeUserName');
const age = inject('age', 18);
</script>

<style lang="scss" scoped></style>
