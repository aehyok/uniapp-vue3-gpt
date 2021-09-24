<template>
  <view class="index">
    <text>{{ msg }}</text>
    <AtButton type='primary'>按钮文案</AtButton>
    <AtList>
      <AtListItem title='标题文字' note='描述信息' />
      <AtListItem title='标题文字' note='描述信息' arrow='right' />
      <AtListItem
        arrow='right'
        note='描述信息'
        title='标题文字标题文字标题文字标题文字标题文字'
        extraText='详细信息详细信息详细信息详细信息'
      />
    </AtList>
      <view>
      <AtForm>
        <AtInput 
          name='value' 
          title='文本' 
          type='text' 
          placeholder='单行文本' 
          :value="value"
          @change="handleChange" 
        />
        <AtButton type='primary' formType='submit' @click="onSubmit">提交</AtButton>
        <AtButton formType='reset' @click="onReset">重置</AtButton>
      </AtForm>
  </view>
  </view>
</template>

<script setup>
import { ref, defineComponent } from 'vue'
import './index.scss'
const msg = ref('Hello1111 world')

const value = ref('')

const handleChange = () => {
  console.log('handleChange')
}

const onSubmit = () => {
  console.log('onSubmit')
}

const onReset = () => {
  console.log('onReset')
}
</script>
