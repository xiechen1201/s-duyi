<template>
  <div>
    <!-- Header -->
    <div class="header">
      <BaseHeader />
    </div>

    <!-- 编辑器主体 -->
    <div class="container">
      <LeftSide />
      <RightSide />
    </div>

    <div>
      <ContentCenter />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Common/Header.vue";
import LeftSide from "./LeftSide/index.vue";
import RightSide from "./RightSide.vue";
import ContentCenter from "./ContentCenter.vue";
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 10;
}

.container {
  width: calc(100vw - 40px);
  padding: 20px;
  // Header的高度50px，上下padding 20px
  height: calc(100vh - 50px - 40px);
  background: url("@/assets/imgs/editor_background.png");
  position: fixed;
  top: 50px;
}
</style>
