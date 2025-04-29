<template>
  <div class="pt-20 pb-20 pl-20 pr-20">
    <h1 class="font-weight-100 text-center">问卷调查</h1>

    <!-- 按钮组 -->
    <div class="mb-15">
      <el-button type="primary" :icon="Plus" @click="goToEditor">创建问卷</el-button>
      <el-button type="success" :icon="Compass" @click="goToComponentMarket">组件市场</el-button>
    </div>

    <!-- 数据表格 -->
    <el-table :data="tableData" border>
      <el-table-column
        fixed
        prop="createDate"
        label="创建日期"
        width="250"
        align="center"
        :formatter="formatDate"
      />
      <el-table-column prop="title" label="问卷标题" align="center" />
      <el-table-column prop="surveyCount" label="题目数" width="150" align="center" />
      <el-table-column
        prop="updateDate"
        label="最近更新日期"
        width="250"
        align="center"
        :formatter="formatDate"
      />
      <el-table-column fixed="right" label="操作" width="300" align="center">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="onClickPreview(row)">
            查看问卷
          </el-button>
          <el-button link type="primary" size="small" @click="onClickEdit(row)">编辑</el-button>
          <el-button link type="primary" size="small" @click="onClickDel(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useEditoeStore } from "@/stores/editor";
import { getAllSurveyData } from "@/db/operation";
import { type SurveyDBData } from "@/types";
import { formatDate } from "@/utils";

const router = useRouter();
const store = useEditoeStore();

const tableData = ref<SurveyDBData[]>([]);

function goToEditor() {
  router.push("/editor");
}

function goToComponentMarket() {
  router.push("/materials");
}

// 预览
function onClickPreview(surveyInfo: SurveyDBData & { id: string }) {
  router.push({
    name: "preview",
    params: {
      id: surveyInfo.id,
      from: "home"
    }
  });
}

// 编辑
function onClickEdit(surveyInfo: SurveyDBData & { id: string }) {
  router.push({
    name: "editor",
    params: {
      id: surveyInfo.id
    }
  });
}

// 删除
function onClickDel(surveyInfo: SurveyDBData & { id: number }) {
  ElMessageBox.confirm("确认要删除吗？", "提示", { type: "warning" }).then(() => {
    store.removeComs(surveyInfo.id).then(() => {
      ElMessage.success("删除成功！");
      // 刷新
      init();
    });
  });
}

// 初始化加载数据
init();
function init() {
  getAllSurveyData().then((res) => {
    tableData.value = res;
  });
}
</script>
