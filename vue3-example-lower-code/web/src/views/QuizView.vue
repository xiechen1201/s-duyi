<template>
  <div v-if="quizData">
    <div class="quiz-container mc">
      <div class="mt-30 mb-20">题目数量：{{ quizData.surveyCount }}</div>
      <div class="content mb-10" v-for="(com, index) in quizData.coms" :key="index">
        <component
          :is="com.type"
          :status="com.status"
          :serialNum="serialNum[index]"
          @updateAnswer="updateAnswer"
        />
      </div>

      <div class="mt-20 mb-20 text-center">
        <el-button type="primary" @click="submitAnswers">提交答案</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { restoreComponentsStatus } from "@/utils";
import { useSurveyNo } from "@/utils/hooks";
import { type QuizData } from "@/types";

const route = useRoute();

const quizData = ref<QuizData>({
  surveyCount: 0,
  coms: []
});
const serialNum = computed(() => useSurveyNo(quizData.value.coms));

onMounted(async () => {
  const quizId = route.params.id;
  const response = await fetch("/api/getQuiz/" + quizId);
  const data = await response.json();
  // 恢复状态
  data.coms = JSON.parse(data.coms);
  restoreComponentsStatus(data.coms);
  // 设置数据
  quizData.value = data;
});

const answers = ref({}); // 发送给服务器的数据
function updateAnswer(index: number, answer: string | number) {
  // index是题目本来的索引，通过serialNum.value[index]获取显示的题目索引
  // 检查 serialNum.value[index] 是否为 null
  const serial = serialNum.value[index];
  console.log(serial);
  if (serial !== null) {
    answers.value[serial] = answer;
    console.log(answers.value);
  } else {
    // 处理 serialNum.value[index] 为 null 的情况
    console.error(`The serial number at index ${index} is null.`);
  }
}

async function submitAnswers() {
  const quizId = route.params.id;
  await fetch("/api/submitAnswers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ quizId, answers: answers.value })
  });
  ElMessage({
    message: "答案已提交",
    type: "success"
  });
}
</script>

<style scoped lang="scss">
.quiz-container {
  width: 800px;
}
</style>
