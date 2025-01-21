<template>
  <ButtonGroup :title :status="status">
    <el-color-picker v-model="color" @change="onChangePicker" />
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from "./coms/ButtonGroup.vue";

import { ref, computed, inject } from "vue";
import type { InjectUpdateStatus } from "./types";

const props = defineProps<{
  configKey: string;
  id: string;
  status: string;
}>();

const updateStatus = inject<InjectUpdateStatus>("updateStatus", () => {});

const color = ref(props.status);

const title = computed(() => {
  return props.configKey === "titleColor" ? "标题颜色" : "描述颜色";
});

function onChangePicker(colorStr: string | null) {
  const defaultColor = props.configKey === "titleColor" ? "#000" : "#909399";

  if (!colorStr) {
    color.value = defaultColor;
  }

  updateStatus(props.configKey, colorStr || defaultColor);
}
</script>

<style scoped></style>
