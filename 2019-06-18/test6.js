
//console.log(global);
//console.log(this === global);
var a = 10;
b = 20;//global variable
//var c = 20;
this.c = 40;
function f(){
  
    var d=30; //local variable
    //console.log(c);
    console.log(d);
    }
//console.log(a);
//console.log(global.b);//c()호출하는 순간 stack에쌓임

console.log(this.c)
f();
//console.log(d);