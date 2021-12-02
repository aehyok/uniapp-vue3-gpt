import Taro from '@tarojs/taro'

const test = 1
console.log(test)

export default function useRouter() {
  /**
   * 跳转路由
   * @param  url路径 {string}
   */
  const push = (url: string) => {
    Taro.navigateTo({
      url
    })
  }

  /**
   * 返回到上一页
   * @param delta {number}
   */
  const go = (delta: number) => {
    Taro.navigateBack({
      delta: -delta
    })
  }

  return {
    push,
    go
  }
}
