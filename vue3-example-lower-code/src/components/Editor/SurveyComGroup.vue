<template>
  <div class="survey-com-group-container mc">
    <div class="mb-20">
      <!-- 分组标题和图标 -->
      <div class="group-title font-weight-500 mb-15 flex align-items-center">
        <el-icon>
          <component :is="icon" />
        </el-icon>
        <div class="ml-5 title">{{ title }}</div>
      </div>

      <!-- 该分组对应的业务组件 -->
      <div class="flex wrap space-between">
        <SurveyComItem v-for="(item, index) in list" :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SurveyComItem from "./SurveyComItem.vue";

defineProps(["title", "icon", "list"]);
</script>

<style scoped lang="scss">
.survey-com-group-container {
  width: 90%;
}

.title {
  font-size: var(--font-size-base);
  position: relative;
  bottom: 1px;
}
</style>
