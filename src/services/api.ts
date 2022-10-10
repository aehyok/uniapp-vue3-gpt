import request from '@/utils/request'

// const testUrl = 'https://dvs-dev.sunlight-tech.com/api/sso/auth/applet/login'
// export const getProvince = (code) => {
//   return request({
//     url: `${testUrl}`,
//     method: 'GET',
//     data: {
//       code
//     }
//   })
// }

// //  首页查询村/人口/党员合计
export const getVillageCount = () => {
  return request({
    url: `/api/basic/wechat/area/getVillageCount`,
    method: 'GET'
  })
}

// //  首页查询村/人口/党员合计
export const getAreaLists = (data: any) => {
  return request({
    url: `https://dvs-dev.sunlight-tech.com/api/basic/wechat/area/getAreaList`,
    method: 'post',
    data
  })
}

export const getAreaLisst = (data: any) => {
  return request({
    url: `https://dvs-dev.sunlight-tech.com/api/cons/app/infopublic/list`,
    method: 'post',
    data
  })
}
export const getAreaList = (data: any) => {
  return request({
    url: `https://dvs-dev.sunlight-tech.com/api/ffp/app/matrix/EliminateNameAppList`,
    method: 'post',
    data
  })
}
