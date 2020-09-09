<template>
  <div class="shopList">
    <scroll class="content" ref="scrollRef">
      <shop-list-item v-for="(item,index) in cardProductList" :key="index" :itemInfo="item"/>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";

import ShopListItem from './ShopListItem'

export default {
  name: "ShopList",
  components: {
    Scroll,
    ShopListItem,
  },
  computed: {
    ...mapGetters(["cardProductList"]),
  },
  activated(){
      this.$refs.scrollRef.ImgLoad()
      // console.log(22)
  }
};
</script>

<style lang="scss" scoped>

.content {
    //  height: calc(100% - 44px - 49px);
    //  overflow: hidden;
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 89px;
    overflow: hidden;
  }
</style>