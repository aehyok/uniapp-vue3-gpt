<template>
  <div class="three_modules">
    <div
      v-for="(item, index) in props.item"
      class="forModules"
      @click="jump(Object.keys(item), item.jumpUrl)"
    >
      <img class="forModulesImg" :src="item.imgUrl" alt="" />
      <div class="forModulesText">
        <p class="forModulesTitle">{{ item.title }}</p>
        <p class="forModuledec">{{ item.dec }}</p>
      </div>
      <div class="forModuledecTriangle">
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import useRouter from '../../utils/router.ts'

  const { push } = useRouter()

  const props = defineProps({
    item: {
      type: Array,
      default: () => []
    }
  })
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

  const jump = (type, url) => {
    if (type[3] === 'jumpUrl') {
      push(url)
    }
  }
</script>
<style lang="scss">
  .three_modules {
    width: 100%;
    box-sizing: border-box;
    .forModules {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // width: 100%;
      height: 128rpx;
      margin: 0rpx 0 20rpx;
      padding: 0 30rpx;
      background-color: #fff;
      border-radius: 5px;
      .forModulesImg {
        width: 12.5%;
        height: 80rpx;
      }
      .forModulesText {
        text-align: center;
        width: 80%;
        margin-left: 30rpx;

        .forModulesTitle {
          font-size: 18px;
          font-weight: 600;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 25px;
          color: #303133;
          text-align: left;
        }
        .forModuledec {
          font-size: 12px;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          // font-weight: 300;
          // line-height: 17px;
          // color: #999999;
        }
      }
      .forModuledecTriangle {
        div {
          width: 15rpx;
          height: 15rpx;
          border-top: 1px solid rgba(153, 153, 153, 1);
          border-right: 1px solid rgba(153, 153, 153, 1);
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
