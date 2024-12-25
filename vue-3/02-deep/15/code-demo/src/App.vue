<template>
  <div>
    <CardComponent>
      <!-- <template v-slot:header>
        <div>卡片标题</div>
      </template> -->
     <!--  <template v-slot:header="slotProps">
        <div>卡片标题，{{ slotProps.title }}</div>
      </template> -->
      <div class="card-content">
        <img src="./assets/logo.svg" alt="Beautiful landscape" class="card-image" />
        <p>探索未知的自然风光，记录下每一个令人惊叹的瞬间。加入我们的旅程，一起见证世界的壮丽。</p>
      </div>
      <div>
        <button>了解更多</button>
      </div>
    </CardComponent>
  </div>
</template>

<script setup>
// import CardComponent from './components/CardComponent.vue'
import CardComponent from './components/CardComponent/CardComponent.js'
</script>
