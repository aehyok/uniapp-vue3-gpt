// import Taro from '@tarojs/taro'
// import request from '@utils/request'

// export const useLogin = (callback: any = undefined) => {
//   try {
//     const token = Taro.getStorageSync('token')
//     if (token && token.authorization) {
//       console.log(token, 'token')
//       callback?.()
//     } else {
//       Taro.login({
//         success(res) {
//           console.log(res.code, 'code')
//           request({
//             url: `/api/sso/auth/applet/login?code=${res.code}`
//           }).then((result: any) => {
//             console.log(result, 'result')
//             Taro.setStorage({
//               key: 'token',
//               data: result.data
//             })
//             callback?.()
//           })
//         }
//       })
//     }
//   } catch (e) {
//     // Do something when catch error
//   }
// }
