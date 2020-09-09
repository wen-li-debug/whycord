import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//图片懒加载
import VueLazyload from 'vue-lazyload'
//解决移动端300m延迟
import FastClick from 'fastclick'

//自定义弹框插件
import toast from 'components/common/toast/index.js'

Vue.config.productionTip = false

//使用bus
Vue.prototype.$bus = new Vue()

//挂载到vue
Vue.use(toast)

//实现图片懒加载
Vue.use(VueLazyload, {
    //当图片没有加载出来显示的图片
    loading: require('./assets/img/common/placeholder.png')
})

//解决移动端300m延迟
FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


// axios({
//     url: 'http://152.136.185.210:8000/api/z8/home/data',
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(data => {
//     console.log(data)
// })