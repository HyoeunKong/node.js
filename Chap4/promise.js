console.log('시작');
function my1(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("hello");
           reject("ㅠ.ㅠ")
        },2000);
    });

}
function my2(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve("world");
        },1000);
    });

}
async function f() {
    const data1 = await my1();
    console.log(data1);
    const data2 = await my2();
    console.log(data2);
    console.log("끝");
}
f();











/* my1(false)
.then((result)=>{
    console.log(result);
    return my2();
}).then((result)=>{
    console.log(result);
    console.log('끝');
}).catch((err)=>{
    console.log(err);
}); */

//보기 좋게 하기 위해서 사용(일렬로)

/* console.log('시작');
setTimeout(()=>{
    console.log('hello');
    setTimeout(()=>{
        console.log('world');
        setTimeout(()=>{
            console.log('끝');
        },2000);
        
    },2000); //end world
},2000); //end hello
 */


