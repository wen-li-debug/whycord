<template>
     <swiper class="swiper_top">
            <swiper-item v-for="(item,index) in topImages" :key="index">
                 <img :src="item" alt="">
            </swiper-item>
        </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
    export default {
        name: 'DetailSwiper',
        props:{
            topImages:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style lang="scss" scoped>
.swiper_top{
    height: 300px;
    overflow: hidden;
}
</style>