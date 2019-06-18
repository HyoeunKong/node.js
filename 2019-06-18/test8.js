var  a= "aaa";
b = "bbb"; //
var numbers = [45, 4, 9, 16, 25];
var myFunction = function () {
       numbers.forEach(function (ele, i){
           this.txt = this.txt + i + ":" + ele + "\n"; //여기서에 this는 forEach안에서 call back을 호출하는 함
          });
          console.log(this.txt);
    }
myFunction();
console.log(txt);
console.log(global.txt);
console.log(a);
console.log(global.b);
