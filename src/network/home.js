import { request } from 'network/request'

//获取banner和remmond的数据
export function getHomeMultidata() {
    return request('/home/multidata')
}

//获取商品数据
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}