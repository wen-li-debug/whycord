<template>
    <div class="toast" v-show="isShow">
        <span>{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
       data(){
           return {
               message: '',
               isShow: false
           }
       },
        methods: {
            show(message,day=1200){
                this.isShow = true;
                this.message = message;
                setTimeout(() => {
                    this.isShow = false;
                    this.message = ''
                }, day);
            }
        }
    }
</script>

<style lang="scss" scoped>
.toast{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 6px 6px;
    border-radius: 5px;
    color: #fff;
    background: rgba(0,0,0,.75);
    z-index: 999;
}
</style>