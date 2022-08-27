<template>
  <view class="echarts">
    <ec-canvas id="chart-dom-area" canvas-id="chart-area" :ec="ec"></ec-canvas>
  </view>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import * as echarts from '@/components/ec-canvas/echarts'
  import './index.scss'

  function initChart(canvas: any, width: any, height: any) {
    const chart = echarts.init(canvas, null, {
      width,
      height
    })
    canvas.setChart(chart)

    const option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    }

    chart.setOption(option)
    return chart
  }

  const ec = reactive({
    onInit: initChart
  })
</script>
