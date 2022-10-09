<template>
  <view class="container aaaa">
    <view class="page-body">
      <view class="page-section">
        <!-- <view class="page-section-title">
            <text>Vertical Scroll - 纵向滚动</text>
          </view> -->
        <view class="page-section-spacing">
          <scroll-view
            :scroll-y="true"
            style="height: 300px"
            @scrolltoupper="upper"
            @scrolltolower="lower"
            @scroll="scroll"
            :lowerThreshold="200"
            :scroll-into-view="state.toView"
            :scroll-top="state.scrollTop"
          >
            <view id="demo1" class="scroll-view-item demo-text-1">1</view>
            <view id="demo2" class="scroll-view-item demo-text-2">2</view>
            <view id="demo3" class="scroll-view-item demo-text-3">3</view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    scrollTop: 0,
    toView: 'demo2'
  })

  const upper = (e) => {
    console.log('upper:', e)
  }

  const lower = (e) => {
    console.log('lower:', e)
  }

  const scroll = (e) => {
    // console.log('scroll:', e)
  }
</script>

<style>
  .aaaa {
    height: 300px !important;
  }
  .page-section-spacing {
    margin-top: 60rpx;
  }
  .scroll-view_H {
    white-space: nowrap;
  }
  .scroll-view-item {
    height: 300rpx;
  }
  .scroll-view-item_H {
    display: inline-block;
    width: 100%;
    height: 300rpx;
  }

  .demo-text-1 {
    background: #ccc;
  }
  .demo-text-2 {
    background: #999;
  }
  .demo-text-3 {
    background: #666;
  }
</style>
