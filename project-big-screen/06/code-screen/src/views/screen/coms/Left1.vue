<template>
  <div class="screen-block">
    <ChartTitle>销售统计</ChartTitle>
    <div ref="chartRef" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import echarts from '@/utils/echarts'
import type { EChartsCoreOption } from 'echarts/core'

import ChartTitle from "./ChartTitle.vue"

const chartRef = useTemplateRef('chartRef')

onMounted(() => {
  const ins = echarts.init(chartRef.value)
  const options: EChartsCoreOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        z: 0,
        lineStyle: {
          color: '#2d3443',
        },
      },
    },
    //x轴
    xAxis: {
      splitLine: { show: false }, // 是否显示网格线
      axisLine: { show: true }, // 是否显示轴线
      type: 'value', // 作为数据展示
    },
    //y轴
    yAxis: {
      type: 'category',
      data: ['商家1', '商家2', '商家3', '商家4', '商家5', '商家6'],
      inverse: true, // y轴反向
      axisLine: { show: true }, // 是否显示轴线
      axisTick: { show: false }, // 是否显示刻度
      axisLabel: {
        color: '#fff',
      },
    },
    grid: {
      top: '3%',
      right: '4%',
      bottom: '10%',
      left: '3%',
      containLabel: true,
    },
    series: [
      {
        type: 'bar',
        label: {
          show: true,
          position: 'right',
        },
        data: [5, 20, 36, 10, 10, 20],
        barWidth: 22,
        roundCap: true,
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.3)',
        },
        itemStyle: {
          borderWidth: 0,
          borderRadius: [0, 10, 10, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#00fffb',
            },
            {
              offset: 1,
              color: '#0061ce',
            },
          ]),
        },
      },
    ],
  }
  ins.setOption(options)
})
</script>

<style lang="scss" scoped>
.screen-block {
  width: 100%;
  height: 460px;
  padding: 16px;
  background-color: var(--ds-block-bg);
}
</style>
