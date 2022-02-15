// // 注意引入顺序，该顺序是中间件的执行顺序
// import './auth-check.ts'
// import './fetch-info.ts'

// import Taro from '@tarojs/taro'
import { Middleware, registerMiddlewares } from 'tarojs-router-next'

export const M1: Middleware = async (ctx, next) => {
  console.log('第一个中间件执行：', ctx.route.url)
  await next() // 执行下一个中间件
}

export const M2: Middleware = async (ctx, next) => {
  console.log('第二个中间件执行：', ctx.route.url)
  await next() // 执行下一个中间件
}

export const M3: Middleware = async (ctx, next) => {
  console.log('第三个中间件执行：', ctx.route.url)
  await next() // 执行下一个中间件
}

// 注册路由中间件
registerMiddlewares([M1, M2, M3])

// 其实会执行四个中间件 [M1, M2, M3, 跳转到目标页面的中间件]
