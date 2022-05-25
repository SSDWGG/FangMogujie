// 详情页不需要做分页显示，就直接一个借口获取详情页的全部数据
import {request} from "./request";

export  function getdetailifo (iid) {
  return request({
    url:'/detail',
    params:{
      iid:iid

    }
  })

}

//把detail请求中需要拿出来的属性都拿过来封装一下

export class getdetailgoods{
  constructor (iteminfo,columns,services){              //使用这个构造函数进行封装
    this.desc = iteminfo.desc
    this.price = iteminfo.price
    this.oldPrice = iteminfo.oldPrice
    this.discount = iteminfo.discountDesc
    this.columns = columns
    this.services = services
    this.discountBgColor = iteminfo.discountBgColor
    this.title = iteminfo.title
    this.pricetest = iteminfo.highNowPrice
  }

}


// 尺寸数据
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

