const {even,odd} = require('./js/var.js'); //{}가 열려있으면 이름들을 모아놓겠다라는뜻. 순서가 아니라 이름으로 받겠다. 방출하고 있는 모듈에 똑같은 이름의 값들이 할당된다.
function checkOddOREven(num){
    if(num % 2){//홀수
        return odd;
    }
    else{
        return even;
    }
} 

module.exports = checkOddOREven; //호출하는게 아니라 function 객체를 주는것
