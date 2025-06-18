<template>
  <div ref="chartRef"></div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted, watch } from 'vue'
import echarts from '@/utils/echarts'
import type { EChartsCoreOption } from 'echarts/core'

const props = defineProps<{
  option: EChartsCoreOption
}>()

const chartRef = useTemplateRef('chartRef')
let echartInstance: echarts.ECharts

watch(props.option, (newOption) => {
  setOption()
})

onMounted(() => {
  init()
})

defineExpose({
  echartInstance,
  resize,
})

function init() {
  if (props.option) {
    echartInstance = echarts.init(chartRef.value)
    setOption()
  }
}

function setOption() {
  echartInstance.setOption(props.option)
}

function resize() {
  echartInstance.resize()
}
</script>

<style scoped></style>
