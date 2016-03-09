/**
 * Created by wangrenyin on 16/3/4.
 */
console.log('login.js加载成功111');

function login(){
    var username = $('#username').val();
    var password = $('#password').val();
    var data ={"username":username,"password":password};
    $.ajax({
        url:'/login',
        type:'POST',
        data:data,
        success:function (data,status){
            if(status == 'success'){
                location.href='home';
            }
        },
        error:function(data,status,e){
            if(status == "error"){
                console.log('404');
                location.herf='login';
            }
        }
    });
    console.log(data);
}