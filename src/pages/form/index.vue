<template>
  <div class="main-home">
    <nut-form :model-value="dynamicForm.state" ref="dynamicRefForm">
      <nut-form-item
        label="姓名"
        prop="name"
        required
        :rules="[{ required: true, message: '请填写1姓名' }]"
      >
        <nut-input v-model="dynamicForm.state.name" placeholder="请输入姓名"></nut-input>
      </nut-form-item>
      <SlForm :columnList="state.formListItem" :formData="state.form"></SlForm>
      <nut-button
        type="primary"
        style="margin-right: 10px"
        size="small"
        @click="dynamicForm.methods.submit"
        >提交</nut-button
      >
    </nut-form>
  </div>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue'
  import SlForm from '@/components/form/index.vue'

  export default {
    components: {
      SlForm
    },
    setup() {
      const dynamicRefForm = ref<any>(null)

      const state = reactive({
        formListItem: [
          {
            name: 'houseName',
            type: 'text',
            title: '门牌标签'
          },
          {
            name: 'houseName1',
            type: 'text',
            title: '门牌标签1',
            required: true
          },
          {
            name: 'houseName2',
            type: 'text',
            title: '门牌标签2',
            readonly: true
          }
        ],
        form: {
          houseName: '1',
          houseName1: '2',
          houseName2: '3'
        }
      })
      const dynamicForm = {
        state: reactive({
          name: '',
          tels: new Array({
            key: 1,
            value: ''
          })
        }),

        methods: {
          submit() {
            dynamicRefForm.value.validate().then(({ valid, errors }: any) => {
              if (valid) {
                console.log('success', dynamicForm)
              } else {
                console.log('error submit!!', errors)
              }
            })
          }
        }
      }
      return {
        dynamicForm,
        dynamicRefForm,
        state
      }
    }
  }
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
