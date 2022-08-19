import { getAccountInfoSync } from '@tarojs/taro'

// xuanen、lingyuan、dev
const whichEnv = 'dev'
const dictionary: { [key: string]: string } = {
  develop: `https://dvs-${whichEnv}.sunlight-tech.com`, // 开发环境
  trial: `https://dvs-${whichEnv}.sunlight-tech.com`, // 体验环境
  release: `https://dvs-${whichEnv}.sunlight-tech.com` // 正式环境
}

const env = getAccountInfoSync()
export default dictionary[env.miniProgram.envVersion]
