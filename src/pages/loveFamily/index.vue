<template>
  <div class="index">
    <swiperComVue componentName="familyTopModule" :swiperImageList="state.swiperImageList" />
    <familyInfoModuleVue />
    <titleSlotVue title="发布的随手拍" to="/">
      <familyPostCasualPhotos :data="state.snapshotList" />
    </titleSlotVue>
    <titleSlotVue title="家庭成员" to="/">
      <familyMemberVue :data="state.familyMemberList" />
    </titleSlotVue>
    <titleSlotVue title="返乡信息" to="/">
      <famliyReturnInfoVue />
    </titleSlotVue>
    <titleSlotVue title="新冠疫苗接种登记情况" to="/">
      <familyInoculateInfoVue />
    </titleSlotVue>
    <titleSlotVue title="土地信息" to="/">
      <familyLandInfoVue />
    </titleSlotVue>
    <titleSlotVue title="家庭收入来源" to="/">
      <familyIncomeEchartVue />
    </titleSlotVue>
  </div>
</template>
<script setup>
  import { ref, reactive } from 'vue'
  import swiperComVue from '../../components/fourMainPage/swiperCom.vue'
  import familyInfoModuleVue from './familyInfoModule.vue'
  import titleSlotVue from '../../components/fourMainPage/titleSlot.vue'
  import familyPostCasualPhotos from '../../components/fourMainPage/familyPostCasualPhotos.vue'
  import familyMemberVue from '../../components/fourMainPage/familyMember.vue'
  import familyIncomeEchartVue from './familyIncomeEchart.vue'
  import famliyReturnInfoVue from './familyReturnInfo.vue'
  import familyInoculateInfoVue from './familyInoculateInfo.vue'
  import familyLandInfoVue from './familyLandInfo.vue'

  const list = ref([
    {
      name: '村庄数12',
      num: 3654120
    },
    {
      name: '村民数',
      num: 55
    },
    {
      name: '党员树',
      num: 651421
    }
  ])
  const state = reactive({
    snapshotList: [
      {
        realName: '阿明',
        avatarUrl:
          'http://dvs-dev.sunlight-tech.com/sundfs//8/3/839539bd0b6397e56f84cf3ecc660370.jpg',
        userAddress: null,
        mobile: '18816879028',
        isHouseholder: 0,
        isReply: 2,
        replyDesc: '111',
        replyImageIds: '',
        replyDateTime: '2021-11-11T09:50:56',
        replyer: 'aming',
        isDeleted: 0,
        createdAt: '2021-11-10T20:43:27',
        updatedAt: '2021-11-11T09:50:56',
        createdByName: '阿明',
        updatedByName: 'aming',
        imageFiles: [],
        replyImageFiles: [],
        relationship: '兄、弟、姐、妹',
        typeDto: {
          id: 25,
          code: 8010100,
          typeCode: 8010,
          name: '投诉建议',
          sequence: 10,
          fontColor: '#EF3B04',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        id: 235,
        userId: 321,
        type: '8010100',
        descript: 'ssss',
        imageIds: '',
        videoIds: '',
        createdByDeptId: 0,
        address: '田西村',
        createdBy: 321,
        updatedBy: 271,
        longitude: 0,
        latitude: 0,
        householdId: 6993,
        areaId: 23,
        areaName: '伏龙泉镇 田西村'
      },
      {
        realName: 'lqm-cw',
        avatarUrl: '',
        userAddress: null,
        mobile: '18620342685',
        isHouseholder: 0,
        isReply: 2,
        replyDesc: 'gggggg',
        replyImageIds: '11247',
        replyDateTime: '2021-11-17T14:38:31',
        replyer: '夏先生',
        isDeleted: 0,
        createdAt: '2021-09-26T15:49:15',
        updatedAt: '2021-11-17T14:38:31',
        createdByName: 'lqm-cw',
        updatedByName: '夏先生',
        imageFiles: [
          {
            id: 9879,
            originName: '微信截图_20210619150746 - 副本.jpg',
            byteSize: '5258',
            relativePath: '/e/2/e2f1cdd011e292b9f964220e2ec9fbb4.jpg',
            extensionName: '.jpg',
            fileType: 1,
            md5: 'b822782bf8603775c4a10768f739247b',
            thumbnailId: 0,
            thumbnailRelativePath: '/e/2/e2f1cdd011e292b9f964220e2ec9fbb4.jpg',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/e/2/e2f1cdd011e292b9f964220e2ec9fbb4.jpg',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/e/2/e2f1cdd011e292b9f964220e2ec9fbb4.jpg'
          },
          {
            id: 9881,
            originName: '微信截图_20210619150746.png',
            byteSize: '25618',
            relativePath: '/f/b/fbfd77e93e572c49a6b879341f905f5e.png',
            extensionName: '.png',
            fileType: 1,
            md5: 'a0d3663b2bdac2fef438580abf626066',
            thumbnailId: 0,
            thumbnailRelativePath: '/f/b/fbfd77e93e572c49a6b879341f905f5e.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/f/b/fbfd77e93e572c49a6b879341f905f5e.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/f/b/fbfd77e93e572c49a6b879341f905f5e.png'
          }
        ],
        replyImageFiles: [
          {
            id: 11247,
            originName: '田西村门牌确定版-01.jpg',
            byteSize: '663137',
            relativePath: '/2/7/27de943b929c0856ece9b1e68a373818.jpg',
            extensionName: '.jpg',
            fileType: 1,
            md5: '43a338cf77402e8c8669914cbe32fb88',
            thumbnailId: 0,
            thumbnailRelativePath: '/2/7/27de943b929c0856ece9b1e68a373818.jpg',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/2/7/27de943b929c0856ece9b1e68a373818.jpg',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/2/7/27de943b929c0856ece9b1e68a373818.jpg'
          }
        ],
        relationship: '',
        typeDto: {
          id: 25,
          code: 8010100,
          typeCode: 8010,
          name: '投诉建议',
          sequence: 10,
          fontColor: '#EF3B04',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        id: 201,
        userId: 230,
        type: '8010100',
        descript: '1111',
        imageIds: '9879,9881',
        videoIds: '',
        createdByDeptId: 0,
        address: '1111',
        createdBy: 230,
        updatedBy: 91,
        longitude: 0,
        latitude: 0,
        householdId: 0,
        areaId: 23,
        areaName: '伏龙泉镇 田西村'
      },
      {
        realName: '黄文华',
        avatarUrl:
          'http://dvs-dev.sunlight-tech.com/sundfs//1/3/13287a4e66ba1390d5b0332e00680b2b.jpg',
        userAddress: null,
        mobile: '13265613123',
        isHouseholder: 0,
        isReply: 2,
        replyDesc: '已经处理',
        replyImageIds: '1232,1233',
        replyDateTime: '2021-09-17T10:32:23',
        replyer: '夏先生',
        isDeleted: 0,
        createdAt: '2021-07-13T19:15:20',
        updatedAt: '2021-09-17T10:32:23',
        createdByName: '黄文华',
        updatedByName: '夏先生',
        imageFiles: [
          {
            id: 1018,
            originName: 'snow_4xodmd_2880x1800.png',
            byteSize: '3659559',
            relativePath: '/6/4/6420c5e649a1f55d0933efd968232532.png',
            extensionName: '.png',
            fileType: 1,
            md5: '834ef3b1098c191803665329773cf99c',
            thumbnailId: 0,
            thumbnailRelativePath: '/6/4/6420c5e649a1f55d0933efd968232532.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/6/4/6420c5e649a1f55d0933efd968232532.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/6/4/6420c5e649a1f55d0933efd968232532.png'
          }
        ],
        replyImageFiles: [
          {
            id: 1232,
            originName: 'QQ图片20201231114051.jpg',
            byteSize: '192049',
            relativePath: '/2/b/2bb39683b8f84c7af711a8fa93105948.jpg',
            extensionName: '.jpg',
            fileType: 1,
            md5: 'c4f9fd4ea2b95f314a6ad7d7fa841313',
            thumbnailId: 0,
            thumbnailRelativePath: '/2/b/2bb39683b8f84c7af711a8fa93105948.jpg',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/2/b/2bb39683b8f84c7af711a8fa93105948.jpg',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/2/b/2bb39683b8f84c7af711a8fa93105948.jpg'
          },
          {
            id: 1233,
            originName: 'QQ截图20200110182805.jpg',
            byteSize: '45887',
            relativePath: '/1/1/11e25fc13aeb4623a7fbba993e29dbf0.jpg',
            extensionName: '.jpg',
            fileType: 1,
            md5: 'f9220d773d968848c51402fe921d2d4f',
            thumbnailId: 0,
            thumbnailRelativePath: '/1/1/11e25fc13aeb4623a7fbba993e29dbf0.jpg',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/1/1/11e25fc13aeb4623a7fbba993e29dbf0.jpg',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/1/1/11e25fc13aeb4623a7fbba993e29dbf0.jpg'
          }
        ],
        relationship: '',
        typeDto: {
          id: 29,
          code: 8010104,
          typeCode: 8010,
          name: '社会安全',
          sequence: 50,
          fontColor: '#E3F427',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        id: 117,
        userId: 6,
        type: '8010104',
        descript: '文字描述',
        imageIds: '1018',
        videoIds: '',
        createdByDeptId: 0,
        address: '详细地址',
        createdBy: 6,
        updatedBy: 91,
        longitude: 113.96962935241572,
        latitude: 22.55091159598638,
        householdId: 24,
        areaId: 23,
        areaName: '伏龙泉镇 田西村'
      },
      {
        realName: '陈双伟',
        avatarUrl:
          'http://dvs-dev.sunlight-tech.com/sundfs/0/8/08b3838893337333dfacd92f2e18b693.jpeg',
        userAddress: null,
        mobile: '18573316573',
        isHouseholder: 0,
        isReply: 2,
        replyDesc: '123333333333333333333333333333333333333333333333333333333333',
        replyImageIds: '930,931,932,933,934,935,936,937,938,',
        replyDateTime: '2021-09-17T10:34:40',
        replyer: '陈双伟',
        isDeleted: 0,
        createdAt: '2021-07-05T18:18:07',
        updatedAt: '2021-09-17T10:34:40',
        createdByName: '陈双伟',
        updatedByName: '陈双伟',
        imageFiles: [
          {
            id: 915,
            originName: '下雪@2x.png',
            byteSize: '2616',
            relativePath: '/f/9/f93c963a8a0e4a13efd58a959e9e1b7f.png',
            extensionName: '.png',
            fileType: 1,
            md5: '7df938c1a2080995acb4d9e501e36421',
            thumbnailId: 0,
            thumbnailRelativePath: '/f/9/f93c963a8a0e4a13efd58a959e9e1b7f.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/f/9/f93c963a8a0e4a13efd58a959e9e1b7f.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/f/9/f93c963a8a0e4a13efd58a959e9e1b7f.png'
          },
          {
            id: 916,
            originName: '大棚坐标-选中.png',
            byteSize: '15302',
            relativePath: '/a/c/ac8abc19fb722185f92ff33f9b859d63.png',
            extensionName: '.png',
            fileType: 1,
            md5: '9af37d2a3a633031ce9a75f7390146b5',
            thumbnailId: 0,
            thumbnailRelativePath: '/a/c/ac8abc19fb722185f92ff33f9b859d63.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/a/c/ac8abc19fb722185f92ff33f9b859d63.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/a/c/ac8abc19fb722185f92ff33f9b859d63.png'
          },
          {
            id: 917,
            originName: '刮风@2x.png',
            byteSize: '2261',
            relativePath: '/4/1/4169d75c44cab62af8c1ed0d5af73a69.png',
            extensionName: '.png',
            fileType: 1,
            md5: '76260db47bfd297275d98e30a1134e94',
            thumbnailId: 0,
            thumbnailRelativePath: '/4/1/4169d75c44cab62af8c1ed0d5af73a69.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/4/1/4169d75c44cab62af8c1ed0d5af73a69.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/4/1/4169d75c44cab62af8c1ed0d5af73a69.png'
          },
          {
            id: 918,
            originName: '刮风@2x.png',
            byteSize: '2261',
            relativePath: '/2/e/2e3587c4f01fa53f5edf8e52484aa735.png',
            extensionName: '.png',
            fileType: 1,
            md5: '76260db47bfd297275d98e30a1134e94',
            thumbnailId: 0,
            thumbnailRelativePath: '/2/e/2e3587c4f01fa53f5edf8e52484aa735.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/2/e/2e3587c4f01fa53f5edf8e52484aa735.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/2/e/2e3587c4f01fa53f5edf8e52484aa735.png'
          },
          {
            id: 919,
            originName: '晴天@2x(1).png',
            byteSize: '1484',
            relativePath: '/5/a/5ae6d87c8a6f0a11bc2a544963b25b01.png',
            extensionName: '.png',
            fileType: 1,
            md5: 'aeb865eeddff2277b63cf1a6ef3d5d57',
            thumbnailId: 0,
            thumbnailRelativePath: '/5/a/5ae6d87c8a6f0a11bc2a544963b25b01.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/5/a/5ae6d87c8a6f0a11bc2a544963b25b01.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/5/a/5ae6d87c8a6f0a11bc2a544963b25b01.png'
          },
          {
            id: 920,
            originName: 'icon_bjs@2x.png',
            byteSize: '1579',
            relativePath: '/a/1/a12f37fd63a194c23d3f45e0bf147882.png',
            extensionName: '.png',
            fileType: 1,
            md5: '09de5af1fa4e1d25afab8e3d701024ee',
            thumbnailId: 0,
            thumbnailRelativePath: '/a/1/a12f37fd63a194c23d3f45e0bf147882.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/a/1/a12f37fd63a194c23d3f45e0bf147882.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/a/1/a12f37fd63a194c23d3f45e0bf147882.png'
          },
          {
            id: 921,
            originName: '传感器.png',
            byteSize: '5535',
            relativePath: '/7/c/7ca17ad19dff93b80e95e98779f95efd.png',
            extensionName: '.png',
            fileType: 1,
            md5: '0d14faa51d90c9ab17ddfd9f2c0d2cdb',
            thumbnailId: 0,
            thumbnailRelativePath: '/7/c/7ca17ad19dff93b80e95e98779f95efd.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/7/c/7ca17ad19dff93b80e95e98779f95efd.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/7/c/7ca17ad19dff93b80e95e98779f95efd.png'
          },
          {
            id: 922,
            originName: '传感器big.png',
            byteSize: '2108',
            relativePath: '/0/9/09a1cfb1390aaefe8f624387dc69f0a4.png',
            extensionName: '.png',
            fileType: 1,
            md5: 'd50f4a6cb9ea5bcdc798fba1e22a20d7',
            thumbnailId: 0,
            thumbnailRelativePath: '/0/9/09a1cfb1390aaefe8f624387dc69f0a4.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/0/9/09a1cfb1390aaefe8f624387dc69f0a4.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/0/9/09a1cfb1390aaefe8f624387dc69f0a4.png'
          },
          {
            id: 923,
            originName: '晴天@2x.png',
            byteSize: '2585',
            relativePath: '/d/a/dacdfa12088a2ff08cab8680c86708fd.png',
            extensionName: '.png',
            fileType: 1,
            md5: 'b4c55bbfb777e2f8bc81869fe10447ed',
            thumbnailId: 0,
            thumbnailRelativePath: '/d/a/dacdfa12088a2ff08cab8680c86708fd.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/d/a/dacdfa12088a2ff08cab8680c86708fd.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/d/a/dacdfa12088a2ff08cab8680c86708fd.png'
          }
        ],
        replyImageFiles: [
          {
            id: 930,
            originName: '传感器.png',
            byteSize: '5535',
            relativePath: '/6/2/62ed72e96522fdee6461f5202f0016c8.png',
            extensionName: '.png',
            fileType: 1,
            md5: '0d14faa51d90c9ab17ddfd9f2c0d2cdb',
            thumbnailId: 0,
            thumbnailRelativePath: '/6/2/62ed72e96522fdee6461f5202f0016c8.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/6/2/62ed72e96522fdee6461f5202f0016c8.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/6/2/62ed72e96522fdee6461f5202f0016c8.png'
          },
          {
            id: 931,
            originName: '传感器big.png',
            byteSize: '2108',
            relativePath: '/7/2/72bd41e03b02986f739197aebd776884.png',
            extensionName: '.png',
            fileType: 1,
            md5: 'd50f4a6cb9ea5bcdc798fba1e22a20d7',
            thumbnailId: 0,
            thumbnailRelativePath: '/7/2/72bd41e03b02986f739197aebd776884.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/7/2/72bd41e03b02986f739197aebd776884.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/7/2/72bd41e03b02986f739197aebd776884.png'
          },
          {
            id: 932,
            originName: '晴天@2x(1).png',
            byteSize: '1484',
            relativePath: '/7/5/755ebe5a383ebcc236d75a9e94171970.png',
            extensionName: '.png',
            fileType: 1,
            md5: 'aeb865eeddff2277b63cf1a6ef3d5d57',
            thumbnailId: 0,
            thumbnailRelativePath: '/7/5/755ebe5a383ebcc236d75a9e94171970.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/7/5/755ebe5a383ebcc236d75a9e94171970.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/7/5/755ebe5a383ebcc236d75a9e94171970.png'
          },
          {
            id: 933,
            originName: 'page_drone@2x.png',
            byteSize: '77146',
            relativePath: '/7/c/7c35392194c79b233ba851daf0ab82ec.png',
            extensionName: '.png',
            fileType: 1,
            md5: '3d7d904d55d8e48b9719f18d21313009',
            thumbnailId: 0,
            thumbnailRelativePath: '/7/c/7c35392194c79b233ba851daf0ab82ec.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/7/c/7c35392194c79b233ba851daf0ab82ec.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/7/c/7c35392194c79b233ba851daf0ab82ec.png'
          },
          {
            id: 934,
            originName: 'mask.png',
            byteSize: '509889',
            relativePath: '/a/3/a3c0f037094804286f2a7467e12589fa.png',
            extensionName: '.png',
            fileType: 1,
            md5: '9baad6f02eea2a00ed1239cafc1a4b73',
            thumbnailId: 0,
            thumbnailRelativePath: '/a/3/a3c0f037094804286f2a7467e12589fa.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/a/3/a3c0f037094804286f2a7467e12589fa.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/a/3/a3c0f037094804286f2a7467e12589fa.png'
          },
          {
            id: 935,
            originName: '公厕.png',
            byteSize: '180480',
            relativePath: '/6/6/66f61c1db220880326b8459a5b3b4fe1.png',
            extensionName: '.png',
            fileType: 1,
            md5: '718608678d14ac958cb06a0c2351513d',
            thumbnailId: 0,
            thumbnailRelativePath: '/6/6/66f61c1db220880326b8459a5b3b4fe1.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/6/6/66f61c1db220880326b8459a5b3b4fe1.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/6/6/66f61c1db220880326b8459a5b3b4fe1.png'
          },
          {
            id: 936,
            originName: '刮风@2x.png',
            byteSize: '2261',
            relativePath: '/1/a/1aca9f353fb65cc549c9699b8706330d.png',
            extensionName: '.png',
            fileType: 1,
            md5: '76260db47bfd297275d98e30a1134e94',
            thumbnailId: 0,
            thumbnailRelativePath: '/1/a/1aca9f353fb65cc549c9699b8706330d.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/1/a/1aca9f353fb65cc549c9699b8706330d.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/1/a/1aca9f353fb65cc549c9699b8706330d.png'
          },
          {
            id: 937,
            originName: '垃圾中转站.png',
            byteSize: '183754',
            relativePath: '/6/e/6ef04293ec648dc6fc4bfe6f8b19f8d8.png',
            extensionName: '.png',
            fileType: 1,
            md5: '28d7cfc900dcd350e9bebc4cc62e8fe9',
            thumbnailId: 0,
            thumbnailRelativePath: '/6/e/6ef04293ec648dc6fc4bfe6f8b19f8d8.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/6/e/6ef04293ec648dc6fc4bfe6f8b19f8d8.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/6/e/6ef04293ec648dc6fc4bfe6f8b19f8d8.png'
          },
          {
            id: 938,
            originName: '大棚坐标-选中.png',
            byteSize: '15302',
            relativePath: '/a/e/aea0d90a60aeb30f7dfa3dff0f26ccc8.png',
            extensionName: '.png',
            fileType: 1,
            md5: '9af37d2a3a633031ce9a75f7390146b5',
            thumbnailId: 0,
            thumbnailRelativePath: '/a/e/aea0d90a60aeb30f7dfa3dff0f26ccc8.png',
            used: false,
            isMaterial: false,
            url: 'http://dvs-dev.sunlight-tech.com/sundfs/a/e/aea0d90a60aeb30f7dfa3dff0f26ccc8.png',
            thumbnailUrl:
              'http://dvs-dev.sunlight-tech.com/sundfs/a/e/aea0d90a60aeb30f7dfa3dff0f26ccc8.png'
          }
        ],
        relationship: '',
        typeDto: {
          id: 27,
          code: 8010102,
          typeCode: 8010,
          name: '公共卫生',
          sequence: 30,
          fontColor: '#5030EE',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        id: 101,
        userId: 114,
        type: '8010102',
        descript: '好多垃圾级',
        imageIds: '915,916,917,918,919,920,921,922,923',
        videoIds: '',
        createdByDeptId: 0,
        address: '张三家附近',
        createdBy: 114,
        updatedBy: 114,
        longitude: 107.99596220254902,
        latitude: 7.99596220254902,
        householdId: 0,
        areaId: 23,
        areaName: '伏龙泉镇 田西村'
      }
    ],
    familyMemberList: [
      {
        id: 60,
        areaId: 23,
        isHouseholder: 1,
        realName: '王东镇',
        sex: 1,
        nation: '汉族',
        nationCode: '1013100',
        relationship: '本人',
        idCard: '210103195103222119',
        mobile: '17688537833',
        education: '小学',
        headImageUrl:
          'http://dvs-dev.sunlight-tech.com/sundfs//d/7/d7e6dc8322bda3a2d0b5ff6825c2eb91.jpg',
        registerAddress: '北京市 北京市 东城区 沈阳市东陵区文化东路24-8号1-3-6',
        liveAddress: '河北省 石家庄市 长安区 1111',
        tagNames: [
          {
            id: 1012100,
            name: '留守老人',
            pid: 60,
            iconFileUrl: '',
            fontColor: '#0059FF'
          }
        ],
        createdAt: '2021-06-11T19:50:50',
        nationDto: {
          id: 45,
          code: 1013100,
          typeCode: 1013,
          name: '汉族',
          sequence: 10,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        educationDto: {
          id: 51,
          code: 1016100,
          typeCode: 1016,
          name: '小学',
          sequence: 10,
          fontColor: '#A43E3E',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        relationshipDto: {
          id: 121,
          code: 1010100,
          typeCode: 1010,
          name: '本人',
          sequence: 10,
          fontColor: '#DE0ADB',
          description: '',
          remark: '',
          iconFileId: 9865,
          iconFileUrl:
            'https://dvs-dev.sunlight-tech.com/sundfs/f/2/f229bee1a509f170bace4c5b30b4fbdc.png'
        }
      },
      {
        id: 66,
        areaId: 23,
        isHouseholder: 0,
        realName: '1222',
        sex: 1,
        nation: '汉族',
        nationCode: '1013100',
        relationship: '配偶',
        idCard: '111111111118113',
        mobile: '17611111111',
        education: '初中',
        headImageUrl: '',
        registerAddress: '',
        liveAddress: '',
        tagNames: [
          {
            id: 1012101,
            name: '留守妇女',
            pid: 66,
            iconFileUrl: '',
            fontColor: ''
          }
        ],
        createdAt: '2021-06-15T14:59:57',
        nationDto: {
          id: 45,
          code: 1013100,
          typeCode: 1013,
          name: '汉族',
          sequence: 10,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        educationDto: {
          id: 52,
          code: 1016101,
          typeCode: 1016,
          name: '初中',
          sequence: 20,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        relationshipDto: {
          id: 37,
          code: 1010101,
          typeCode: 1010,
          name: '配偶',
          sequence: 20,
          fontColor: '#000DFF',
          description: '222',
          remark: '',
          iconFileId: 588,
          iconFileUrl:
            'http://dvs-dev.sunlight-tech.com/sundfs/b/8/b87b9681d87ce35f26a8f1885ef0d3d0.jpg'
        }
      },
      {
        id: 68,
        areaId: 23,
        isHouseholder: 0,
        realName: 'test',
        sex: 1,
        nation: '',
        nationCode: '',
        relationship: '父子',
        idCard: '371082197788558521',
        mobile: '18620397895',
        education: '本科',
        headImageUrl: '',
        registerAddress: '山东省 东营市 广饶县 户籍门(楼)详址:',
        liveAddress: '重庆市 重庆市 渝中区 现住门(楼)详址:',
        tagNames: [
          {
            id: 1012100,
            name: '留守老人',
            pid: 68,
            iconFileUrl: '',
            fontColor: '#0059FF'
          }
        ],
        createdAt: '2021-06-15T15:34:58',
        nationDto: null,
        educationDto: null,
        relationshipDto: null
      },
      {
        id: 75,
        areaId: 23,
        isHouseholder: 0,
        realName: '黄大仙',
        sex: 1,
        nation: '汉族',
        nationCode: '1013100',
        relationship: '孙子、孙女',
        idCard: '450881198804232618',
        mobile: '18682456790',
        education: '',
        headImageUrl: '',
        registerAddress: '   ',
        liveAddress: '   ',
        tagNames: [
          {
            id: 1012100,
            name: '留守老人',
            pid: 75,
            iconFileUrl: '',
            fontColor: '#0059FF'
          },
          {
            id: 1012101,
            name: '留守妇女',
            pid: 75,
            iconFileUrl: '',
            fontColor: ''
          }
        ],
        createdAt: '2021-06-16T16:00:05',
        nationDto: {
          id: 45,
          code: 1013100,
          typeCode: 1013,
          name: '汉族',
          sequence: 10,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        educationDto: null,
        relationshipDto: {
          id: 68,
          code: 1010104,
          typeCode: 1010,
          name: '孙子、孙女',
          sequence: 50,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        }
      },
      {
        id: 113,
        areaId: 23,
        isHouseholder: 0,
        realName: '车撒打算',
        sex: 2,
        nation: '汉族',
        nationCode: '1013100',
        relationship: '孙子、孙女',
        idCard: '440582198702021541',
        mobile: '13433304090',
        education: '高中',
        headImageUrl: '',
        registerAddress: '黑龙江省 哈尔滨市 道里区 897',
        liveAddress: '天津市 天津市 河东区 88',
        tagNames: [
          {
            id: 1012100,
            name: '留守老人',
            pid: 113,
            iconFileUrl: '',
            fontColor: '#0059FF'
          }
        ],
        createdAt: '2021-06-29T18:39:41',
        nationDto: {
          id: 45,
          code: 1013100,
          typeCode: 1013,
          name: '汉族',
          sequence: 10,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        educationDto: {
          id: 80,
          code: 1016102,
          typeCode: 1016,
          name: '高中',
          sequence: 30,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        },
        relationshipDto: {
          id: 68,
          code: 1010104,
          typeCode: 1010,
          name: '孙子、孙女',
          sequence: 50,
          fontColor: '',
          description: '',
          remark: '',
          iconFileId: 0,
          iconFileUrl: ''
        }
      }
    ],
    swiperImageList: [
      'https://dvs-dev.sunlight-tech.com/wechat/images/family/loveHomeBanner.png',
      'https://dvs-dev.sunlight-tech.com/wechat/images/family/loveHomeBanner.png',
      'https://dvs-dev.sunlight-tech.com/wechat/images/family/loveHomeBanner.png'
    ]
  })
</script>
<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #f3f3f3;
    box-sizing: border-box;
  }
  .villageMoodProfile {
    background-color: #fff;
    padding: 0 20rpx;
    height: 300px;
    .forVillageMoodProfile {
      display: flex;
      align-items: center;
      height: 180rpx;
      .villageMoodProfileImg {
        width: 25%;
      }
      .villageMoodProfileInfo {
        width: 75%;
      }
    }
  }
</style>
