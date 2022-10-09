<template>
  <ul class="infiniteUl" id="refreshScroll" style="height: 100vh">
    <!-- container-id="refreshScroll" -->
    <nut-infiniteloading
      pull-icon="JD"
      :use-window="true"
      container-id="refreshScroll"
      :is-open-refresh="true"
      :has-more="refreshHasMore"
      @load-more="refreshLoadMore"
      :use-capture="true"
      @refresh="refresh"
      @scroll-change="scrollChange"
    >
      <li class="infiniteLi" v-for="(item, index) in refreshList" :key="index">{{ item }}</li>
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref, reactive, onMounted, toRefs } from 'vue'

  export default {
    setup() {
      const refreshHasMore = ref(true)
      const data = reactive({
        refreshList: []
      })
      const refreshLoadMore = (done) => {
        console.log('独自守着伤悲')
        setTimeout(() => {
          const curLen = data.refreshList.length
          for (let i = curLen; i < curLen + 10; i++) {
            data.refreshList.push(`${i}`)
          }
          if (data.refreshList.length > 30) refreshHasMore.value = false
          done()
        }, 500)
      }

      const refresh = (done) => {
        setTimeout(() => {
          // Toast.success('刷新成功')
          done()
        }, 1000)
      }
      const init = () => {
        for (let i = 0; i < 9; i++) {
          data.refreshList.push(`${i}`)
        }
      }

      const scrollChange = (e) => {
        console.log('高度监听', e)
      }
      onMounted(() => {
        init()
      })
      return { refreshLoadMore, refreshHasMore, scrollChange, refresh, ...toRefs(data) }
    }
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
