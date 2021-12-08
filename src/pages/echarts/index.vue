<template>
  <view class="echarts">
    <ec-canvas id="mychart-dom-area" canvas-id="mychart-area" :ec="ec"></ec-canvas>
    <ec-canvas id="mychart-dom-area1" canvas-id="mychart-area1" :ec="ec1"></ec-canvas>
  </view>
</template>

<script lang="ts" setup>
  // eslint-disable-next-line import/extensions
  import { reactive } from 'vue'
  import * as echarts from '@components/ec-canvas/echarts.js'
  import './index.scss'

  function initChart(canvas, width, height) {
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

  const ec1 = reactive({
    onInit: initChart
  })
</script>
