<template>
  <div
    class="survey-com-item-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10"
    @click="onClickAddSurveyCom"
  >
    {{ item.comName }}
  </div>
</template>

<script setup lang="ts">
import { defaultStatusMap } from "@/configs/default-status/default-status-map";
import { updateInitStatusBeforeAdd } from "@/utils";
import { useEditoeStore } from "@/stores/editor";

import type { ComKey } from "@/types-new";

const store = useEditoeStore();
const props = defineProps(["item"]);

function onClickAddSurveyCom() {
  const newSurveyComName = props.item.materialName;
  if (!newSurveyComName) {
    return false;
  }

  const newSurveyComStatus = defaultStatusMap[newSurveyComName as ComKey]();
  updateInitStatusBeforeAdd(newSurveyComStatus, newSurveyComName);
  store.addCom(newSurveyComStatus);
}
</script>

<style scoped lang="scss">
.survey-com-item-container {
  width: 60px;
  height: 30px;
  background-color: var(--background-color);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  user-select: none;
}

.survey-com-item-container:hover {
  background-color: var(--font-color-lightest);
}
</style>
