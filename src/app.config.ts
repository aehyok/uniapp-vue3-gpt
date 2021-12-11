export default {
  pages: [
    'pages/home/index',
    'pages/phone-number/index',
    'pages/webview/index',
    'pages/main/index',
    'pages/navbar-customer/index',
    'pages/echarts/index',
    'pages/mine/index',
    'pages/cookies/index',
    'pages/test/index',
    'pages/loveVillage/index',
    'pages/loveFamily/index'
  ],
  subpackages: [
    {
      root: 'echarts',
      pages: ['pages/bar-charts/index', 'pages/pie-charts/index']
    }
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'assets/image/home.png',
        selectedIconPath: 'assets/image/chooseHome.png'
      },
      {
        pagePath: 'pages/loveVillage/index',
        text: '我i村',
        iconPath: 'assets/image/village.png',
        selectedIconPath: 'assets/image/chooseVillage.png'
      },
      {
        pagePath: 'pages/loveFamily/index',
        text: '我i家',
        iconPath: 'assets/image/family.png',
        selectedIconPath: 'assets/image/chooseFamily.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/image/mine.png',
        selectedIconPath: 'assets/image/chooseMine.png'
      }
    ]
  },
  window: {
    // navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
