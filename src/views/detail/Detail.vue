<template>
  <div id="detail">
    <detail-item class="detail-tab" @itemTab="itemTab" ref="nav"></detail-item>
    <scroll class="centent" ref="scrollRef" :backTop="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shops" />
      <detail-goods-info :detailGoods="detailGoods" @imgLoad="imgLoad" />
      <detail-param-info ref="paramRef" :paramInfo="detailParams" />
      <detail-rate-info ref="rateRef" :detailRate="detailRate" />
      <goods-list ref="goodListRef" :goodsList="detailRecommends" />
    </scroll>
    <detail-bottom-info @addToCart="addCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailItem from "./childcomps/DetailItem";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
import DetailParamInfo from "./childcomps/DetailParamInfo";
import DetailRateInfo from "./childcomps/DetailRateInfo";
import DetailBottomInfo from "./childcomps/DetailBottomInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import { itemImgMixin, backTopMixin } from "@/commont/mixin";
import { debounce } from "@/commont/until.js";



//mapActives  映射
import { mapActions } from 'vuex'

import {
  getDetailData,
  getRecommends,
  Goods,
  Shops,
  Params,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailRateInfo,
    DetailBottomInfo,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shops: {},
      detailGoods: {},
      detailParams: {},
      detailRate: {},
      detailRecommends: [],
      itemTopYs: [],
      getItemTopY: null,
      currtenIndex: 0,
    };
  },
  //混入
  mixins: [itemImgMixin, backTopMixin],
  async created() {
    //给itemTopYs 获取y
    this.getItemTopY = debounce(() => {
      // console.log(3344);
      this.itemTopYs = [];
      this.itemTopYs.push(0);
      this.itemTopYs.push(this.$refs.paramRef.$el.offsetTop);
      this.itemTopYs.push(this.$refs.rateRef.$el.offsetTop);
      this.itemTopYs.push(this.$refs.goodListRef.$el.offsetTop);
      this.itemTopYs.push(Number.MAX_VALUE); // js中最大的一个值
      // console.log(this.itemTopYs);
    }, 200);

    //根据id请求详情页数据
    this.id = this.$route.params.id;
    const res = await getDetailData(this.id);
    const data = res.result;
    // console.log(data)
    //轮播图数据
    this.topImages = data.itemInfo.topImages;
    //标题价格数据
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
    //销售评价数据
    this.shops = new Shops(data.shopInfo);
    //商品图片数据
    this.detailGoods = data.detailInfo;
    //参数数据
    this.detailParams = new Params(data.itemParams.info, data.itemParams.rule);
    //评论的数据
    if (data.rate.length !== 0) {
      this.detailRate = data.rate.list ? data.rate.list[0] : {};
    }

    //获取推荐数据
    const RecommendsRes = await getRecommends();
    this.detailRecommends = RecommendsRes.data.list;
    // console.log(this.detailRecommends)
    // this.$nextTick(()=>{
    //   //从这个获取可以数据已经赋值，但是图片还没加载处理，所以获取的高度不准
    //    this.itemTopYs = [];
    //   this.itemTopYs.push(0);
    //   this.itemTopYs.push(this.$refs.paramRef.$el.offsetTop);
    //   this.itemTopYs.push(this.$refs.rateRef.$el.offsetTop);
    //   this.itemTopYs.push(this.$refs.goodListRef.$el.offsetTop);
    //   console.log(this.itemTopYs);
    // })
  },
  mounted() {},

  methods: {
    //vuex映射
    ...mapActions(['addProduct']),
    //goods图片的加载
    imgLoad() {
      //调用防抖
      this.refresh();
      this.getItemTopY();
    },
    //tab点击触发
    itemTab(index) {
      //根据点击跳转到y
      this.$refs.scrollRef.scrollTo(0, -this.itemTopYs[index]);
    },
    //滑动定位
    contentScroll(position) {
      //y 大于1000时候，显示 返回顶部图片
      this.showBackTop(position)

      let len = this.itemTopYs.length;
      for (let i = 0; i < len - 1; i++) {
        if (
          this.currtenIndex !== i &&
          -position >= this.itemTopYs[i] &&
          -position < this.itemTopYs[i + 1]
        ) {
          this.$refs.nav.currentIndex = i;
        }
      }
    },
    //加入购物车
    addCart(){
      let product = {}
      product.img = this.topImages[0]; //图片
      product.title = this.goods.title;  //标题
      product.desc = this.goods.desc;   //描述
      product.price = this.goods.lowNowPrice;  //价格
      product.id = this.id;  //id
        this.addProduct(product).then(res => {
        // this.isShow = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message= ''
        // }, 1500);
        // console.log(this.$toast)
        this.$toast.show(res)
      })
      //在vuex中使用promise 返回确认值
      // this.$store.dispatch('addProduct',product).then(res => {
      //   console.log(res)
      // })
    }
  },
  activated() {
    this.$bus.off("itemImgLoad", this.itemImgListent);
  },
};
</script>

<style lang="scss" scoped>
.detail-tab {
  z-index: 9;
  position: relative;
  background-color: #fff;
}
#detail {
  position: relative;
  background-color: #fff;
  z-index: 9;
  height: 100vh;
}
.centent {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 58px;
  overflow: hidden;
}
</style>