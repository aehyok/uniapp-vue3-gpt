<template>
  <view class="echarts">
    <div v-if="show">1111111111111</div>
    <ec-canvas id="mychart-dom-area" canvas-id="mychart-area" :ec="ec"></ec-canvas>
    <ec-canvas id="mychart-dom-area1" canvas-id="mychart-area1" :ec="ec1"></ec-canvas>
    <nut-button type="primary" @click="jumpClick">test</nut-button>
  </view>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import * as echarts from '../../components/ec-canvas/echarts'
  import './index.scss'
  import useRouter from '../../utils/router'
  import { useDidShow } from '@/hooks/life'
  const show = ref(false)
  useDidShow(() => {
    console.log('sssssssssss')
  })
  const router = useRouter()
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

  const jumpClick = () => {
    console.log('jumpClick')
    router.push('/pages/test/index')
  }
  const ec = reactive({
    onInit: initChart
  })

  const ec1 = reactive({
    onInit: initChart
  })
</script>
