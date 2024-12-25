<!-- <template>
  <div>
    <span v-for="star in 5" :key="star" class="star" @click="setRating(star)">
      {{ model >= star ? '★' : '☆' }}
    </span>
  </div>
</template>

<script setup>
// 接收父组件传递过来的mode属性
const model = defineModel()

function setRating(star) {
  model.value = star
}
</script> -->

<template>
  <div>
    <span v-for="star in 5" :key="star" class="star" @click="setRating(star)">
      {{ model >= star ? '★' : '☆' }}
    </span>
  </div>
</template>

<script setup>
// 接收父组件传递过来的mode属性
// 这里获取状态的时候就需要指定一下名字
const model = defineModel("title")

function setRating(star) {
  model.value = star
}
</script>

<style scoped>
.rating-container {
  display: flex;
  font-size: 24px;
  cursor: pointer;
}

.star {
  margin-right: 5px;
  color: gold;
}

.star:hover {
  color: orange;
}
</style>
