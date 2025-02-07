<template>
  <div :class="{ 'text-center': computedState.position }">
    <MaterialsHeader
      :seria-num="seriaNum"
      :title="computedState.title"
      :desc="computedState.desc"
      :title-size="computedState.titleSize"
      :desc-size="computedState.descSize"
      :title-weight="computedState.titleWeight"
      :desc-weight="computedState.descWeight"
      :title-italic="computedState.titleItalic"
      :desc-italic="computedState.descItalic"
      :title-color="computedState.titleColor"
      :desc-color="computedState.descColor"
    />

    <div class="flex wrap">
      <el-radio-group v-model="radioValue" class="flex wrap">
        <el-radio
          v-for="(item, index) in computedState.options"
          class="picOption flex mb-15"
          :key="index"
          :value="item.picTitle"
        >
          <PicItem :key="index" v-bind="{ index, ...item }" />
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader.vue";
import PicItem from "@/components/SurveyComs/Common/PicItem.vue";

import { computed, ref } from "vue";
import {
  getTextStatus,
  getPicTitleDesStatus,
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
  options: getPicTitleDesStatus(props.status.options),
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

const radioValue = ref("");
</script>

<style scoped lang="scss">
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
