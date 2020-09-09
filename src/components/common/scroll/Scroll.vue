<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { finished } from 'stream'

    export default {
        name: 'Scroll',
        props: {
            backTop: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                scroll: null
            }
        },
        mounted(){
            //创建BScroll对象
            this.scroll = new BScroll(this.$refs.scroll,{
                probeType: this.backTop,
                pullUpLoad: this.pullUpLoad,
                click: true,
            })
            this.scroll.on('scroll',(position) =>{
                this.$emit('scroll',position.y)
            })
            this.scroll.on('pullingUp',()=>{
               this.$emit('pullingUp')
            })
        },
        methods: {
            scrollTo(x,y,time=500){
                this.scroll && this.scroll.scrollTo(x,y,time)
            },  
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp()
            },
            ImgLoad(){
                // console.log(11)
                this.scroll && this.scroll.refresh()
            },
            scrollY(){
                return this.scroll ? this.scroll.y : 0
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>