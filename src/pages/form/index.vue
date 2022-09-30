<template>
  <div class="main-home">
    <nut-navbar title="详情"> </nut-navbar>
    <nut-form
      :model-value="state.form"
      ref="dynamicRefForm"
      :rules="{
        houseName: [{ required: true, message: '请输入你好呀' }]
      }"
    >
      <SlForm :columnList="state.formListItem" :formData="state.form"></SlForm>
      <nut-button type="default" style="margin-right: 10px" @click="dynamicForm.methods.submit"
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
      const rules = [{ required: true, message: '请填写1姓名' }]
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
            maxlength: 10,
            required: true
          },
          {
            name: 'houseName2',
            type: 'text',
            title: '门牌标签2',
            readonly: true
          },
          {
            name: 'houseName3',
            type: 'textarea',
            title: '门牌标签3'
          },
          {
            name: 'houseName4',
            type: 'radio',
            title: '门牌标签4',
            dictionary: [
              {
                code: 1,
                name: '11'
              },
              {
                code: 2,
                name: '12'
              },
              {
                code: 3,
                name: '13'
              }
            ]
          }
        ],
        form: {
          houseName: '1',
          houseName1: '',
          houseName2: '3',
          houseName3: '',
          houseName4: ''
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
              console.log(valid, errors)

              if (valid) {
                console.log('success', state.form)
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
        state,
        rules
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
