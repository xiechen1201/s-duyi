<template>
  <div class="screen screen-container">
    <div class="screen-wrapper" ref="screenRef">
      <!-- 内容显示区 -->
      <ScreenHeader />
      <div class="screen-main">
        <div class="screen-left">
          <Left1 />
        </div>
        <div class="screen-center"></div>
        <div class="screen-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScreenHeader from './coms/ScreenHeader.vue'
import Left1 from './coms/Left1.vue'

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
  --ds-block-bg: #16103B;
  --ds-screen-bg: #110e2b;
  --ds-screen-text-color: #fff;
}

.screen-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--ds-screen-bg);

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

      .screen-center {
        flex: 1;
      }

      .screen-left,
      .screen-right {
        width: 460px;
      }
    }
  }
}
</style>
