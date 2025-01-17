<template>
  <div :key="id">
    <div class="mb-10">描述内容</div>
    <el-input
      v-model="text"
      type="textarea"
      :rows="3"
      placeholder="请输入题目描述"
      @change="onChangeText"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { VueComType } from "@/types";

const props = defineProps<{
  configKey: string;
  id: string;
  status: string;
  isShow: boolean;
  editCom: VueComType;
}>();

const updateStatus = inject<(key: string, value: string | number) => void>(
  "updateStatus",
  () => {},
);

const text = ref(props.status);

function onChangeText(value: string) {
  updateStatus(props.configKey, value);
}
</script>

<style scoped lang="scss"></style>
