<template>
  <Layout>
    <RouterLink class="link-item mb-15" exact-active-class="link-item-active" to="single-select">
      单选题
    </RouterLink>
    <RouterLink class="link-item mb-15" exact-active-class="link-item-active" to="multi-select">
      多选题
    </RouterLink>
    <RouterLink class="link-item mb-15" exact-active-class="link-item-active" to="option-select">
      下拉选择
    </RouterLink>
    <RouterLink
      class="link-item mb-15"
      exact-active-class="link-item-active"
      to="single-pic-select"
    >
      图片单选题
    </RouterLink>
    <RouterLink class="link-item mb-15" exact-active-class="link-item-active" to="multi-pic-select">
      图片多选题
    </RouterLink>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "./Layout.vue";
</script>

<style scoped></style>
