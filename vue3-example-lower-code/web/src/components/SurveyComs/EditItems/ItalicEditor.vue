<template>
  <ButtonGroup :title :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="onClickBtn(0)">
        <FontAwesomeIcon icon="italic" size="lg" />
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="onClickBtn(1)">
        <FontAwesomeIcon icon="italic" size="sm" />
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
  return props.configKey === "titleItalic" ? "标题倾斜" : "描述倾斜";
});

function onClickBtn(index: number) {
  updateStatus(props.configKey, index);
}
</script>

<style scoped></style>
