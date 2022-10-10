<template>
  <ul class="infiniteUl" id="refreshScroll" v-if="props.pageModel.total > -1">
    <nut-infiniteloading
      pull-icon="loading"
      load-icon="loading1"
      :use-window="false"
      container-id="refreshScroll"
      :is-open-refresh="true"
      :has-more="props.pageModel.isFinished"
      @load-more="refreshLoadMore"
      :use-capture="false"
      @refresh="refresh"
      @scroll-change="scrollChange"
    >
      <slot> </slot>
    </nut-infiniteloading>
  </ul>
  <nut-empty description="无数据" v-else style="height: 100vh"></nut-empty>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { Toast } from '@nutui/nutui'
  import type { PageModel } from '@/types/list/index'

  const props = defineProps({
    pageModel: {
      type: Object as PropType<PageModel>,
      default: () => {}
    }
  })
  const emits = defineEmits(['getList', 'update:pageModel'])

  const refreshLoadMore = (done: any) => {
    setTimeout(() => {
      props.pageModel.page++
      emits('getList')
      done()
    }, 500)
  }

  const refresh = (done: any) => {
    setTimeout(() => {
      props.pageModel.page = 1
      props.pageModel.isFinished = true
      emits('getList')
      Toast.success('刷新成功')
      done()
    }, 1000)
  }

  const scrollChange = () => {
    // console.log('高度监听', e)
  }
</script>

<style>
  .infiniteUl {
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background: #eee;
  }
  .infiniteLi {
    margin-top: 10px;
    font-size: 14px;
    color: rgba(100, 100, 100, 1);
    text-align: center;
    height: 80px;
    background-color: #fff;
  }
</style>
