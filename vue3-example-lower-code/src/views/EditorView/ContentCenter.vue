<template>
  <div class="center-container" ref="centerContainerRef">
    <div
      v-for="(item, index) in store.coms"
      :key="index"
      class="content mb-10 relative"
      :class="{
        active: store.currentComponentIndex === index
      }"
      @click="onClickComponent(index)"
    >
      <Component :is="item.type" :seriaNum="1" :status="item.status" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from "vue";
import { useEditoeStore } from "@/stores/editor";

const store = useEditoeStore();
const centerContainerRef = useTemplateRef("centerContainerRef");

// 监听 store.coms 的变化，当有新的组件添加时，自动滚动到底部
watch(store.coms, () => scrollToBottom());

function scrollToBottom() {
  nextTick(() => {
    const container = centerContainerRef.value;
    if (container) {
      window.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      });
    }
  });
}

function onClickComponent(index: number) {
  store.changeCurrentIndex(index);
}
</script>

<style scoped lang="scss">
.center-container {
  width: 50%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin: 70px auto;
  padding: 20px;
  background: var(--white);
  position: relative;

  .content {
    cursor: pointer;
    padding: 10px;
    background-color: var(--white);
    border-radius: var(--border-radius-sm);

    &:hover {
      transform: scale(1.01);
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}

.active {
  transform: scale(1.01);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.delete-btn {
  right: -5px;
  top: -10px;
}
</style>
