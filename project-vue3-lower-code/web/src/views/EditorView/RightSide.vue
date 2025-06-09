<template>
  <div class="right-side-container">
    <div
      v-if="store.currentComponentIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击题目进行编辑
    </div>
    <div v-else>
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPannel from "@/components/SurveyComs/EditItems/EditPannel.vue";
import { ElMessage } from "element-plus";

import { computed, provide } from "vue";
import { useEditoeStore } from "@/stores/editor";
import { changeEditorShowStatus } from "@/utils";
import { isPicLink } from "@/types";

const store = useEditoeStore();
const currentCom = computed(() => store.coms[store.currentComponentIndex]);
const currentComStatus = computed(() => currentCom.value.status);

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
      store.setCurrentStatus(currentCom.value.status[configKey], payload);
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
    case "options":
      if (!("options" in currentComStatus.value)) {
        return false;
      }
      if (payload !== undefined && typeof payload === "number") {
        // 删除
        const result = store.removeOption(currentComStatus.value[configKey], payload);
        if (result) {
          ElMessage.success("删除成功");
        } else {
          ElMessage.error("至少保留两个选项");
        }
      } else if (payload !== undefined && typeof payload === "object" && isPicLink(payload)) {
        // 说明是在设置图片的链接
        store.setPicLinkByIndex(currentComStatus.value[configKey], payload);
      } else {
        // 新增
        store.addOption(currentComStatus.value[configKey]);
      }
      break;
    case "type":
      if (!("type" in currentComStatus.value) || typeof payload !== "number") {
        return false;
      }
      changeEditorShowStatus(currentComStatus.value, payload);
      store.setCurrentStatus(currentComStatus.value.type, payload);
      break;
  }
}
</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
}

.content {
  height: 100%;
}
</style>
