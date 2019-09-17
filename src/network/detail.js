import {request} from "./request"
export function getdetaildata(iid) {
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function get_detail_recommend() {
    return request({
        url:'/recommend'
    })

}
//因为在真实返回的数据当中，数据的位置很论所以将这些位置的数据添加到一个对象的属性，
// 这样的话，直接面向这个对象就可以了，传值的时候就不会那个麻烦
export class goodsinfo{
    constructor(iteminfo,columns,services){
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.newprice=iteminfo.price
        this.oldprice=iteminfo.oldPrice
        this.discount=iteminfo.discountDesc
        this.columns=columns
        this.services=services
        this.realprice=iteminfo.lowNowPrice
    }
}

export class Shop{
    constructor(shopinfo){
        this.logo=shopinfo.shopLogo
        this.name=shopinfo.name
        this.fans=shopinfo.cFans
        this.sells=shopinfo.cSells
        this.score=shopinfo.score
        this.goodsCount=shopinfo.cGoods
    }
}