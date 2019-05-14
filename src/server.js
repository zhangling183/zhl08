var http =require('http');
var url=require('url');
var USERS=[{
    username:'wl1702',
    password:'123456',
}]

http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;

    console.log("请求消息"+ pathname +"收到。");
    console.log("消息类型：" + request.method.toUpperCase());
    if(pathname =='/login'){
        if(request.method.toUpperCase() !='GET'){
          var postdata='';
            request.addListener('data',function(data){
              postdata += data;
            })

            request.addListener('end',function(){
                console.log(postdata);
                var user = JSON.parse(postdata);
                response.writeHead(200,{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*'
                })
                if(user.username==USERS[0].username&&
                user.password==USERS[0].password){
                    response.write('{"success":true,"errorCode":0}');
                }else{
                    response.write('{"success":false,"errorCode":100}');
                }
                response.end();
            })
            }
            else{
            response.writeHead(200,{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            });

            response.write(JSON.stringify(USERS));
            response.end();
        }
    }
    else{
    response.write("Hello,it's my web server!");
    response.end();
    }
}).listen(8082);

console.log("启动web服务器，监听8082端口");