export default {
  pages: [
    'pages/echarts/index',
    'pages/mine/index',
    'pages/cookies/index',
    'pages/home/index',
    'pages/test/index',
    'pages/loveVillage/index',
    'pages/loveFamily/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首1页'
        // 未点击时显示的图片
        // iconPath:"pages/images/btn_wawj.png",
        // 点击后显示的图片
        // selectedIconPath:"pages/images/btn_wawj.png"
      },
      {
        pagePath: 'pages/loveVillage/index',
        text: '我i村'
      },
      {
        pagePath: 'pages/loveFamily/index',
        text: '我i家'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
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
