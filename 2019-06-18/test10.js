console.log(this===global);
var txt = "aaa";
var numbers = [45,4,9,16,25];

var myFunction =function (){
    console.log(this===global);
    numbers.forEach(function(ele,i){
        this.txt +=(":"+ i +"q번째 값"+  ele + "\n" );

    });
  console.log("==="+this.txt);
  console.log(">>>"+global.txt);
}

myFunction();
console.log("txt="+txt);
console
