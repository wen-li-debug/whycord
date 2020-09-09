<template>
  <nav-tab>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item,index) in titles"
        :key="index"
        class="titles_item"
        @click="titleClick(index)"
        :class=" { active: currentIndex === index }"
      >{{item}}</div>
    </div>
  </nav-tab>
</template>

<script>
import NavTab from "components/common/navTab/NavTab";

export default {
  name: "DetailItem",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavTab,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('itemTab',this.currentIndex)
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  margin-top: 4px;
}
.titles {
  display: flex;
  font-size: 14px;
  .titles_item {
    flex: 1;
  }
}
.active {
  color: red;
}
</style>