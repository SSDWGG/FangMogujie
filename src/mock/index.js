import Mock from "mockjs"
//数据需要按照类型分类
const  {list} = Mock.mock({             //解构写法，直接拿到内部的变量
  "list|4":[{
    "img_url1":"@image('320x200', '#50B347', '#FFF', 'lunbo')",
    "img_url2":"@image('100x100', '#50B347', '#FFF', 'zs')",
    "img_url3":"@image('200x100', '#50B347', '#FFF', 'fea')",

    "link1":"@image('320x200', '#50B347', '#FFF', 'lunbo')",
    "link2":"@image('100x100', '#50B347', '#FFF', 'zs')",
    "link3":"@image('100x100', '#50B347', '#FFF', 'fea')",

    "title1":"title1",
    "title2":"title2",
    "title3":"title3",

    "tabcontrol1":'TC1',
    "tabcontrol2":'TC2',
    "tabcontrol3":'TC3',




  }]
})

const {imgpop,imgpop2,imgpop3} = Mock.mock({
  'imgpop|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'pop1')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop1')",
    "iid":"testiidpop1",
  }],
  'imgpop2|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'pop2')",
    "title":'tetle2',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop2')",
    "iid":"testiidpop2",
  }],
  'imgpop3|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'pop3')",
    "title":'tetle3',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop3')",
    "iid":"testiidpop3",
  }]
})
const {imgnew,imgnew2,imgnew3} = Mock.mock({
  'imgnew|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'new1')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop')",
    "iid":"testiidnew1",
  }],
  'imgnew2|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'new2')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop')",
    "iid":"testiidnew2",
  }],
  'imgnew3|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'new3')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop')",
    "iid":"testiidnew3",
  }]

})
const {imgsell,imgsell2,imgsell3} = Mock.mock({
  'imgsell|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'sell')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop')",
    "iid":"testiidsell1",
  }],
  'imgsell2|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'sell2')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop')",
    "iid":"testiidsell2",
  }],
  'imgsell3|10':[{
    "img_home_pop":"@image('320x200', '#50B347', '#FFF', 'sell3')",
    "title":'title',
    "price|1-999":1,
    "link":"@image('320x200', '#50B347', '#FFF', 'pop')",
    "iid":"testiidsell3",
  }]
})

Mock.mock("testurl","get",function (){
    return {

      list:list,
    }
})

// console.log(data);      //log没有携带return的返回的数据，这是为什么？？？
                          //为什么log里面的内容加上一个字符串拼接之后就只能显示{object} ???


Mock.mock("home/data?type=pop&page=1","get",function (){
  return {

    list: imgpop
  }
})
Mock.mock("home/data?type=pop&page=2","get",function (){
  return {

    list:imgpop2
  }
})
Mock.mock("home/data?type=pop&page=3","get",function (){
  return {

    list:imgpop3
  }
})




Mock.mock("home/data?type=new&page=1","get",function (){
  return {

    list: imgnew
  }
})


Mock.mock("home/data?type=new&page=2","get",function (){
  return {

    list:imgnew2
  }
})
Mock.mock("home/data?type=new&page=3","get",function (){
  return {

    list:imgnew3
  }
})


Mock.mock("home/data?type=sell&page=1","get",function (){
  return {

    list: imgsell
  }
})


Mock.mock("home/data?type=sell&page=2","get",function (){
  return {

    list:imgsell2
  }
})
Mock.mock("home/data?type=sell&page=3","get",function (){
  return {

    list:imgsell3
  }
})



  //后端拿到的接口要把参数什么的都接上
Mock.mock("/detail?iid=testiidpop1","get",function (){
  return {

    list:list,
  }
})




//pop new sell下拉加载写到3
//详情页加载写  pop1
