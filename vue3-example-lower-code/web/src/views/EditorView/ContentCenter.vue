<template>
  <div class="center-container" ref="centerContainerRef">
    <VueDraggable v-model="store.coms" item-key="index" @start="onDragStart">
      <template #item="{ element, index }">
        <div
          class="content mb-10 relative"
          :class="{
            active: store.currentComponentIndex === index
          }"
          :ref="
            (el) => {
              componentRefs && (componentRefs[index] = el);
            }
          "
          :key="element.id"
          @click="onClickComponent(index)"
        >
          <!-- 组件 -->
          <Component
            :is="element.type"
            :seriaNum="getSeriaNum(surveyNo, index)"
            :status="element.status"
          />
          <!-- 删除按钮 -->
          <div class="absolute delete-btn" v-show="store.currentComponentIndex === index">
            <el-button
              type="danger"
              size="small"
              :icon="Close"
              circle
              @click.stop="onClickRemoveBtn(index)"
            ></el-button>
          </div>
        </div>
      </template>
    </VueDraggable>
  </div>
</template>

<script setup lang="ts">
import VueDraggable from "vuedraggable";
import { Close } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";

import { nextTick, useTemplateRef, ref, watch, type ComponentPublicInstance } from "vue";
import { useEditoeStore } from "@/stores/editor";
import { useSurveyNo } from "@/utils/hooks";

const store = useEditoeStore();
const centerContainerRef = useTemplateRef<HTMLElement | null>("centerContainerRef");
const componentRefs = ref<(Element | ComponentPublicInstance | null)[]>([]);
const surveyNo = useSurveyNo(store.coms);

// 监听 store.coms 的变化，当有新的组件添加时，自动滚动到底部
watch(
  () => store.coms,
  () => scrollToBottom()
);

watch(
  () => store.currentComponentIndex,
  (newIndex) => {
    if (newIndex === -1) {
      return false;
    }
    scrollToCenter(newIndex);
  }
);

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

async function scrollToCenter(index: number) {
  await nextTick();
  if (componentRefs.value) {
    const element = componentRefs.value[index];
    if (element instanceof HTMLElement) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }
}

function onDragStart() {
  store.changeCurrentIndex(-1);
}

// 删除选中的组件
function onClickRemoveBtn(index: number) {
  ElMessageBox.confirm("确定删除该组件吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      store.removeCom(index);
      ElMessage.success("删除成功");
    })
    .catch(() => {
      ElMessage.info("已取消删除");
    });
}

function onClickComponent(index: number) {
  store.changeCurrentIndex(index);
  scrollToCenter(index);
}

function getSeriaNum(list: (number | null)[], index: number) {
  const number = list[index];
  const lastNumber = list.filter((el) => !!el).shift();
  return number === null ? lastNumber : number;
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
