<template>
  <BaseChild />
</template>

<script setup>
import { provide, ref } from 'vue';
import BaseChild from './BaseChild.vue';

defineOptions({
  name: 'ProvideAndInject'
});

let userName = ref('这是父组件提供的数据：张三');
function changeUserName(){
    userName.value = '李四';
}

provide('name', userName);
provide('changeUserName', changeUserName);
</script>

<style lang="scss" scoped></style>
