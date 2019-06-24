const http=require('http');
const fs=require('fs');
const {URL}=require('url');

const a = require('cookie-parser');
console.log(a);

/*const session={};
let count=0;


function makeContents(fileName, res) {
    fs.readFile(fileName,(err,data)=>{
        if(err){
            throw err;
        }
        res.writeHead(200,
            {'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
    }); 
}

http.createServer((req,res)=>{
    console.log(req.url, "   ", session);
    if(req.url==='/'){
        makeContents('./index.html',res);
    }else if(req.url.startsWith('/login')){        
        //1. id/pw
        const myURL=new URL('http://localhost:9999'+req.url);
        const id=myURL.searchParams.get('id');
        const pw=myURL.searchParams.get('pw');
        //2. id!=null && pw!=null ==>로그인 ok ==> sessionid만들어 
        if(id && pw){
           session[++count]={
               id,
               pw,
               sayJS(){
                   
               }
           };//session.1.id / session.1.pw  session.2.id session.2.pw
          //3. 쿠키로 res 세팅
           res.writeHead(200,{
                'Content-Type':'text/html;charset=utf-8',
                'Set-Cookie':`NODE_SESSIONID=${count}`});
           res.write(`${id}님 환영합니다`);
           res.write('<form action="basket" method="get" >');
           res.write('<input type="radio" name="product" value="0001" checked> 보노보노<br>');
           res.write('<input type="radio" name="product" value="0002"> 도라에몽<br>');
           res.write('<input type="radio" name="product" value="0003"> 라이언<br>');
           res.write('<input type="submit" value="장바구니 넣기" >');
           res.write('</form>');
        }else{//4. else ==> 로그인 fail ==> index로 응대 
            makeContents('./index.html',res);
        }
    }else if(req.url.startsWith('/basket')){
        let session_var_name=null;
        let logined_id=null;
        const myURL=new URL('http://localhost:9999'+req.url);
        const product=myURL.searchParams.get('product');
        if(req.headers.cookie){
            req.headers.cookie.split(';').forEach((ele)=>{
                if(ele.startsWith('NODE_SESSIONID')){//NODE_SESSIONID=1
                     session_var_name=ele.split('=')[1];
                     logined_id=session[session_var_name].id;
                    if(logined_id){//로그인 상태 확인 ok
                        if(session[session_var_name].product){
                            session[session_var_name].product.push(product);
                        }else{
                            session[session_var_name].product=[product];
                        }
                        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                        res.write(`${logined_id}님의 장바구니에 ${product}가 담겼습니다.`);
                        res.write('<hr><h3>장바구니 목록 </h3><br>');
                        session[session_var_name].product.forEach((ele)=>{
                            res.write(`<br>${ele}`);
                        });

                        makeContents('./index1.html',res); 
                   //  res.write("<br><a href='./index1.html'>계속 쇼핑하기</a>");
                        /*  res.write('<form action="basket" method="get" >');
                        res.write('<input type="radio" name="product" value="0001" checked> 보노보노<br>');
                        res.write('<input type="radio" name="product" value="0002"> 도라에몽<br>');
                        res.write('<input type="radio" name="product" value="0003"> 라이언<br>');
                        res.write('<input type="submit" value="장바구니 넣기" >');
                        res.write('</form>');  
                    }else{
                        //해킹상태==>침해대응
                    }            
              
                }else{//sessionid가 없는 상태는 첫 페이지로 응대
                    makeContents('./index.html',res);
                }
            });
        }//쿠키가 있을 때       
       
    }else{
        //console.log(req.url);
        //console.log(req.headers);
        res.writeHead(200,
            {'Content-Type':'text/html;charset=utf-8'});
        res.end('요청 처리 불가');
    }

}).listen(9999,()=>{
    console.log('9999 server ready...');
});*/