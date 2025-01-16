<template>
  <div :class="{ 'text-center': computedState.position }">
    <MaterialsHeader
      :seria-num="seriaNum"
      :title="computedState.title"
      :desc="computedState.desc"
      :title-size="computedState.titleSize as string"
      :desc-size="computedState.descSize as string"
      :title-weight="computedState.titleWeight"
      :desc-weight="computedState.descWeight"
      :title-italic="computedState.titleItalic"
      :desc-italic="computedState.descItalic"
      :title-color="computedState.titleColor"
      :desc-color="computedState.descColor"
    />

    <el-radio-group>
      <el-radio v-for="(item, index) in computedState.options" :value="item" :key="index">
        {{ item }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader.vue";

import { computed } from "vue";
import {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from "@/utils";

import type { OptionsStatus } from "@/types";

const props = defineProps<{
  seriaNum: number;
  status: OptionsStatus;
}>();

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}));

console.log(computedState.value);
</script>

<style scoped lang="scss"></style>
