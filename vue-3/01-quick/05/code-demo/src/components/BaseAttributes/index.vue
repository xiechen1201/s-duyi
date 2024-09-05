<template>
  <MyButton
    id="btn"
    class="my-button"
    data-prop="btn"
  />
</template>

<script setup>
import MyButton from './MyButton.vue';

defineOptions({
  name: 'BaseAttributes'
});
</script>

<style lang="scss" scoped></style>
