<template>
  <div class="villageMoodProfile">
    <scroll-view
      :scroll-y="true"
      style="height: 100%"
      @scrolltolower="lower"
      :scroll-into-view="toView"
      :scroll-top="scrollTop"
      :refresherEnabled="state.refresherEnabled"
      @refresherrefresh="upper"
      :refresher-triggered="state.refresherTriggered"
      @refresherrestore="restoration"
      :lowerThreshold="50"
    >
      <div v-for="(item, index) in state.refreshList" class="forVillageMoodProfile">
        <div class="villageMoodProfileImg">
          <p>{{ item }}</p>
        </div>
        <div class="villageMoodProfileInfo">
          <p>天溪村</p>
          <p>陕西省咸阳市杨陵区田西大道8号</p>
          <div class="swiper_module_body">
            <itemDataVue v-for="(item, index) in list" :data="item" />
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script setup>
  import itemDataVue from '../../components/itemData.vue'
  import { ScrollView } from '@tarojs/components'
  import { ref, reactive } from 'vue'
  const scrollTop = ref(0)
  const toView = 'demo2'
  const refreshHasMore = ref(true)
  const state = reactive({
    refreshList: [],
    refresherEnabled: true,
    refresherTriggered: true
  })

  const init = () => {
    for (let i = 0; i < 10; i++) {
      state.refreshList.push(`${i}`)
    }
  }

  const upper = (e) => {
    setTimeout(() => {
      console.log('下拉书信了，触发了，老铁upper', e)

      state.refresherTriggered = false
    }, 500)
  }
  const restoration = () => {
    console.log('复位')
    state.refresherTriggered = true
  }
  const lower = (e) => {
    const curLen = state.refreshList.length
    for (let i = curLen; i < curLen + 10; i++) {
      state.refreshList.push(`${i}`)
    }
    // if (state.defultList.length > 30)
    console.log('到底了喂 亲亲', e)
  }

  const list = ref([
    {
      name: '村庄数',
      num: 3654120
    },
    {
      name: '村民数',
      num: 55
    },
    {
      name: '党员树',
      num: 651421
    }
  ])
  init()
</script>
<style lang="scss">
  .villageMoodProfile {
    background-color: #fff;
    padding: 0 20rpx;
    height: 800rpx;
    overflow: scroll;
    .forVillageMoodProfile {
      display: flex;
      align-items: center;
      height: 180rpx;
      .villageMoodProfileImg {
        width: 25%;
      }
      .villageMoodProfileInfo {
        width: 75%;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
</style>
