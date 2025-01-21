<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>

    <!-- 显示对应的业务组件 -->
    <div class="center">
      <RouterView v-slot="{ Component }">
        <component :is="Component" :seriaNum="1" :status="currentComStatus" />
      </RouterView>
    </div>

    <!-- 编辑面板 -->
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPannel from "@/components/SurveyComs/EditItems/EditPannel.vue";

import { computed, provide } from "vue";
import { ElMessage } from "element-plus";
import { useMaterial } from "@/stores/material";

import { isPicLink } from "@/types";
import type { PicLink } from "@/types";

const store = useMaterial();

type ComsKeys = keyof typeof store.coms;

const currentCom = computed(() => {
  const comInfo = store.coms[store.currentMaterial as ComsKeys];
  return comInfo;
});

const currentComStatus = computed(() => {
  return currentCom.value.status;
});

// 更新仓库组件状态
provide("updateStatus", updateStatus);
function updateStatus(configKey: string, payload?: number | string | boolean | object) {
  switch (configKey) {
    case "title":
    case "desc":
      if (typeof payload !== "string") {
        console.error("Invalid payload type for 'type' or 'desc'. Expected string.");
        return;
      }
      store.setTextStatus(currentCom.value.status[configKey], payload);
      break;
    case "options":
      if (payload !== undefined && typeof payload === "number") {
        // 删除
        const result = store.removeOption(currentCom.value.status[configKey], payload);
        if (result) {
          ElMessage.success("删除成功");
        } else {
          ElMessage.error("至少保留两个选项");
        }
      } else if (payload !== undefined && typeof payload === "object" && isPicLink(payload)) {
        // 说明是在设置图片的链接
        store.setPicLinkByIndex(currentCom.value.status[configKey], payload);
      } else {
        // 新增
        store.addOption(currentCom.value.status[configKey]);
      }
      break;
    case "position":
      if (typeof payload !== "number") {
        console.error("Invalid payload type for 'position'. Expected number.");
        return;
      }
      store.setPosition(currentCom.value.status[configKey], payload);
    case "titleSize":
    case "descSize":
      if (typeof payload !== "number") {
        console.error("Invalid payload type for 'titleSize' or 'descSize'. Expected number.");
        return;
      }
      store.setSize(currentCom.value.status[configKey], payload);
      break;
    case "titleWeight":
    case "descWeight":
      if (typeof payload !== "number") {
        console.error("Invalid payload type for 'titleWeight' or 'descWeight'. Expected number.");
        return;
      }
      store.setWeight(currentCom.value.status[configKey], payload);
      break;
    case "titleItalic":
    case "descItalic":
      if (typeof payload !== "number") {
        console.error("Invalid payload type for 'titleItalic' or 'descItalic'. Expected number.");
        return;
      }
      store.setItalic(currentCom.value.status[configKey], payload);
      break;
    case "titleColor":
    case "descColor":
      if (typeof payload !== "string") {
        console.error("Invalid payload type for 'titleColor' or 'descColor'. Expected string.");
        return;
      }
      store.setColor(currentCom.value.status[configKey], payload);
      break;
  }
}

// 获取文件链接
provide("getLink", getLink);
function getLink(link: PicLink) {
  updateStatus("options", link);
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  // Header 组件高度 50px，h1 高度 50px，上下 margin 20px，最后 20px 是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}

.center {
  width: 550px;
  // 多减去的 60px 是上下的 padding，最后 20px 是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 60px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}

.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
