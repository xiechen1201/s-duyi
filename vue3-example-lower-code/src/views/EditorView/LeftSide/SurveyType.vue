<template>
  <div class="survey-type-container">
    <SurveyComGroup v-for="(item, index) in SurveyComsList" :key="index" v-bind="item" />
  </div>
</template>

<script setup lang="ts">
import SurveyComGroup from "@/components/Editor/SurveyComGroup.vue";

import { SurveyComsList } from "@/configs/survey-group-config";
</script>

<style scoped lang="scss">
.survey-type-container {
  height: calc(100vh - 50px - 40px);
  overflow: hidden;
}
</style>
