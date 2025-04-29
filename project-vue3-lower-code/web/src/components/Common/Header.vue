<template>
  <header>
    <div class="container flex slef-start align-items-center border-box">
      <div class="left flex justify-content-center align-items-center">
        <el-button :icon="ArrowLeft" circle size="small" @click="goBack" />
      </div>

      <div class="center flex align-items-center space-between pl-15 pr-15">
        <div v-if="isEditor">
          <!-- 编辑器需要显示额外的按钮 -->
          <div v-if="id">
            <el-button type="warning" size="small" @click="onClickUpdate">更新问卷</el-button>
          </div>
          <div v-else>
            <el-button type="danger" size="small" @click="onClickReset">重置问卷</el-button>
            <el-button type="success" size="small" @click="onClickSave">保存问卷</el-button>
          </div>
        </div>
        <div>
          <el-button type="primary" size="small" @click="onClickPreView">预览</el-button>
        </div>
      </div>

      <div class="right flex justify-content-center align-items-center">
        <el-avatar :size="30" :src="avatarUrl" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";
import { ArrowLeft } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import { ref } from "vue";
import { useEditoeStore } from "@/stores/editor";

const router = useRouter();
const store = useEditoeStore();
const props = defineProps({
  isEditor: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    default: ""
  }
});

const avatarUrl = ref("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png");

function goBack() {
  router.push("/");
}

function onClickReset() {
  ElMessageBox.confirm("确定要重置问卷吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(
    () => {
      store.resetComs();
      ElMessage({
        type: "success",
        message: "重置成功！"
      });
    },
    () => {
      ElMessage({
        type: "info",
        message: "取消重置"
      });
    }
  );
}

function onClickSave() {
  ElMessageBox.prompt("请输入问卷标题", "提示", {
    inputPlaceholder: "请输入问卷标题"
  }).then(
    ({ value }) => {
      const surveyToSave = {
        createDate: new Date().getTime(),
        updateDate: new Date().getTime(),
        title: value,
        surveyCount: store.surveyCount,
        coms: JSON.parse(JSON.stringify(store.coms))
      };
      store.saveComs(surveyToSave).then(
        (id) => {
          ElMessage({
            type: "success",
            message: "保存成功！"
          });

          router.push({
            name: "editor",
            params: {
              id: id
            }
          });
        },
        (error) => {
          console.log(error);
          ElMessage({
            type: "error",
            message: "保存失败！"
          });
        }
      );
    },
    () => {
      ElMessage({
        type: "info",
        message: "取消保存"
      });
    }
  );
}

function onClickUpdate() {
  ElMessageBox.confirm("确定要更新问卷吗？", "提示", { type: "warning" }).then(
    () => {
      store
        .updateComs(Number(props.id), {
          updateDate: new Date().getTime(),
          surveyCount: store.surveyCount,
          coms: JSON.parse(JSON.stringify(store.coms))
        })
        .then(() => {
          ElMessage.success("更新成功！");
        });
    },
    () => {
      ElMessage.info("已取消更新");
    }
  );
}

function onClickPreView() {
  ElMessageBox.confirm("预览会自动保存问卷，是否要跳转预览？", "提示", { type: "info" }).then(
    () => {
      // 有可能是更新，也可能是新建
      if (props.id) {
        onClickUpdate();
      } else {
        onClickSave();
      }

      router.push({
        name: "preview",
        params: {
          id: props.id,
          from: "edit"
        }
      });
    },
    () => {
      ElMessage.info("已取消预览");
    }
  );
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);

  .left {
    width: 60px;
    height: 100%;
  }

  .center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }

  .right {
    width: 80px;
    height: 100%;
  }
}
</style>
