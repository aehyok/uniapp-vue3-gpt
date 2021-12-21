<template>
  <div class="authenticationHometown">
    <nut-navbar @on-click-back="back" title="认证家乡"></nut-navbar>
    <nut-form :model-value="formData" ref="ruleForm">
      <nut-form-item
        label=""
        prop="village"
        required
        :rules="[{ required: true, message: '请选择所在社区/村' }]"
      >
        <picker mode="selector" :range="formData.selector" @change="onChange">
          <p class="authenticationHometown_p">我的家乡</p>
          <!-- <input
            class="nut-input-text"
            v-model="formData.village"
            placeholder="请选取您所在的社区/村"
            type="text"
          /> -->
          <nut-input placeholder="请输入文本" v-model="formData.village" label="" readonly />
          <div class="homeTownSlot">
            <div class="triangle"></div>
          </div>
        </picker>
      </nut-form-item>
      <nut-form-item
        label=""
        prop="mobile"
        required
        :rules="[
          { required: true, message: '请填写手机号码' },
          { validator: customValidator, message: '必须输入数字' },
          { regex: /^1\d{10}$/, message: '必须输入11位手机号码' }
        ]"
      >
        <p class="authenticationHometown_p">手机号</p>

        <input
          class="nut-input-text"
          v-model="formData.mobile"
          placeholder="请输入手机号码"
          type="text"
        />
      </nut-form-item>
      <nut-form-item
        label=""
        prop="verificationCode"
        required
        :rules="[{ required: true, message: '请填写手机验证码' }]"
        class="specialButton"
      >
        <p class="authenticationHometown_p">验证码</p>
        <input
          class="nut-input-text"
          v-model="formData.verificationCode"
          placeholder="请输入手机验证码"
          type="text"
        />
        <div class="homeTownSlot">
          <nut-button type="primary" shape="square" size="small">获取验证码</nut-button>
        </div>
      </nut-form-item>

      <nut-cell>
        <nut-button type="primary" size="small" style="margin-right: 10px" @click="submit"
          >提交</nut-button
        >
        <nut-button size="small" @click="reset">重置提示状态</nut-button>
      </nut-cell>
    </nut-form>
  </div>
</template>

<script setup>
  import useRouter from '../../utils/router.ts'

  import { reactive, ref, onMounted } from 'vue'

  const { push, go } = useRouter()
  const formData = reactive({
    mobile: '',
    village: '',
    verificationCode: '',
    address: '',
    selector: ['美国', '中国', '巴西', '日本'],
    aa: []
  })
  const validate = (item) => {
    console.log(item)
  }
  const ruleForm = ref(null)

  const submit = () => {
    ruleForm.value.validate().then(({ valid, errors }) => {
      if (valid) {
        console.log('success', formData)
      } else {
        console.log('error submit!!', errors)
      }
    })
  }
  const reset = () => {
    console.log(formData.aa, '>>>><<<<<')
    ruleForm.value.reset()
  }

  const back = () => {
    go(-1)
  }
  // 函数校验
  const customValidator = (val) => /^\d+$/.test(val)
  // Promise 异步校验
  const asyncValidator = (val) => {
    return new Promise((resolve) => {
      // Toast.loading('模拟异步验证中...');
      setTimeout(() => {
        // Toast.hide();
        resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val))
      }, 1000)
    })
  }
  const onChange = (e) => {
    console.log(e)
    formData.village = formData.selector[e.detail.value]
  }
  onMounted(() => {})
</script>

<style lang="scss">
  .authenticationHometown {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // background-color: #f3f3f3;
    .homeTownSlot {
      position: absolute;
      right: 15px;
      top: 50px;
      .triangle {
        width: 10px;
        height: 10px;
        // background-color: blueviolet;
        transform: rotate(45deg);
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        margin-top: 8px;
      }
    }
    .nut-input-text {
      width: 75%;
    }
    .authenticationHometown_p {
      margin: 10px 0;
      color: #000;
    }
    .nut-input {
      padding: 0;
      border-bottom: 0;
      .input-text {
        padding-left: 0;
      }
    }
    .nut-input-label {
      width: 0;
    }
  }
  .aaaa {
    position: absolute;
    top: 10px;
    right: 0px;
  }
</style>
