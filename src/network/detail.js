import { request } from './request'

//请求详情数据
export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid,
        }
    })
}

//请求推荐商品数据
export function getRecommends() {
    return request({
        url: 'recommend'
    })
}


export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.lowNowPrice = itemInfo.lowNowPrice;
    }
}

export class Shops {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}

export class Params {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}