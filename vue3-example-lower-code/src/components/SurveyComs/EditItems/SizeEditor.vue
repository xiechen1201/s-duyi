<template>
  <ButtonGroup :title :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="onClickBtn(0)">
        <FontAwesomeIcon icon="font" size="lg" />
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="onClickBtn(1)">
        <FontAwesomeIcon icon="font" size="sm" />
      </el-button>
      <el-button :class="{ select: currentStatus === 2 }" @click="onClickBtn(2)">
        <FontAwesomeIcon icon="font" size="xs" />
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
  return props.configKey === "titleSize" ? "标题尺寸" : "描述尺寸";
});

function onClickBtn(index: number) {
  updateStatus(props.configKey, index);
}
</script>

<style scoped></style>
