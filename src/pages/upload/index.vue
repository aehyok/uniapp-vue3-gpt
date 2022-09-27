<template>
  <div style="margin-top: 20px">
    <nut-button type="primary">主要按钮</nut-button>
    <nut-uploader
      :url="state.uploadUrl"
      :accept="state.accept"
      :name="state.fileName"
      v-model:file-list="state.defaultFileList"
      :headers="state.headers"
      @before-xhr-upload="beforeXhrUpload"
      @before-upload="beforeUpload"
      multiple
      maximum="9"
    ></nut-uploader>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import Taro from '@tarojs/taro'
  import { useDidShow } from '@/hooks/life'
  import domain from '@/utils/domain'

  const token = Taro.getStorageSync('token')
  console.log(token, 'token')
  useDidShow(() => {
    console.log('----sueDidShow----')
  })
  const state = reactive({
    fileName: 'files',
    uploadUrl: `${domain}/api/sunfs/upload`,
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50Ijoib1dvZWw1YnhtMTVURkVvcktIUUNDcmFmYmRwSSIsInVpZCI6Njg5LCJjcmVhdGVUaW1lIjoxNjY0MTcwOTM5LCJjbGllbnRJcCI6IjExMy44OS4yMzQuMjQyIiwiZXh0ZW5kVG9rZW4iOiIiLCJhcmVhSWRzIjpbMF19.VgyR_56Ykay_L6iT3_1bcQdbhO3UIpxabSRGZjejxOo.1664170939186' // token.authorization
    },
    defaultFileList: [],
    formData: {
      isMaterial: false
    },
    accept: '*'
  })

  const beforeXhrUpload = (taroUploadFile: any, options: any) => {
    console.log(taroUploadFile, options, '------------------')
    const s = 11
    if (s === 10) {
      console.log('sss')
    } else {
      console.log('aaa')
    }
  }

  const beforeUpload = () => {}
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
