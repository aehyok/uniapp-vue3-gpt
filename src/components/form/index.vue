<template>
  <!-- 对象 -->
  <template v-if="columnList">
    <template v-for="item in columnList" :key="item">
      <component-view
        :labelWidth="labelWidth"
        :column="item"
        :formData="formData"
        :key="item.key"
        v-if="isShow(item, formData)"
      />
    </template>
  </template>
  <!-- 数组 -->
</template>
<script setup>
  import ComponentView from './input/component-view.vue'

  // const emit = defineEmits(['search'])

  const props = defineProps({
    columnList: {
      type: [Object, Array],
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: String,
      default: '7em'
    }
  })
  console.log(props.columnList, 'props.columnList')

  const isShow = (column, formData) => {
    // console.log(column, column.isshow, 'isshow')
    if (column && column.isshow) {
      // console.log(formData, '--------------------00000')
      return column.isshow(formData)
    }
    return true
  }
</script>
<style>
  .van-cell-group__title {
    background: #fff;
    color: #323233;
    padding: 14px;
  }

  .form-cell-group {
    margin-bottom: 20px;
  }
</style>
