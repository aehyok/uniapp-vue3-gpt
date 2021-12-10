import Taro from '@tarojs/taro'
import domain from '@utils/domain'

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
export default async function request(options) {
  const { url, data, method = 'GET', showToast = true, autoLogin = true } = options
  console.log(options, 'payload', data)
  const token = await getStorage('token')
  const header = token ? { Authorization: token } : {}
  if (method === 'POST') {
    header.Authorization = 'token'
    header['content-type'] = 'application/json'
  }
  console.log(header, 'header--')
  const requestUrl = domain + url
  console.log(requestUrl, 'requestUrl--')
  return Taro.request({
    url: requestUrl,
    method,
    data
    // header
  })
    .then(async (res) => {
      console.log(res, 'taro.request')
      const { code, data: dataList } = res.data
      console.log(dataList, '--dataList--')
      if (code !== CODE_SUCCESS) {
        if (code === CODE_AUTH_EXPIRED) {
          await updateStorage({})
        }
        return Promise.reject(res.data)
      }

      return data
    })
    .catch((err) => {
      console.log(err, 'request.err')
      const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
      if (showToast) {
        Taro.showToast({
          title: (err && err.errorMsg) || defaultMsg,
          icon: 'none'
        })
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message: defaultMsg, ...err })
    })
}
