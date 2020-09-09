<template>
  <home-tab>
    <item-tab path="/home" tabColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon_active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text" >首页</div>
    </item-tab>
    <item-tab path="/classify" tabColor="blue">
       <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
       <img slot="item-icon_active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text" >分类</div>
    </item-tab>
    <item-tab path="/shop" tabColor="blue">
       <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
       <img slot="item-icon_active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text" >购物车</div>
    </item-tab>
    <item-tab path="/user" tabColor="blue">
       <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
       <img slot="item-icon_active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text" >我的</div>
    </item-tab>
  </home-tab>
</template>

<script>
import HomeTab from "@/components/common/tabBal/HomeTab";
import ItemTab from "@/components/common/tabBal/ItemTab";

export default {
  name: "mainTab",
  components: {
    HomeTab,
    ItemTab,
  },
};
</script>

<style lang="scss" scoped>
</style>