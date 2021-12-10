import { getAccountInfoSync } from '@tarojs/taro'

const dictionary: { [key: string]: string } = {
  develop: 'https://dvs-dev.sunlight-tech.com', // 开发环境
  trial: 'https://dvs-sit1.sunlight-tech.com', // 体验环境
  release: 'https://dvs-yangling.sunlight-tech.com' // 正式环境
}

const env = getAccountInfoSync()
export default dictionary[env.miniProgram.envVersion]
