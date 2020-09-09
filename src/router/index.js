import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
    import ('@/views/home/Home')
const Classify = () =>
    import ('@/views/classify/Classify')
const Shop = () =>
    import ('@/views/shop/Shop')
const User = () =>
    import ('@/views/user/User')
const Detail = () =>
    import ('@/views/detail/Detail')

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: 'home',
    component: Home
}, {
    path: '/classify',
    name: 'classify',
    component: Classify
}, {
    path: '/user',
    name: 'user',
    component: User
}, {
    path: '/shop',
    name: 'shop',
    component: Shop
}, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router