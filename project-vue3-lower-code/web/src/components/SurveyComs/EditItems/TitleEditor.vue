<template>
  <div :key="id">
    <div class="mb-10">标题内容</div>
    <el-input v-model="text" placeholder="请输入题目标题" @change="onChangeText" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { VueComType } from "@/types";
import type { InjectUpdateStatus } from "./types";

const props = defineProps<{
  configKey: string;
  id: string;
  status: string;
  isShow: boolean;
  editCom: VueComType;
}>();

const updateStatus = inject<InjectUpdateStatus>("updateStatus", () => {});

const text = ref(props.status);

function onChangeText(value: string) {
  updateStatus(props.configKey, value);
}
</script>

<style scoped lang="scss"></style>
