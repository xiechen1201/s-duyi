<template>
  <div class="preview-container pb-40">
    <div class="center mc">
      <!-- 按钮组 -->
      <div class="button-group flex space-between align-items-center">
        <div class="flex space-between no-print">
          <el-button type="danger" @click="onClickBack">返回</el-button>
          <el-button type="success" @click="genderQuiz">生成在线问卷</el-button>
          <el-button type="warning" @click="genderPDF">生成本地PDF</el-button>
        </div>
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ store.surveyCount }}</el-text>
        </div>
      </div>

      <!-- 问卷 -->
      <div class="content-group no-border">
        <div class="content mb-10" v-for="(com, index) in store.coms" :key="index">
          <component :is="com.type" :status="com.status" :serialNum="serialNum[index]" />
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" title="信息" width="500">
    分享链接: <a :href="quizLink" target="_blank">{{ quizLink }}</a>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="copyLink">复制链接</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEditoeStore } from "@/stores/editor";
import { getSurveyDataById } from "@/db/operation";
import { restoreComponentsStatus } from "@/utils";
import { useSurveyNo } from "@/utils/hooks";
import { canUsedForPDF } from "@/types";
import { v4 as uuidv4 } from "uuid";

const store = useEditoeStore();
const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);
const serialNum = useSurveyNo(store.coms).value;
const dialogVisible = ref(false);
const quizLink = ref("");

function onClickBack() {
  switch (route.params.from) {
    case "home":
      router.push("/");
      break;
    case "edit":
      router.push("/editor");
      break;
  }
}

function genderPDF() {
  // 检查是否存在不适合做 PDF 的组件
  const result = store.coms.every((com) => canUsedForPDF(com.name));
  if (!result) {
    ElMessage.error("存在不适合做 PDF 的组件，请检查后重试");
    return;
  }

  // 生成 PDF（简单）
  window.print();
}

// 生成在线问卷
function genderQuiz() {
  // 将问卷数据存入数据库
  const id = uuidv4();
  fetch("/api/saveQuiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id,
      quizData: {
        coms: JSON.stringify(store.coms),
        surveyCount: store.surveyCount
      }
    })
  }).then(() => {
    quizLink.value = `${window.location.origin}/quiz/${id}`;
    dialogVisible.value = true;
  });
}

function copyLink() {
  navigator.clipboard.writeText(quizLink.value).then(() => {
    dialogVisible.value = false;
    ElMessage.success("复制成功");
  });
}

// 根据 ID 获取问卷数据
if (id) {
  getSurveyDataById(id).then((res) => {
    // 拿到数据后，组件部分需要重新还原
    restoreComponentsStatus(res!.coms);
    store.setStore(res!);
  });
}
</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background: url("@/assets/imgs/editor_background.png");
}

.center {
  width: 800px;
}

.button-group {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
}

.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@media print {
  .no-print {
    display: none;
  }

  .no-border {
    border: none;
    box-shadow: none;
  }
}
</style>
