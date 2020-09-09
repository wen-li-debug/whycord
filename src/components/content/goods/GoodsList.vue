<template>
    <div class="goodsList">
        <good-list-item v-for="(item , index) in goodsList" :key="index" :goods="item"/>
    </div>
</template>

<script>
import GoodListItem from './GoodListItem'
    export default {
        name: 'GoodList',
        props: {
            goodsList: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        components: {
            GoodListItem
        }
    }
</script>

<style lang="scss" scoped>
.goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

}

</style>