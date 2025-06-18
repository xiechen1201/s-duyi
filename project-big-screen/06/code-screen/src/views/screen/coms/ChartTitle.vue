<template>
  <div class="screen-title">
    <slot>{{ title }}</slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.screen-title {
  position: relative;
  padding-left: 20px;
  color: var(--ds-screen-text-color);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: var(--ds-screen-text-color);
  }
}
</style>
