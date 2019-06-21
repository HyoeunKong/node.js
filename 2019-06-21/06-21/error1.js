 const a = () => {//이벤트루프
    console.log('시작');//주프로세스
    try{
        throw new Error('서버를 고장 내 주마!');
    }catch (err){
        clearInterval(a);
    
    }
    console.log("hi");
}
setInterval(a,1000);

