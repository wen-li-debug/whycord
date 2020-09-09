<template>
        <swiper>
            <swiper-item v-for="item in banner" :key="item.title" >
                <a :href="item.link">
                    <img :src="item.image" @load="imgLoad" />
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
    export default {
        name: 'HomeSwiper',
        data(){
            return {
                isImg: false
            }
        },
        props: {
            banner: {
                type: Array,
                default(){
                    return []
                }      
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods:{
            imgLoad(){
               if(!this.isImg){
                   this.$emit('swiperImgLoad')
                   this.isImg = true
               }
            }
        }
    }
</script>