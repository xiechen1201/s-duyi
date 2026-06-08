<template>
  <div class="screen-container">
    <div class="screen-wrapper" ref="screenRef">
      <!-- <img class="bg-img" src="@/assets/imgs/bg-main.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResize } from '@/hooks/useResize'

const { screenRef } = useResize({
  refName: 'screenRef',
})
</script>

<style lang="scss" scoped>
.screen-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #110e2b;

  .screen-wrapper {
    width: 1920px;
    height: 1080px;
    position: relative;
    transform-origin: left top;
    transition: all 0.3s;
    background: url('@/assets/imgs/bg-main.jpg') no-repeat;

    .bg-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
