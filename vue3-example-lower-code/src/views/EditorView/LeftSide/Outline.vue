<template>
  <div>
    <div v-if="store.surveyCount">
      <VueDraggable v-model="store.coms" item-key="index" @start="onDragStart">
        <template #item="{ element, index }">
          <div
            v-show="isSurveyComName(element.name)"
            @click="onClickTitleItem(index)"
            class="mb-10"
            :class="{
              active: store.currentComponentIndex === index
            }"
          >
            <div class="item">
              {{ getSeriaNum(index) }}.
              {{ getTitle(element.status) }}
            </div>
          </div>
        </template>
      </VueDraggable>
    </div>
    <div v-else class="tip flex align-items-center justify-content-center">请添加题目</div>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from "vuedraggable";

import { useEditoeStore } from "@/stores/editor";
import { isSurveyComName } from "@/types";
import { useSurveyNo } from "@/utils/hooks";
import { type ComBaseStatus } from "@/types-new";

const store = useEditoeStore();
const surveyNo = useSurveyNo(store.coms);

function getSeriaNum(index: number) {
  const number = surveyNo.value[index];
  const lastNumber = surveyNo.value.filter((el) => !!el).shift();
  return number === null ? lastNumber : number;
}

function onDragStart() {
  store.changeCurrentIndex(-1);
}

function getTitle(status: ComBaseStatus) {
  const titleStatus = status.title.status;
  return titleStatus.length > 10 ? titleStatus.substring(0, 10) + "..." : titleStatus;
}

function onClickTitleItem(index: number) {
  store.changeCurrentIndex(index);
}
</script>

<style scoped lang="scss">
.item {
  /* outline: 1px solid black; */
  color: var(--font-color-light);
  font-size: var(--font-size-base);
  padding: 10px;
  cursor: pointer;
}

.tip {
  height: calc(100% - 50px);
}

.active {
  transform: scale(1.04);
  transition: 0.5s;
  background-color: var(--border-color);
  border-radius: var(--border-radius-lg);
}
</style>
