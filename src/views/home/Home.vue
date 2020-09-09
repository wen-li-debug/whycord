<template>
  <div id="home">
    <nav-tab class="home-nav">
      <div slot="center">首页</div>
    </nav-tab>
    <tab-control
      class="home-tab tab_control"
      :titles="titles"
      @goodClick="goodClick"
      ref="tabControl1"
      v-show="isShowTab"
    />
    <scroll
      class="content"
      ref="scrollRef"
      :backTop="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="pullingUpClick"
    >
      <home-swiper :banner="banner" @swiperImgLoad="swiperImg"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature />
      <tab-control class="home-tab" :titles="titles" @goodClick="goodClick" ref="tabControl2" />
      <goods-list :goodsList="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavTab from "components/common/navTab/NavTab";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./childcomps/HomeSwiper";
import HomeRecommend from "./childcomps/HomeRecommend";
import Feature from "./childcomps/Feature";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { debounce } from '@/commont/until.js'
import { itemImgMixin, backTopMixin } from '@/commont/mixin'
export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabControlTop: 0,
      isShowTab: false,
      scrollY: 0,
      itemImgListent: null
    };
  },
  components: {
    NavTab,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    Feature,
  },
  mixins: [itemImgMixin, backTopMixin],
  created() {
    //请求多条数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    //根据点击显示不同的数据
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 业务数据处理
     */
    //根据点击获取type
    goodClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currenIndex = index
      this.$refs.tabControl2.currenIndex = index
    },
    //根据scroll的滑动显示
    contentScroll(position) {
      //y 大于1000时候，显示 返回顶部图片
      this.showBackTop(position)
      //y 大于 tabControlTop 高度时候显示
      this.isShowTab = -position > this.tabControlTop;
    },
    //上拉加载
    pullingUpClick() {
      this.getHomeGoods(this.currentType);
    },
  
    //根据监听轮播图计算出tab-control到顶部的top
    swiperImg() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求数据
     */
    //请求多条数据
    async getHomeMultidata() {
      const res = await getHomeMultidata();
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      // console.log(this.recommend)
    },
    //请求商品数据
    async getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      const res = await getHomeGoods(type, page);
      // console.log(res)
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;
      this.$refs.scrollRef.finishPullUp();
    },
  },
  //活跃状态调用
  activated(){
    //跳转到记录的y
    // console.log(this.scrollY)
    this.$refs.scrollRef.scrollTo(0,this.scrollY)
    this.$refs.scrollRef.ImgLoad()
  },
  //静止时候调用
  deactivated(){
    //记录现在的y
    this.scrollY = this.$refs.scrollRef.scroll.y
    // console.log(this.scrollY)
    //取消监听图片的事件
    this.$bus.$off("itemImgLoad",this.itemImgListent)
  }
};
</script>

<style lang="scss" scoped>
// #home {
//   padding-top: 44px;
// }
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
}
.home-tab {
  background-color: #fff;
}
.tab_control {
  position: relative;
  top: 44px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>