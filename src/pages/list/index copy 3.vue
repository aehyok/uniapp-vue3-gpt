<template>
  <div class="demo">
    <!-- <h2>基础用法</h2> -->
    <nut-cell id="scroll" class="infiniteUl" style="height: 100vh">
      <nut-infiniteloading
        containerId="scroll"
        :use-window="false"
        :has-more="hasMore"
        @load-more="loadMore"
        :is-open-refresh="true"
        @refresh="refresh"
        @scroll-change="scrollChange"
      >
        <nut-list :height="60" :listData="count" @scroll-bottom="handleScroll">
          <template v-slot="{ item }">
            <div class="list-item">
              {{ item }}
            </div>
          </template>
        </nut-list>
      </nut-infiniteloading>
    </nut-cell>
  </div>
</template>
<script lang="ts">
  import { onMounted, reactive, toRefs, ref } from 'vue'

  export default {
    props: {},
    setup() {
      const state = reactive({
        count: new Array(30).fill(0)
      })
      const hasMore = ref(true)
      const handleScroll = () => {
        console.log('如果')

        let arr = new Array(20).fill(0)
        const len = state.count.length
        state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1))
      }
      const loadMore = (done: any) => {
        setTimeout(() => {
          const curLen = state.count.length
          for (let i = curLen; i < curLen + 10; i++) {
            // data.defutList.push(`${i}`)
          }
          // if (data.defultList.length > 30) hasMore.value = false
          done()
        }, 500)
      }
      const refresh = (done: any) => {
        setTimeout(() => {
          done()
        }, 1000)
      }
      const scrollChange = (e: any) => {
        console.log(e, '滚动高度')
      }
      onMounted(() => {
        state.count = state.count.map((item: number, index: number) => index + 1)
      })

      return { ...toRefs(state), hasMore, loadMore, handleScroll, refresh, scrollChange }
    }
  }
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
      overflow: hidden;
      width: 100px;
      height: 50px;
      margin-bottom: 10px;
      background-color: #f4a8b6;
      border-radius: 10px;
    }
  }
  .nut-list-item {
    width: 100px;
  }
  .infiniteUl {
    height: 300px;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background: #eee;
  }
</style>
