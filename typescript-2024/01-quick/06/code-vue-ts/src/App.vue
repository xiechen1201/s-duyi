<template>
  <div>
    <CounterComp :title :count @add-count="count++" />
    <BaseComponet ref="BaseComponet" />
    <button @click="comp?.toggleShown">toggle</button>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

import CounterComp from '@/components/CounterComp.vue';
import BaseComponet from '@/components/BaseComponet.vue';

type BaseComponetType = InstanceType<typeof BaseComponet>;

const comp = useTemplateRef<BaseComponetType | null>('BaseComponet');

comp.value?.toggleShown();

const title = ref<string>('计数器');
const count = ref<number>(0);
</script>
