import Taro from '@tarojs/taro'

const CODE_SUCCESS = '200'
const CODE_AUTH_EXPIRED = '600'

function getStorage(key) {
  return Taro.getStorage({ key })
    .then((res) => res.data)
    .catch(() => '')
}

function updateStorage(data = {}) {
  return Promise.all([
    Taro.setStorage({ key: 'token', data: data['3rdSession'] || '' }),
    Taro.setStorage({ key: 'uid', data: data.uid || '' })
  ])
}

/**
 * 简易封装网络请求
 * @param {*} options
 */
export default async function fetch(options) {
  const { url, payload, method = 'GET', showToast = true, autoLogin = true } = options
  const token = await getStorage('token')
  const header = token ? { 'WX-PIN-SESSION': token, 'X-WX-3RD-Session': token } : {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request({
    url,
    method,
    data: payload,
    header
  })
    .then(async (res) => {
      const { code, data } = res.data
      if (code !== CODE_SUCCESS) {
        if (code === CODE_AUTH_EXPIRED) {
          await updateStorage({})
        }
        return Promise.reject(res.data)
      }

      return data
    })
    .catch((err) => {
      const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
      if (showToast) {
        Taro.showToast({
          title: (err && err.errorMsg) || defaultMsg,
          icon: 'none'
        })
      }

      if (err.code === CODE_AUTH_EXPIRED && autoLogin) {
        Taro.navigateTo({
          url: '/pages/user-login/user-login'
        })
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: defaultMsg, ...err })
    })
}
