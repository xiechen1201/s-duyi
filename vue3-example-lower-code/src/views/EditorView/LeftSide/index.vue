<template>
  <div class="left-side-container flex">
    <div class="tabs">
      <!-- 题型 -->
      <div
        class="tab-item"
        :class="{
          'tab-show': route.name === 'survey-type'
        }"
        @click="switchEditor"
      >
        <el-icon><Memo /></el-icon>
        <span class="tab-item-title mt-5">题型</span>
      </div>

      <!-- 大纲 -->
      <div
        class="tab-item"
        :class="{
          'tab-show': route.name === 'outline'
        }"
        @click="switchOutline"
      >
        <el-icon><Document /></el-icon>
        <span class="tab-item-title mt-5">大纲</span>
      </div>
    </div>

    <RouterView class="tab-pane" />
  </div>
</template>

<script setup lang="ts">
import { Memo, Document } from "@element-plus/icons-vue";

import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const switchEditor = () => {
  router.push({ name: "survey-type" });
};

const switchOutline = () => {
  router.push({ name: "outline" });
};
</script>

<style scoped lang="scss">
.left-side-container {
  width: 300px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  left: 20px;
  top: 70px;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);

  > .tabs {
    width: 20%;
    height: 100%;
    border-right: 1px solid var(--border-color);

    > .tab-item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--font-color-light);
      text-decoration: none;
      cursor: pointer;

      > .tab-item-title {
        font-size: var(--font-size-base);
      }
    }

    > .tab-show {
      color: var(--primary-color);
    }
  }

  > .tab-pane {
    width: 80%;
    // 高度需要减去padding部分，否则会溢出
    height: calc(100% - 50px);
    padding: 25px;
    overflow-y: scroll;
  }
}
</style>
