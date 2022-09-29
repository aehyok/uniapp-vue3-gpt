<!--简单文本框-->
<template>
  <nut-form-item
    :label="column.title + '：'"
    :prop="column.name"
    :rules="rules"
    :required="column.required"
  >
    <nut-input v-model="value" placeholder="请输入姓名"></nut-input>
  </nut-form-item>
</template>
<script setup>
  import { computed, ref } from 'vue'

  const emit = defineEmits(['update:data'])
  const props = defineProps({
    column: {
      type: [Object],
      default: () => {}
    },
    data: {
      type: [Number, String],
      default: ''
    }
  })
  const { column } = props
  console.log(column, 'update:data')
  const required = ref(false)
  required.value = column.required

  const rules = ref([])
  const placeholder = column.placeholder ? column.placeholder : `请输入${column.title}`
  rules.value = [
    {
      required: column.required,
      message: placeholder,
      trigger: ['blur', 'change']
    }
  ]
  // 验证
  if (column && column.rules) {
    console.log(rules, column.rules, 'column.rules-----------')

    rules.value = [...rules.value, ...column.rules]
  }

  const value = computed({
    get() {
      return props.data
    },
    set(val) {
      emit('update:data', val)
    }
  })
</script>
<style lang="scss">
  .nut-form-item__body__tips {
    font-size: 11px;
  }

  .nut-input.nut-input-border {
    border-bottom: 0;
  }
  .nut-input {
    padding: 0px;
  }
  .input-text {
    color: #000;
  }
</style>
