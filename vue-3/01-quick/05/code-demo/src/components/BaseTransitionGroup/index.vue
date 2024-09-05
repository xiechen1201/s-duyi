<template>
  <button @click="addItem">
    添加一项
  </button>
  <button @click="rvItem">
    删除一项
  </button>
  <TransitionGroup
    name="list"
    tag="ul"
  >
    <li
      v-for="(item, index) in items"
      :key="item"
    >
      <span>{{ item }}</span>
      <i @click="remove(index)">x</i>
    </li>
  </TransitionGroup>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'BaseTransitionGroup'
});

const items = ref([1, 2, 3, 4, 5]);

function addItem() {
  items.value.push(items.value.length + 1);
}

function rvItem() {
  items.value.pop();
}

function remove(index) {
  items.value.splice(index, 1);
}
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
