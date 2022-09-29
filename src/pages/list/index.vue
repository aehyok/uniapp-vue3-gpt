<template>
    <div class="demo">
        <vitrual-list>
            <div @click="aaaa">
                华盛顿还是盗版
            </div>
        </vitrual-list>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs } from 'vue';
import { usePullDownRefresh } from '@tarojs/taro';
import vitrualList from '@/components/virtual-list.vue';
import { getVillageCount, getAreaList } from "@/services/api"
const state = reactive({
    count: new Array(100).fill(0)
});

const handleScroll = () => {
    let arr = new Array(100).fill(0);
    const len = state.count.length;
    state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
};
const aaaa = () => {
    // getVillageCount();
    getAreaList({
        page: 1,
        limit: 10,
        level: 5,
    })
}
usePullDownRefresh(() => {
    console.log('onPullDownRefresh')

});
onMounted(() => {
    state.count = state.count.map((item: number, index: number) => index + 1);
})


</script>
<style lang="scss">
body {
    width: 100%;
    height: 100vh;
}

#app {
    width: 100%;
    height: 100%;
}

.demo {
    height: 100%;

    .nut-cell {
        height: 100%;
    }

    .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        background-color: #f4a8b6;
        border-radius: 10px;
    }
}
</style>
  