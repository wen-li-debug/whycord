<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab></main-tab>
  </div>
</template>

<script>
import MainTab from 'components/content/mainTab/MainTab'
export default {
  name: 'app',
  components: {
    MainTab
  }
}
</script>

<style lang="scss">
@import 'assets/css/base.css'
</style>
