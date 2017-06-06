let express = require('express');
let app = express();
app.listen(3000);
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
let ad = require('./home/ad');
//广告的接口
app.get('/api/ad',function (req,res) {
   res.send(ad);
});
let list = require('./home/list');
app.get('/api/list/:city/:page',function (req,res) {
    res.send(list);
});
let info = require('./detail/info');
//通过id来获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
});
//评价列表 id,page
let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{

    res.send(comment);
});

//订单列表
let orderList = require('./orderlist/orderList');
app.get('/api/orderList/:username',(req,res)=>{
    res.send(orderList);
});

//提交评论 body-parser 会讲数据放在req.body.
app.post('/api/comment',(req,res)=>{
    res.send({msg:'ok'})
});
//fetch(url,{Accept:"类型"}).then((res)=>res.json()).then((data)=>{})