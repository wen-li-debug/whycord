<template>
    <div class="recommend">
        <div v-for="item in recommend" :key="item.title" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props: {
            recommend: {
                type: Array,
                default(){
                    return []
                }
            }
        },

    }
</script>

<style lang="scss" scoped>
.recommend{
    display: flex;
    text-align: center;
    padding: 13px 0 25px;
    border-bottom: 8px solid #eee;
    font-size: 12px;
}
.recommend-item{
    flex: 1;
    img{
        width: 70px;
        margin-bottom: 6px;
    }
}
</style>