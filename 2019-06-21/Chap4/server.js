const http = require('http');
let count = 0;
const parseCookies = (cookies) => {
    //console.log('기존쿠키:', cookies );
    if(cookies){
    console.log(typeof cookies);
    const a = cookies.split(';')
    console.log(a instanceof Array);
    const b = a.map((ele) => ele.split('='));
    b.map((k,...vs) => {
        console.log(k,vs);
        const c = [k,vs.join('=')];
        console.log("===>",c);
        return c;
     });
    }
};
const server = http.createServer((req,res) => {
        const cookies = req.headers.cookie;
        parseCookies(cookies);
        res.writeHead(200,{'Set-Cookie':
        `myCookie${++count}=test${count}`}); //쿠키세팅
        res.end('쿠키가 세팅되었습니다.');
    

   // }   
    
});
server.listen(9999,() => {
    console.log('9999 server ready.......');
});