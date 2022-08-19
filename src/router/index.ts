// import {
//   Router,
//   Middleware,
//   registerMiddlewares,
//   registerRouterBackListener
// } from 'tarojs-router-next'
// import Taro from '@tarojs/taro'

// const pageJumperMiddleware: Middleware = async (ctx, next) => {
//   console.log('路由变化', ctx)
//   await next()
// }

// // 注册路由中间件
// registerMiddlewares([pageJumperMiddleware])

// // 路由返回调用
// registerRouterBackListener((to, from) => {
//   console.log(`全局监听页面返回：从 ${from.url} 返回到 ${to.url}`)
// })

// export default function useRouter() {
//   /**
//    * 跳转路由
//    * @param  url路径 {string}
//    */
//   const push = (url: string, data: any = {}) => {
//     Router.navigate(
//       {
//         url
//       },
//       data
//     )
//   }

//   const redirect = (url: string, data: any = {}) => {
//     Taro.redirectTo(
//       {
//         url
//       },
//       data
//     )
//   }

//   /**
//    * 返回到上一页
//    * @param delta {number}
//    */
//   const go = (delta: number) => {
//     Taro.navigateBack({
//       delta: -delta
//     })
//   }

//   return {
//     push,
//     go,
//     redirect
//   }
// }
