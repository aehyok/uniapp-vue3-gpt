<template>
  <div>cookie设置后看能否传递到H5页面</div>
</template>
<script lang="ts" setup>
  import cookies from 'weapp-cookie'
  import useRouter from '@utils/router'

  const router = useRouter()
  console.log(router)
  // 获取 cookie
  console.log('11111111111')
  const token = cookies.get('token')
  if (token) {
    cookies.set('token-mini-program', 'ssss-dddd-ffff-cccc', {
      domain: 'sunlight-tech.com'
    })
  }

  console.log(cookies.get('token'), '--1111111111111--ss--dd--')
</script>
