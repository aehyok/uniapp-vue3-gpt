<template>
  <view class="familyIncomeEchart">
    <view class="echart">
      <ec-canvas id="mychart-dom-area" canvas-id="mychart-area" :ec="ec"></ec-canvas>
    </view>
    <div class="checkoutMore">查看更多</div>
  </view>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import * as echarts from '../../components/ec-canvas/echarts'

  function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width,
      height
    })
    canvas.setChart(chart)

    const option = {
      // xAxis: {
      //   type: 'category',
      //   boundaryGap: false,
      //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // },
      // yAxis: {
      //   type: 'value'
      // },
      // series: [
      //   {
      //     data: [820, 932, 901, 934, 1290, 1330, 1320],
      //     type: 'line',
      //     areaStyle: {}
      //   }
      // ]
      title: {
        text: '',
        subtext: '家庭经济收入来源(单位：%)',
        left: 'center',
        bottom: '10px'
      },
      tooltip: {
        trigger: 'item'
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left'
      // },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
<style lang="scss">
  .familyIncomeEchart {
    position: relative;
    width: 100%;
    height: 400px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 5px;

    .echart {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      ec-canvas {
        width: 100%;
        height: 95%;
      }
    }
    .checkoutMore {
      position: absolute;
      bottom: -20px;
      left: 0;
      right: 0;
      padding: 5px 0 30px;
      font-size: 12px;
      border-top: 1px solid #e5e7eb;
      color: #018463;
    }
  }
</style>
