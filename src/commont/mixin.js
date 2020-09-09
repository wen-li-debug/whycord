import { debounce } from './until.js'
import BackTop from "components/content/backTop/BackTop";

//混入   实现vue多处使用代码
export const itemImgMixin = {
    data() {
        return {
            itemImgListent: null,
            refresh: null
        }
    },
    mounted() {
        //响应图片事件
        this.refresh = debounce(this.$refs.scrollRef.ImgLoad, 200);
        //解决scroll会卡的问题
        this.itemImgListent = () => { this.refresh() }
        this.$bus.$on("itemImgLoad", this.itemImgListent);
    }
}

//backTop返回顶部的图片
export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false
        }
    },
    components: {
        BackTop
    },
    methods: {
        backClick() {
            this.$refs.scrollRef.scrollTo(0, 0);
        },
        showBackTop(position) {
            this.isShowBackTop = -position > 1000;
        }
    }
}