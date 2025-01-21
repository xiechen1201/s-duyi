<template>
  <ButtonGroup :title :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="onClickBtn(0)">
        <FontAwesomeIcon icon="bold" size="lg" />
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="onClickBtn(1)">
        <FontAwesomeIcon icon="bold" size="sm" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from "./coms/ButtonGroup.vue";

import { computed, inject } from "vue";
import type { InjectUpdateStatus } from "./types";

const props = defineProps<{
  configKey: string;
  id: string;
  status: string[];
  currentStatus: number;
}>();

const updateStatus = inject<InjectUpdateStatus>("updateStatus", () => {});

const title = computed(() => {
  return props.configKey === "descWeight" ? "标题加粗" : "描述加粗";
});

function onClickBtn(index: number) {
  updateStatus(props.configKey, index);
}
</script>

<style scoped></style>
