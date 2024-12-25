<template>
  <div>
    <button v-show="isContentShown">显示/隐藏</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isContentShown = ref(true);

const toggleShown = () => {
  isContentShown.value = !isContentShown.value;
};

defineExpose({
  toggleShown
});
</script>
