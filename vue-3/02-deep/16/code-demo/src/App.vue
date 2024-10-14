<!-- <template>
  <div>
    <p>输入的内容为：{{ message }}</p>
    <input v-model="message" type="text" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('hello world')
</script> -->

<!-- <template>
  <div class="app-container">
    <h1>请打分：</h1>
    <RatingComponent v-model="rating" />
    <p>您的评分：{{ rating }} / 5</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import RatingComponent from './components/RatingComponent.vue'

const rating = ref(3)
</script> -->

<template>
  <div class="app-container">
    <h1>请打分：</h1>
    <!-- 这是一个具名的 v-model -->
    <RatingComponent v-model:title="rating" />
    <p>您的评分：{{ rating }} / 5</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import RatingComponent from './components/RatingComponent.vue'

const rating = ref(3)
</script>
