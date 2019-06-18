var a = 10;
//console.log(this);
function add1(x,y){
    //console.log(this == global);
    return x+y;
} //function이 독립적인 함수



var add2 = function (x,y){
    //console.log(this == global);
    return x+y;
}
//function이 add2에 할당됨


/*const add3 = (x,y) => {
    console.log(this); //자기 문서 객체 ,이 함수의 소유주가 문서가 된다.
    return x+y;
}*/


const add3 = (x,y) => (x+y);
const add4 = x => {
    ++x;
    return ++x;
} //화살표 함수의 축약 표현

add1(1.2);
add2(1.2);
add3(1.2);
console.log(add4(10));

//console.log(this.a);