<template>
  <div class="screen-block">
    <ChartTitle>地区销量趋势</ChartTitle>
    <div ref="chartRef" style="width: 100%; height: 90%"></div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import echarts from '@/utils/echarts'
import type { ECharts } from 'echarts/core'

import ChartTitle from './ChartTitle.vue'

const chartRef = useTemplateRef('chartRef')
let echartsInstance: ECharts;

onMounted(() => {
  echartsInstance = echarts.init(chartRef.value)
  renderChart()
})

const data = [
  {
    name: '上海',
    data: [
      '155.13',
      '154.65',
      '171.46',
      '164.38',
      '237.23',
      '300.65',
      '240.29',
      '232.07',
      '193.31',
      '136.70',
      '48.64',
      '90.20',
    ],
  },
  {
    name: '北京',
    data: [
      '86.25',
      '33.80',
      '145.58',
      '21.79',
      '176.09',
      '132.41',
      '291.05',
      '191.89',
      '151.54',
      '94.25',
      '141.75',
      '157.14',
    ],
  },
  {
    name: '深圳',
    data: [
      '143.94',
      '186.29',
      '183.64',
      '251.48',
      '195.48',
      '152.16',
      '52.47',
      '184.12',
      '203.79',
      '39.16',
      '56.37',
      '161.64',
    ],
  },
  {
    name: '广州',
    data: [
      '57.60',
      '77.61',
      '307.24',
      '165.05',
      '175.41',
      '276.88',
      '269.04',
      '296.11',
      '105.31',
      '283.39',
      '134.08',
      '265.38',
    ],
  },
  {
    name: '重庆',
    data: [
      '200.82',
      '215.56',
      '249.80',
      '222.67',
      '216.98',
      '60.12',
      '309.68',
      '273.35',
      '150.99',
      '251.97',
      '26.15',
      '186.99',
    ],
  },
]

const renderChart = () => {
  const option = {
    grid: {
      top: '25%',
      right: '4%',
      bottom: '1%',
      left: '3%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      left: 20,
      top: '8%',
      icon: 'circle',
      data: data.map((item) => item.name),
      textStyle: {
        color: '#aaa',
      },
    },
    xAxis: {
      type: 'category',
      data: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
    },
    series: getSeries(),
  }

  echartsInstance.setOption(option)
}

function getSeries() {
  // 半透明的颜色值
  const colorArr1 = [
    'rgba(11, 168, 44, 0.5)',
    'rgba(44, 110, 255, 0.5)',
    'rgba(22, 242, 217, 0.5)',
    'rgba(254, 33, 30, 0.5)',
    'rgba(250, 105, 0, 0.5)',
  ]
  // 全透明的颜色值
  const colorArr2 = [
    'rgba(11, 168, 44, 0)',
    'rgba(44, 110, 255, 0)',
    'rgba(22, 242, 217, 0)',
    'rgba(254, 33, 30, 0)',
    'rgba(250, 105, 0, 0)',
  ]

  const seriesArr = data.map((item, index) => {
    return {
      name: item.name,
      type: 'line',
      data: item.data,
      lineStyle: {
        width: 3,
      },
      itemStyle: {
        borderWidth: 4,
      },
      symbol: 'circle',
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: colorArr1[index],
          },
          {
            offset: 1,
            color: colorArr2[index],
          },
        ]),
      },
    }
  })
  return seriesArr
}
</script>

<style lang="scss" scoped>
.screen-block {
  width: 100%;
  height: 550px;
  background-color: var(--ds-block-bg);
  padding: 16px;
  margin-top: 20px;
}
</style>
