<template>
  <div>
    <span>鼠标坐标：</span>
    <span>x,{{ x }}</span>
    <span>-</span>
    <span>y,{{ y }}</span>
  </div>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useMouse } from './mouse';
import { useFetch } from './fetch';

defineOptions({
  name: 'BaseComposition'
});

const { x, y } = useMouse();

const url = ref('http://localhost:5173/');
const { data, error } = useFetch(url);

url.value = 'http://www.baidu.com';
</script>

<style lang="scss" scoped></style>
