<template>
  <div id="shop">
    <nav-tab class="shop-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-tab>
   <shop-list/>
   <shop-button-bar />
  </div>
</template>

<script>
import NavTab from "components/common/navTab/NavTab";
import ShopList from './childcomps/ShopList'
import ShopButtonBar from './childcomps/ShopButtonBar'

import { mapGetters } from "vuex";

export default {
  name: "Shop",
  components: {
    NavTab,
    ShopList,
    ShopButtonBar
  },
 computed: {
    ...mapGetters({
        length: "cardProductLength"
    }),
  },
};
</script>

<style lang="scss" scoped>

.shop-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
}

</style>