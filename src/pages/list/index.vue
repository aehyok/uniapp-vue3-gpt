<template>
  <div class="demo">
    <vitrual-list @getList="getList" v-model:pageModel="pageModel">
      <div v-for="(item, index) in state.dataList" :key="index" class="list-item" @click="jump">
        {{ item.messageName }}
      </div>
    </vitrual-list>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, reactive } from 'vue'
  import Taro from '@tarojs/taro'
  import vitrualList from '@/components/virtual-list.vue'
  import { getAreaList, getAreaLisst } from '@/services/api'
  import type { PageModel } from '@/types/list/index'

  const state = reactive({
    dataList: [] as any
  })

  const pageModel = reactive<PageModel>({
    page: 1,
    limit: 10,
    total: 0,
    isFinished: true
  })

  const getList = () => {
    getAreaLisst({
      page: pageModel.page,
      limit: pageModel.limit,
      keyword: ''
    }).then((res: any) => {
      if (res?.code === 200) {
        let rows = res.data.docs
        if (rows.length === 0 || rows.length < pageModel.limit) {
          pageModel.isFinished = false
        }
        if (pageModel.page === 1) {
          state.dataList = rows
        } else {
          state.dataList = [...state.dataList, ...rows]
        }
        pageModel.total = res.data.total || -1
      }
    })
  }

  const jump = () => {
    Taro.navigateTo({
      url: '/pages/index/index?id=1'
    })
  }
  onMounted(() => {
    getList()
  })
</script>
<style lang="scss">
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
