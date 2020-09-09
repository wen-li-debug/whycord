<template>
    <div class="shopButtonBar">
        <div class="checkButton">
            <check-button :isActive="checkAll" @click.native="btnCheck"/>
            <span>全选</span>
        </div>
        <div class="price">
            <span>合计:</span>
            <span>￥{{totalPrice}}</span>
        </div>
        <div class="count">
            <span>去计算{{totalLength}}</span>
        </div>
    </div>
</template>

<script>
import checkButton from 'components/content/checkButton/CheckButton'
    export default {
        name: 'ShopButtonBar',
        components: {
            checkButton
        },
        computed: {
            totalPrice(){
                return this.$store.state.productList.filter(item => {
                    return item.checked
                }).reduce((prv,cur) =>{
                    return prv + parseFloat(cur.price) * parseFloat(cur.count)
                },0).toFixed(2)
            },
            totalLength(){
                return this.$store.state.productList.filter(item => item.checked).length
            },
            checkAll(){
                return this.$store.state.productList.length === 0 ? false : !this.$store.state.productList.find(item => !item.checked)
                // if(this.$store.state.productList.length === 0) return false;
                // return !this.$store.state.productList.find(item => !item.checked)
            }
        },
        methods: {
            btnCheck(){
                if(this.checkAll){
                    this.$store.state.productList.forEach(item => item.checked = false);
                }else {
                    this.$store.state.productList.forEach(item => item.checked = true);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.shopButtonBar{
    height: 40px;
    line-height: 40px;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    background-color: #eee;
    font-size: 18px;
    justify-content: space-between;
}
.checkButton{
    display: flex;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
}
.price{
    margin-left: -70px;
}
.count{
    width: 100px;
    text-align: center;
    background-color: red;
    color: #fff;
}
</style>