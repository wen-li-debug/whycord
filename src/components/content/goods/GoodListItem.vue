<template>
    <div class="goodList-item" @click="itemClick">
        <img v-lazy="showImg" alt="" @load="GoodListImgClick">
        <div class="goods-info">
            <p>{{goods.title}}</p>
            <span class="price">{{goods.price}}</span>
            <span class="collect">{{goods.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodListItem',
        props: {
            goods: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        computed: {
          showImg(){
              return this.goods.image || this.goods.show.img
          }
        },
        methods: {
          //监听图片事件
          GoodListImgClick(){
            this.$bus.$emit('itemImgLoad')
          },
          //监听item事件
          itemClick(){
            //跳转到详情页，并携带id过去
            this.$router.push('/detail/' + this.goods.iid)
          }
        }
    }
</script>

<style lang="scss" scoped>
    .goodList-item {
    padding-bottom: 45  px;
    position: relative;
    width: 48%;
  }
  .goodList-item img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>