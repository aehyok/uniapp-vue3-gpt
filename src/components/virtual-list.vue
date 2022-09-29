<template>
  <ul class="infiniteUl" id="refreshScroll">
    <nut-infiniteloading
      pull-icon="more-x"
      container-id="refreshScroll"
      :use-window="false"
      :is-open-refresh="true"
      :has-more="refreshHasMore"
      @load-more="refreshLoadMore"
      @refresh="refresh"
    >
      <slot></slot>
    </nut-infiniteloading>
  </ul>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, toRefs } from 'vue'

  const refreshHasMore = ref(true)
  const state = reactive({
    refreshList: [] as any
  })
  const refreshLoadMore = (done: Function) => {
    setTimeout(() => {
      const curLen = state.refreshList.length
      for (let i = curLen; i < curLen + 10; i++) {
        state.refreshList.push(`${i}`)
      }
      if (state.refreshList.length > 30) refreshHasMore.value = false
      done()
    }, 500)
  }

  const refresh = (done: Function) => {
    setTimeout(() => {
      //   Toast('刷新成功')
      console.log('刷新成功')
      setTimeout(() => {
        done()
      }, 100)
    }, 1000)
  }
  const init = () => {
    for (let i = 0; i < 10; i++) {
      state.refreshList.push(`${i}`)
    }
  }
  onMounted(() => {
    init()
  })
</script>

<style>
  .infiniteUl {
    height: 100%;
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
  }
</style>
