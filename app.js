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

app.get('/',function(req,res){
    res.render('index',{
        title:'index'
    });
    console.log('1');
    //res.redirect("http://www.baidu.com")
});
app.get('/login',function(req,res){
    res.render('login',{
        title:'login'
    });
});
app.get('/list',function(req,res){
    res.render('list',{
        title:'list'
    });
});
app.get('/detail',function(req,res){
    res.render('detail',{
        title:'detail'
    });
});
app.get('/admin',function(req,res){
    res.render('admin',{
        title:'admin'
    });
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


app.listen(3000);
