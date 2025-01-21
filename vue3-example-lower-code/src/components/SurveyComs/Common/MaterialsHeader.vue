<template>
  <div>
    <div class="container mb-15">
      <!-- 标题 -->
      <h2
        class="title font-weight-100"
        :style="{
          fontSize: `${titleSize}px`,
          color: titleColor,
        }"
      >
        <span class="mr-10">{{ seriaNum }}.</span>
        <span
          :class="{
            'font-bold': !titleWeight,
            'font-italic': !titleItalic,
          }"
        >
          {{ title }}
        </span>
      </h2>
      <!-- 描述 -->
      <div
        class="desc"
        :style="{
          fontSize: `${descSize}px`,
          color: descColor,
        }"
        :class="{
          'font-bold': !descWeight,
          'font-italic': !descItalic,
        }"
      >
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  seriaNum: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  titleSize: {
    type: String,
    default: "22",
  },
  descSize: {
    type: String,
    default: "16",
  },
  titleWeight: {
    type: Number,
    default: 0,
  },
  descWeight: {
    type: Number,
    default: 0,
  },
  titleItalic: {
    type: Number,
    default: 0,
  },
  descItalic: {
    type: Number,
    default: 0,
  },
  titleColor: {
    type: String,
    default: "",
  },
  descColor: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.container {
  > h2 {
    font-size: 20px;

    > span {
      margin: 0 5px;
    }
  }
}

.desc {
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  text-indent: 5px;
}
</style>
