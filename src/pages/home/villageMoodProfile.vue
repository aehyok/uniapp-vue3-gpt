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
      <template v-for="(item, index) in state.refreshList">
        <div class="forVillageMoodProfile" @click="villageClick(item.id)">
          <div class="villageMoodProfileImg">
            <img src="https://dvs-dev.sunlight-tech.com/wechat/images/home/default.png" alt="" />
          </div>
          <div class="villageMoodProfileInfo">
            <p class="villageMoodProfileInfoVillageName">{{ item.name ? item.name : '田西村' }}</p>
            <p class="villageMoodProfileInfoAdress">
              <img src="https://dvs-dev.sunlight-tech.com/wechat/images/home/location.png" alt="" />
              {{ item.committeeAddress ? item.committeeAddress : '请联系管理员填写地址' }}
            </p>
            <div class="swiper_module_body">
              <itemDataVue v-for="(item, index) in list" :data="item" />
            </div>
          </div>
        </div>
      </template>
    </scroll-view>
  </div>
</template>
<script setup>
  import { ScrollView } from '@tarojs/components'
  import Taro from '@tarojs/taro'
  import { ref, reactive, watch } from 'vue'
  import itemDataVue from '../../components/fourMainPage/itemData.vue'
  import useRouter from '@utils/router'
  const router = useRouter()
  const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    }
  })
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

  const villageClick = (id) => {
    router.push('/pages/echarts/index')
  }
  const list = ref([
    {
      name: '村名数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: 55,
      numStyle: {
        color: '#FCBD3F',
        'font-size': '14px'
      }
    },
    {
      name: '党员数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: 5845,
      numStyle: {
        color: '#0AC496',
        'font-size': '14px'
      }
    },
    {
      name: '党员数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: 621,
      numStyle: {
        color: '#3F7FFC',
        'font-size': '14px'
      }
    }
  ])
  watch(
    () => props.data,
    (newValue, oldValue) => {
      state.refreshList = newValue
      console.log(state.refreshList, '----')
    },
    {}
  )
</script>
<style lang="scss">
  .villageMoodProfile {
    background-color: #fff;
    padding: 20px 10px;
    height: 800rpx;
    overflow: scroll;
    border-radius: 5px;
    .forVillageMoodProfile {
      display: flex;
      align-items: center;
      height: 180rpx;
      padding: 15px 0;
      border-bottom: 1px solid rgba(229, 231, 235, 1);
      .villageMoodProfileImg {
        width: 25%;
        height: 100%;
        margin-top: 4px;
        img {
          width: 100%;
          height: 96%;
          border-radius: 5px;
        }
      }
      .villageMoodProfileInfo {
        width: 65%;
        text-align: left;
        margin-left: 10px;
        .villageMoodProfileInfoVillageName {
          font-size: 18px;
          font-weight: 550;
          line-height: 25px;
          color: #303133;
        }
        .villageMoodProfileInfoAdress {
          font-size: 12px;
          font-weight: 300;
          line-height: 17px;
          color: #999999;

          img {
            width: 32rpx;
            height: 32rpx;
            vertical-align: -10%;
          }
        }
      }
    }
    .forVillageMoodProfile:nth-child(1) {
      padding-top: 0;
    }
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
</style>
