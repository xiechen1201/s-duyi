<template>
  <div @click.stop>
    <div class="container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          action="/api/upload"
          name="image"
          :show-file-list="false"
          :on-success="onUploadSuccess"
          :before-upload="beforeUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else>
            <el-icon>
              <Upload />
            </el-icon>
            <span>添加图片</span>
          </div>
        </el-upload>
      </div>

      <!-- 图片标题和描述 -->
      <div
        class="bottom flex justify-content-center align-items-center flex-direction-column font-weight-500"
      >
        <div class="item">{{ picTitle }}</div>
        <div class="desc mt-5 mb-5">{{ picDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { ElMessage } from "element-plus";
import { Upload } from "@element-plus/icons-vue";

import type { ResponseType, InjectGetLink } from "./types";
import type { UploadProps } from "element-plus";

const props = defineProps<{
  index: number;
  picTitle: string;
  picDesc: string;
  value: string;
}>();

const imageUrl = ref("");

const getLink = inject<InjectGetLink>("getLink", () => {});

const onUploadSuccess: UploadProps["onSuccess"] = (response: ResponseType, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);

  if (getLink) {
    getLink({
      index: props.index,
      link: response.imageUrl,
    });
  }
};

function beforeUpload(rawFile: File) {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Picture size can not exceed 2MB!");
    return false;
  }
  return true;
}
</script>

<style scoped lang="scss">
.container {
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);

  > .top {
    width: 100%;
    height: 200px;
    background-color: var(--font-color-lightest);
  }

  > .bottom {
    height: 100px;
    font-size: var(--font-size-lg);

    > .desc {
      font-size: var(--font-size-base);
      color: var(--font-color-light);
    }
  }
}

.avatar {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
