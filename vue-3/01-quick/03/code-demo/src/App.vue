<!-- <template>
  <div>{{ name }}</div>
  <div>{{ htmlCode }}</div>
  <div v-html="htmlCode"></div>
</template>

<script setup>
const name = '张三'
const htmlCode = `<div style="color: red;">hello</div>`
</script>

<style lang="scss" scoped></style> -->

<!-- TODO：======================== -->

<template>
  <div v-bind:id="id">hello vue3</div>
  <button :disabled="disabled">点击按钮</button>
  <div v-bind="objectOfAttrs"></div>
</template>

<script setup>
const id = 'my-id'
const disabled = true

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
</script>

