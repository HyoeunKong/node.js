console.log(this);
console.log(this === global);//false
const a = 10; //local
b = 20; //global 멤버 
this.c = 30; //문서{} 멤버
function d(){
	var d=40;//local
	f= 50;//global 멤버변수
}
d();
console.log(a)//local변수 부를때
console.log(global.b)
console.log(this.c)
console.log(global.f);
