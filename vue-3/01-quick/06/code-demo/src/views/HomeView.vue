<template>
  <h1>HomeView</h1>
  <div>
    <span>{{ counter.count }}</span>
    <span>--</span>
    <span>{{ counter.doubleCount }}</span>
    <button @click="counter.increment">更新</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<style lang="scss" scoped></style>
