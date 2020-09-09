export default {
    //区别添加商品或者数量
    addProduct(content, payload) {
        return new Promise((reslove, reject) => {
            //查询payload是否重复
            let oldProduct = null;
            oldProduct = content.state.productList.find(item => item.id == payload.id)
            if (oldProduct) {
                //添加数量
                content.commit('addCount', oldProduct)
                reslove('商品数量 + 1')
            } else {
                payload.count = 1;
                //添加商品
                content.commit('addToCard', payload)
                reslove('添加商品成功')
            }
        })
    }
}