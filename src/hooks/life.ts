import { getCurrentInstance } from '@tarojs/taro'
import { onMounted } from 'vue'

const Current = getCurrentInstance()

export function useDidShow(callback: any) {
  onMounted(callback)
  // eslint-disable-next-line no-unused-expressions
  Current?.page?.onShow && (Current.page.onShow = callback)
}
export function usePullDownRefresh(callback: any) {
  // eslint-disable-next-line no-unused-expressions
  Current?.page?.onPullDownRefresh && (Current.page.onPullDownRefresh = callback)
}
export function useReachBottom(callback: any) {
  // eslint-disable-next-line no-unused-expressions
  Current?.page?.onReachBottom && (Current.page.onReachBottom = callback)
}
