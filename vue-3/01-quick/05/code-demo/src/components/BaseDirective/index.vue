<template>
  <input
    v-focus
    type="text"
  >
</template>

<script setup>
defineOptions({
  name: 'BaseDirective'
});

const vFocus = {
  mounted(el, binding, vnode, prevVnode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(prevVnode);
    
    el.focus();
  }
};
</script>

<style lang="scss" scoped></style>
