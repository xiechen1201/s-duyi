<template>
  <div>
    <ErrorLog />
    <hr>
    <BaseAttributes />
    <hr>
    <ProvideAndInject />
    <hr>
    <BaseComposition />
    <hr>
    <BaseDirective />
    <hr>
    <BaseTransitionGroup />
  </div>
</template>

<script setup>
import BaseAttributes from './components/BaseAttributes/index.vue';
import ProvideAndInject from './components/ProvideAndInject/index.vue';
import BaseComposition from './components/BaseComposition/index.vue';
import BaseDirective from './components/BaseDirective/index.vue';
import BaseTransitionGroup from "./components/BaseTransitionGroup/index.vue"
</script>

<style lang="scss" scoped></style>
