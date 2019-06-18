a = 1234;

var obj={
    txt : "aaa",
    numbers : [45, 4, 9, 16, 25],
    myFunction : function () {
        this.numbers.forEach(function (ele, i){
            this.txt = this.txt + i + ":" + ele + "\n"; 
          });
          console.log(txt);
          
    }
}
obj.myFunction();
console.log(a);
console.log(global.a);
console.log(txt)
console.log(global.txt===txt)