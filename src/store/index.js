import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
    //保存购物车商品
    productList: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {}
})