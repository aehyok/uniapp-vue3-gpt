<template>
  <div class="swiper_module_head">
    <span class="swiper_module_head_title">杨凌区</span>
    <span class="swiper_module_head_weather">10-12多云</span>
  </div>
  <div class="swiper_module_body">
    <itemDataVue v-for="(item, index) in list" :data="item" />
  </div>
</template>
<script setup>
  import { ref, watch } from 'vue'
  import itemDataVue from './itemData.vue'
  const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    }
  })
  const list = ref([
    {
      name: '村庄数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: props.data?.villageCount,
      numStyle: {
        color: '#FCBD3F',
        'font-size': '24px',
        'line-height': '42px'
      }
    },
    {
      name: '村民数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: props.data?.populationCount,
      numStyle: {
        color: '#0AC496',
        'font-size': '24px',
        'line-height': '42px'
      }
    },
    {
      name: '党员数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: props.data?.partyCount,
      numStyle: {
        color: '#3F7FFC',
        'font-size': '24px',
        'line-height': '42px'
      }
    }
  ])

  watch(
    () => props.data,
    (newValue, oldValue) => {
      list.value[0].num = newValue.villageCount
      list.value[1].num = newValue.populationCount
      list.value[2].num = newValue.partyCount
    },
    {}
  )
</script>
<style lang="scss">
  .swiper_module_head {
    padding: 20rpx 30rpx;
    display: flex;
    justify-content: space-between;
    .swiper_module_head_title {
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      color: #303133;
    }
    .swiper_module_head_weather {
      font-size: 12px;
      font-weight: 300;
      line-height: 17px;
      color: #606266;
    }
  }
  .swiper_module_body {
    display: flex;
    padding: 0rpx 80rpx;
    justify-content: space-between;
    text-align: center;
  }
</style>
