/// <reference types="@tarojs/taro" />

declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.style'

// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

declare module '@tarojs/components' {
  export * from '@tarojs/components/types/index.vue3'
}
