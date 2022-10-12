export default defineAppConfig({
  pages: [
    'pages/scan/index',
    'pages/list/index',
    'pages/form/index',
    'pages/index/index',
    'pages/upload/index',
    'pages/echarts/index',
    'pages/webview/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: 'requiredComponents'
})
