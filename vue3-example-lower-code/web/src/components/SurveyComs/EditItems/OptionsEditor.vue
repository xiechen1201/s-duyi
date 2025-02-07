<template>
  <div :key="id">
    <div class="flex align-items-center mb-10">
      <div class="mr-10">题目选项</div>
      <el-button size="small" :icon="Plus" @click="onClickAdd" />
    </div>

    <div v-for="(_, index) in status" :key="index" class="flex align-items-center">
      <el-input placeholder="选项" class="mt-5" v-model="textArr[index]" />
      <el-button
        type="danger"
        class="ml-10"
        size="small"
        circle
        :icon="Minus"
        @click="onClickRemove(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { Plus, Minus } from "@element-plus/icons-vue";
import type { VueComType, StringStatusArr } from "@/types";
import type { InjectUpdateStatus } from "./types";

const props = defineProps<{
  configKey: string;
  id: string;
  status: StringStatusArr;
  isShow: boolean;
  editCom: VueComType;
}>();

const textArr = ref(props.status);

const updateStatus = inject<InjectUpdateStatus>("updateStatus", () => {});

function onClickAdd() {
  updateStatus(props.configKey);
}

function onClickRemove(index: number) {
  updateStatus(props.configKey, index);
}
</script>

<style scoped></style>
