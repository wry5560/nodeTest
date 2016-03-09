/**
 * Created by wangrenyin on 16/3/1.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


app.get('/',function(req,res){
    res.render('index');
    console.log('1');
    //res.redirect("http://www.baidu.com")
});

app.get('/home',function(req,res){
    res.render('home');
});

app.get('/login',function(req,res){
    res.render('login');
});
app.post('/login',function(req,res){
    var user={
        username:'admin',
        password:'admin'
    }
    if(req.body.username == user.username&&req.body.password == user.password)
    {   console.log('登陆成功');
        res.sendStatus(200)
    }
    else
    {
        console.log('登陆失败');
        res.sendStatus(404);
    };

   console.log(req.body.username);
   console.log(req.body.password);
});

app.get('*',function(req,res){
    res.send("404 error!");
});
//app.use(function (req,res,next) {
//    console.log("method"+req.method+"===="+"url:"+req.url);
//    next();
//})
//
//app.use(function(req,res){
//    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
//    res.end("end");
//})

//app.get("*",function(req,res){
//    console.log(req.path);
//    console.log(req.hostname);
//    res.end("haole");
//})

app.listen(3000);
