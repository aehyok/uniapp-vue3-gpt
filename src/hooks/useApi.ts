// import { CleanType } from '@/types/api.d'
// import { CleanServices } from '@/services/clean'
// import { reactive } from 'vue'

// export function useApi() {
//   console.log('useApi', 'init')
//   let counter = reactive({
//     statisticItems: [] as any,
//     aTotal: 0,
//     bTotal: 0
//   })

//   const StatisticCleanerSignRecordApi = async () => {
//     console.log('useApi', 'api')
//     const result = await CleanServices(CleanType.StatisticCleanerSignRecord, {})
//     console.log(result, 'result--StatisticCleanerSignRecordApi')
//     counter.statisticItems = result.data.statisticItems
//     counter.statisticItems.forEach((item) => {
//       if (item.typeId === 7013115) {
//         counter.aTotal = item.total
//       }
//       if (item.typeId === 7013116) {
//         counter.bTotal = item.total
//       }
//     })
//   }
//   return {
//     StatisticCleanerSignRecordApi,
//     counter
//   }
// }
