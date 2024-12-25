<!-- <template>
  <div v-if="type === 1">type 的值为 1</div>
  <div v-else-if="type === 2">type 的值为 2</div>
  <div v-else-if="type === 3">type 的值为 3</div>
  <div v-else-if="type === 4">type 的值为 4</div>
  <div v-else>type 的值不是 1、2、3、4</div>
  <button @click="toggleFunc">Toggle</button>
</template>

<script setup>
import { ref } from 'vue'

const type = ref(1)
function toggleFunc() {
  type.value = Math.floor(Math.random() * 5)
}
</script>

<style lang="scss" scoped></style>
 -->

<!-- <template>
  <div>商品列表</div>
  <ul>
    <li v-for="item in goods" :key="item.id">{{ item.name }}-{{ item.price }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const goods = ref([
  { id: 1, name: '商品1', price: 100 },
  { id: 2, name: '商品2', price: 200 },
  { id: 3, name: '商品3', price: 300 },
  { id: 4, name: '商品4', price: 400 },
  { id: 5, name: '商品5', price: 500 }
])
</script>

<style lang="scss" scoped></style> -->

<!-- <template>
  <div v-bind:id>dynamicId</div>
</template>

<script setup>
import { ref } from 'vue'
const id = ref('dynamicId')
</script> -->

<!-- <template>
  <div>{{ count }}</div>
  <button v-on:click="count++">+1</button>
</template>

<script setup>
import { ref } from 'vue';
const count  = ref(0);
</script> -->

<template>
  <div v-html="htmlStr"></div>
</template>

<script setup>
import { ref } from 'vue'

const htmlStr = ref('<div>hello</div>')
</script>
