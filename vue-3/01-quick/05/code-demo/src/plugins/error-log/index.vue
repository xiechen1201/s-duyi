<template>
  <h2>错误日志</h2>
  <ul>
    <li
      v-for="item in errors"
      :key="item.time"
    >
      {{ item.time }} - {{ item.message }}
    </li>
  </ul>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

defineOptions({
  name: 'ErrorLog'
});

// 用于存储错误信息
const errors = reactive([]);

onMounted(() => {
  // 改写 console.error 方法；
  const oldConsoleError = window.console.error;

  window.console.error = function (...args) {
    // 记录错误信息
    errors.push({
      message: args[0],
      time: new Date().toDateString()
    });

    oldConsoleError.apply(window, args);
  };
});
</script>
