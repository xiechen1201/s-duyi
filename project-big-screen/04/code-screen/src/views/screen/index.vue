<template>
  <div class="screen screen-container">
    <div class="screen-wrapper" ref="screenRef">
      <!-- 内容显示区 -->
      <ScreenHeader />
      <div class="screen-main">
        <div class="screen-left"></div>
        <div class="screen-center"></div>
        <div class="screen-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScreenHeader from './coms/ScreenHeader.vue'

import { useResize } from '@/hooks/useResize'

const { screenRef } = useResize({
  refName: 'screenRef',
})
</script>

<style lang="scss" scoped>
.screen {
  --ds-screen-width: 1920px;
  --ds-screen-height: 1080px;
  --ds-header-height: 85px;
  --ds-block-bg: #222733;
  --ds-screen-bg: #110e2b;
  --ds-screen-text-color: #fff;
}

.screen-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // background-color: var(--ds-screen-bg);

  .screen-wrapper {
    width: var(--ds-screen-width);
    height: var(--ds-screen-height);
    position: relative;
    transform-origin: left top;
    transition: all 0.3s;
    background: url('@/assets/imgs/bg-main.jpg') no-repeat center/cover;

    .screen-main {
      position: relative;
      display: flex;
      height: calc(100% - var(--ds-header-height));
      border: 1px solid red;

      .screen-center {
        flex: 1;
        // width: calc(var(--ds-screen-width) - 1000px);
        border: 1px solid red;
      }

      .screen-left,
      .screen-right {
        width: 460px;
        border: 1px solid red;
      }
    }
  }
}
</style>
