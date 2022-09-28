import { App } from 'vue'

export const autoComponentRegister = (app: App) => {
  const register = (componentsContext: any) => {
    componentsContext.keys().forEach((filePath: string) => {
      const fileName = filePath.split('/')[1].split('.')[0]

      const componentConfig = componentsContext(filePath)

      if (/.vue$/.test(filePath)) {
        app.component(fileName, componentConfig.default)
      } else {
        app.use(componentConfig)
      }
    })
  }

  const itemView = require.context('@/components/form/input/item-view', true, /.vue$/)
  console.log(itemView, 'itemView')
  const view = [itemView]
  view.forEach((item) => {
    register(item)
  })
}
