<template>
  <h1
    v-if="computedState.type === 0"
    class="pt-10 pb-10 text-center font-weight-200"
    :class="titleClass"
    :style="titleStyle"
  >
    {{ computedState.title }}
  </h1>
  <p v-else :class="descClass" :style="descStyle">
    {{ computedState.desc }}
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getTextStatus, getCurrentStatus, getStringStatusByCurrentStatus } from "@/utils";

import type { ComTypeStatus } from "@/types-new";

const props = defineProps<{
  seriaNum: number;
  status: ComTypeStatus;
}>();

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
  type: getCurrentStatus(props.status.type),
}));

const titleStyle = computed(() => ({
  fontSize: computedState.value.titleSize + "px",
  color: computedState.value.titleColor,
}));

const titleClass = computed(() => ({
  "font-italic": !computedState.value.titleItalic,
  "font-bold": !computedState.value.titleWeight,
}));

const descStyle = computed(() => ({
  fontSize: computedState.value.descSize + "px",
  color: computedState.value.descColor,
}));

const descClass = computed(() => ({
  "text-center": computedState.value.position,
  "font-italic": !computedState.value.descItalic,
  "font-bold": !computedState.value.descWeight,
}));
</script>

<style scoped></style>
