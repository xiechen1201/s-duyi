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
      <el-table-column fixed prop="createDate" label="创建日期" width="150" />
      <el-table-column prop="title" label="问卷标题" />
      <el-table-column prop="surveyCount" label="题目数" width="150" align="center" />
      <el-table-column prop="updateDate" label="最近更新日期" width="150" align="center" />
      <el-table-column fixed="right" label="操作" width="300" align="center">
        <template>
          <el-button link type="primary" size="small">查看问卷</el-button>
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tableData = ref([]);

function goToEditor() {
  router.push("/editor");
}

function goToComponentMarket() {
  router.push("/materials");
}
</script>
