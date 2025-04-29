<template>
  <ButtonGroup title="说明类型" :status="status[currentStatus]">
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changeType(0)"
      >
        <font-awesome-icon icon="heading" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        @click="changeType(1)"
      >
        <font-awesome-icon icon="paragraph" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from "./coms/ButtonGroup.vue";

import { inject } from "vue";
import {} from "@element-plus/icons-vue";

import type { VueComType } from "@/types";
import type { InjectUpdateStatus } from "./types";

const props = defineProps<{
  configKey: string;
  id: string;
  name: string;
  editCom: VueComType;
  isShow: boolean;
  currentStatus: number;
  status: string[];
}>();

const updateStatus = inject<InjectUpdateStatus>("updateStatus", () => {});

function changeType(index: number) {
  updateStatus(props.configKey, index);
}
</script>

<style lang="scss" scoped></style>
