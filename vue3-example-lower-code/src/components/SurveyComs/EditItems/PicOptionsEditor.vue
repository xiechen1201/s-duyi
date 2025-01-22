<template>
  <div>
    <div class="flex align-items-center">
      <div class="mr-10">题目选项</div>
      <el-button size="small" :icon="Plus" circle @click="onClickAddBtn"></el-button>
    </div>

    <div v-for="(item, index) in textArr" :key="index">
      <!-- 选项 -->
      <div class="title mt-10 mb-10 flex align-items-center">
        <span>选项{{ index + 1 }}</span>
        <el-button
          type="danger"
          class="ml-5 delete"
          size="small"
          :icon="Minus"
          circle
          @click="onClickRemoveOption(index)"
        />
      </div>
      <!-- 是否上传图片 -->
      <div class="mb-5">
        <div v-if="item.value" class="flex">
          <span class="title mr-5">已上传图片</span>
          <el-link type="primary" @click="onClickDeletePic(index)">删除图片</el-link>
        </div>
        <span v-else class="title">未上传图片</span>
      </div>
      <!-- 修改图片标题 -->
      <el-input class="mb-5" v-model="item.picTitle" placeholder="图片标题" />
      <!-- 修改图片描述 -->
      <el-input type="textarea" :rows="3" placeholder="图片描述" v-model="item.picDesc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { Plus, Minus } from "@element-plus/icons-vue";

import type { InjectUpdateStatus } from "./types";
import type { VueComType, PicTitleDescStatusArr } from "@/types";

const props = defineProps<{
  currentStatus: number;
  status: PicTitleDescStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const textArr = ref(props.status);

const updateStatus = inject<InjectUpdateStatus>("updateStatus");

function onClickAddBtn() {
  if (updateStatus) {
    updateStatus(props.configKey);
  }
}

function onClickRemoveOption(index: number) {
  if (updateStatus) {
    updateStatus(props.configKey, index);
  }
}

function onClickDeletePic(index: number) {
  ElMessageBox.confirm("是否删除该图片？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      if (updateStatus) {
        updateStatus(props.configKey, {
          link: "",
          index,
        });
      }
    })
    .catch(() => {
      ElMessage.info("已取消删除");
    });
}
</script>

<style scoped></style>
