<template>
      <div class="item-tab" @click="itemClick">
         <div v-if="!isActive"><slot name="item-icon"></slot></div>
         <div v-else><slot name="item-icon_active"></slot></div>
          <div :style="tabStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
    export default {
        name: 'itemTab',
        props: {
            path: String,
            tabColor: {
                type: String,
                default: {
                    tabColor: 'red'
                }
            }
        },
        data(){
            return {
                // isActive: true
            }
        },
        computed: {
            isActive(){
                return this.path.indexOf(this.$route.path) != -1
            },
            tabStyle(){
                return this.isActive ? {color: this.tabColor} : {}
            }
        },
        methods: {
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style lang="scss" scoped>
 .item-tab {
    flex: 1;
    text-align: center;
    height: 49px;
    img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
        margin-top: 2px;
    }
  }
  
</style>