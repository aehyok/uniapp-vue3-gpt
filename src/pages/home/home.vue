<template>
    <view class="index">
        <swiper
            class='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            current="current"
            :duration="state.duration"
            :interval="state.interval"
            :circular="state.isCircular"
            :autoplay="state.isAutoplay"
            :indicatorDots="state.hasIndicatorDots">
            <swiper-item v-for="(item, idx) in state.imgUrls" :key="idx">
                <image :src="item" class="slide-image" />
            </swiper-item>
        </swiper>
        <AtGrid :columnNum="4" :data="
            [
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '我爱我家'
                },
                {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '随手拍'
                },
                {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '便民服务'
                },
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '信息公开'
                },
                {
                    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                    value: '农产品'
                },
                {
                    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                    value: '防疫须知'
                },
                {
                    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                    value: '农产品'
                },
                {
                    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                    value: '防疫须知'
                }
            ]"
        />
        <div style="width:100%;height:100px;"></div>
        <AtGrid :columnNum="2" style="margin-top:40px;margin-bottom: 100px;"  mode='rect' :data="
            [
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '发布农产品'
                },
                {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '待处理随手拍'
                },
                {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '我发布农产品数量'
                },
                {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '已处理随手拍'
                }
            ]"
            />
    </view>
</template>
<script setup>
    import { reactive } from "vue";
    import appbanner from '../../assets/images/banner/appbanner.png';

    const state = reactive({
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      isAutoplay: false,
      hasIndicatorDots: false,
      imgUrls: [
        appbanner
      ],
    })
</script>
<style lang="scss" scoped>
.index{
    width: 100%;
    margin: 20px;
}
.test-h {
    margin: 20px;
    padding: 10px;
    height: 300px;
    width: 100%;
}
// .slide-image {
//     display: block;
//     width: 100vw;
//     height: 280px;
// }
image {
    width: 100vw;
    height: 280px;
}
</style>