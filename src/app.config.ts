export default defineAppConfig({
  pages: ['pages/index/index', 'pages/upload/index', 'pages/echarts/index', 'pages/webview/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: 'requiredComponents'
})
