const http = require('http');
const fs = require('fs');
const {URL} = require('url');
const session = {};


http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile('./index.html',(err,data) => {
            if(err){
                throw err;
            }
            res.writeHead(200,
                {'content-Type':'text/html;charset=utf-8'});
            res.end(data);

        });
    }else if(req.url.startWith('/login')){
        console.log(req.url);
        //1.id/pw
        const myURL = new URL('http://localhost:9999'+req.url);
        const id = myURL.searchParams.get('id');
        const pw = myURL.searchParams.get('pw');
        //2. id!=null && pw!=null ==>로그인 ok ==>sessionid만들어
        if(id && pw){
            session.id = 10;//동적 네이밍 사용
            

        } 
        //3.쿠키로 res 세팅
        //4.else ==> 로그인 fail ==> index로 응대
    
    }else{
        console.log(req.url);
        console.log(req.headers);
        res.writeHead(200,
            {'content-Type':'text/html;charset=utf-8'});
        res.end('요청 처리 불가');
    }

}).listen(9999,()=>{
    console.log('9999 server ready.....');
});
