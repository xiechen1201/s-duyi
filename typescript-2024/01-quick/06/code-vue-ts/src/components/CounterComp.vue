<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ count }}</p>
    <button @click="onClickAddBtn">Add count</button>
    <input type="text" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
// 运行式

/* defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['addCount']);

function onClickAddBtn() {
  emit('addCount');
} */

// ================================

// 类型式

defineProps<{ title: string; count: number }>();

const emit = defineEmits<{
  (e: 'addCount'): void;
}>();

function onClickAddBtn() {
  emit('addCount');
}

function onInput(e: Event) {
  console.log((e.target as HTMLInputElement).value);
}
</script>
