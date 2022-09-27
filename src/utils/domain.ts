import Taro, { getAccountInfoSync } from '@tarojs/taro'

// xuanen、lingyuan、dev
const whichEnv = 'dev'
const dictionary: { [key: string]: string } = {
  develop: `https://dvs-${whichEnv}.sunlight-tech.com`, // 开发环境
  trial: `https://dvs-${whichEnv}.sunlight-tech.com`, // 体验环境
  release: `https://dvs-${whichEnv}.sunlight-tech.com` // 正式环境
}

console.log(Taro.getEnv(), '00000')

const domain = () => {
  if (Taro.getEnv() === 'WEB') {
    return dictionary.develop
  }
  const env = getAccountInfoSync()
  return dictionary[env.miniProgram.envVersion]
}

export default domain
