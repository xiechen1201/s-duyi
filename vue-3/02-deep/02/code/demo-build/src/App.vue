<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <!-- 使用 v-for 遍历 products 数组，渲染每个商品的信息 -->
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  { name: '键盘', price: 99.99 },
  { name: '鼠标', price: 59.99 },
  { name: '显示器', price: 299.99 }
]);
</script>

<style scoped></style>
