import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'taro-axios'
import Taro from '@tarojs/taro'
import domain from './domain'
// import useRouter from '@/router'

// import { useRouter } from 'vue-router'
// const router = useRouter()
interface ApiResult {
  code: number
  message: string
  data?: any
}

const instance = axios.create({
  // 超时时间 1 分钟
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config, 'config')
    config.url = domain + config.url
    const token = Taro.getStorageSync('token')
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: token.authorization || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50Ijoib1R2eFh4TUlGRnhkM1BQOU44Qjd2YzV0bHBXQSIsInVpZCI6NjgzLCJjcmVhdGVUaW1lIjoxNjY0MzUyNjU5LCJjbGllbnRJcCI6IjEyNy4wLjAuMSIsImV4dGVuZFRva2VuIjoiNjFfNXFyaTBFUWlqeDFsVU5PaExBRW9TR2h5TkxCZlBjU0JVM1lKbW1UMzRJUU5mRzhydlBkVWRPV084RVkyUl82UW1lQUhRZEJmczRHQlBGcnU3eTdmYVRIQkdhS1dQZGNqSm05c3lwYzAyVnMiLCJhcmVhSWRzIjpbMjNdfQ.13xTl3IFys6TamGxBn64zFDKsDBpWZt8gsZGe_rQQwM.1664352659879',
      'Content-Type': 'application/json',
      ...config.headers
    }
    return config
  },
  (err: AxiosError) => {
    Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response, 'response');

    return response
  },
  (err: AxiosError) => {
    console.log(err, 'err');

    return Promise.reject(err)
  }
)

const showToast = (title: string) => {
  // Taro.showToast({
  //   title,
  //   icon: 'none'
  // })
  console.log(title)
}
const showMessage = (title: unknown) => {
  const message = JSON.stringify(title).replace(/"/g, '')
  if (message.indexOf('Network') > -1) {
    showToast('请求失败，请联系客服')
  } else if (message.indexOf('timeout') > -1) {
    showToast('请求超时')
  } else {
    // showToast({})
  }
}
const request = (options: AxiosRequestConfig = {}) => {
  // Taro.showLoading({
  //   title: '加载中...'
  // })
  console.log(options, "options");

  Taro.showNavigationBarLoading()
  return new Promise<ApiResult>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse) => {
        console.log(response, "嘻嘻嘻");

        if (response?.status === 200 && response?.data?.code === 200) {
          return resolve(response.data)
        }
        if (response?.status === 200 && response?.data?.code === -1) {
          try {
            Taro.clearStorageSync()
          } catch (e) {
            // Do something when catch error
          }
          console.log('token失效了=-relaunch', response)
          // Taro.reLaunch({ url: '/pages/clean/index' })
        }
        if (response?.status === 200 && response?.data?.code === -2) {
          try {
            Taro.clearStorageSync()
          } catch (e) {
            // Do something when catch error
          }
          console.log('token失效了=-relaunch', response)
          Taro.reLaunch({ url: '/pages/clean/index' })
        }
        return reject(response)
      })
      .catch((result) => {
        console.log(result, "哈哈哈");

        if (result?.status === 200 && result?.data?.code === -1) {
          /// /重新登陆 result?.data?.code === -1 ||
          Taro.reLaunch({ url: '/pages/clean/index' })
        } else {
          // 其他情况 code 非 0 情况 有message 就显示
          showMessage(result?.data?.message ?? result?.message)
        }
        reject(result)
      })
      .finally(() => {
        Taro.hideLoading()
        Taro.hideNavigationBarLoading()
      })
  })
}
export default request
