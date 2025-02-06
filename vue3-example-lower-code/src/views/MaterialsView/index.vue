<template>
  <BaseHeader :is-editor="false" />

  <div>
    <h1 class="font-weight-100 text-center m0 p0">组件市场</h1>
    <div class="container mc flex">
      <!-- 导航 -->
      <nav class="category mc">
        <RouterLink class="category-item" to="/materials/select-group">
          <el-icon>
            <CircleCheck />
          </el-icon>
          <div>选择</div>
        </RouterLink>
        <RouterLink class="category-item" to="/materials/input-group">
          <el-icon>
            <EditPen />
          </el-icon>
          <div>文本输入</div>
        </RouterLink>
        <RouterLink class="category-item" to="/materials/advanced-group">
          <el-icon>
            <Files />
          </el-icon>
          <div>高级题型</div>
        </RouterLink>
        <RouterLink class="category-item" to="/materials/note-group">
          <el-icon>
            <ChatLineSquare />
          </el-icon>
          <div>备注说明</div>
        </RouterLink>
        <RouterLink class="category-item" to="/materials/personal-info-group">
          <el-icon>
            <User />
          </el-icon>
          <div>个人信息</div>
        </RouterLink>
        <RouterLink class="category-item" to="/materials/contact-group">
          <el-icon>
            <Message />
          </el-icon>
          <div>联系方式</div>
        </RouterLink>
      </nav>

      <!-- 路由出口 -->
      <div class="coms">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CircleCheck,
  Files,
  EditPen,
  ChatLineSquare,
  User,
  Message
} from "@element-plus/icons-vue";
import BaseHeader from "@/components/Common/Header.vue";
</script>

<style scoped lang="scss">
h1 {
  height: 50px;
  margin: 20px 0;
}

.container {
  width: 1180px;
  height: 600px;
}

.category {
  width: 70px;
  height: 100%;

  > .category-item {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    font-size: var(--font-size-base);
    color: var(--white);
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }

  @for $i from 1 through 4 {
    .category-item:nth-child(4n + #{$i}) {
      @if $i == 1 {
        background-color: var(--primary-color);
      } @else if $i == 2 {
        background-color: var(--success-color);
      } @else if $i == 3 {
        background-color: var(--warning-color);
      } @else if $i == 4 {
        background-color: var(--error-color);
      }
    }
  }
}

.coms {
  width: calc(1180px - 60px);
  height: 100%;
}
</style>
