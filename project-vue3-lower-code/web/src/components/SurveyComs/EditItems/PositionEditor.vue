<template>
  <ButtonGroup title="居中设置" :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="onClickBtn(0)">
        <FontAwesomeIcon icon="align-left" />
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="onClickBtn(1)">
        <FontAwesomeIcon icon="align-center" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from "./coms/ButtonGroup.vue";

import { inject } from "vue";
import type { VueComType, StringStatusArr } from "@/types";
import type { InjectUpdateStatus } from "./types";

const props = defineProps<{
  configKey: string;
  id: string;
  status: StringStatusArr;
  isShow: boolean;
  editCom: VueComType;
  currentStatus: number;
}>();

const updateStatus = inject<InjectUpdateStatus>("updateStatus", () => {});

function onClickBtn(pos: number) {
  updateStatus(props.configKey, pos);
}
</script>

<style scoped></style>
