<template>
  <div class="demo">
    <vitrual-list>
      <div v-for="(item, index) in state.count" :key="index" class="list-item">
        {{ item.name }}
      </div>
    </vitrual-list>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, reactive } from 'vue'
  import { usePullDownRefresh } from '@tarojs/taro'
  import vitrualList from '@/components/virtual-list.vue'
  import { getAreaList } from '@/services/api'

  const state = reactive({
    count: new Array(100).fill(0)
  })

  const pageModel = reactive({
    page: 1,
    limit: 10
  })

  //   const handleScroll = () => {
  //     let arr = new Array(100).fill(0)
  //     const len = state.count.length
  //     state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1))
  //   }
  const init = () => {
    // getVillageCount();
    getAreaList({
      page: pageModel.page,
      limit: pageModel.limit,
      level: 5
    }).then((res: any) => {
      if (res?.code === 200) {
        state.count = res.data.docs
      }
    })
  }
  usePullDownRefresh(() => {
    console.log('onPullDownRefresh')
  })
  onMounted(() => {
    init()
  })
</script>
<style lang="scss">
  body {
    width: 100%;
    height: 100vh;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .demo {
    height: 100vh;

    .nut-cell {
      height: 100%;
    }

    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
      background-color: #f4a8b6;
      border-radius: 10px;
    }
  }
</style>
