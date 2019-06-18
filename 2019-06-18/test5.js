const sayNode = function(){
    console.log('Node');
};
const es = 'ES';
const newObject={  //const 상수구나 이름이 newObject 이구나 {}객체구나 객체안에 sayJS라는 값이 할당되어있는 변수가 있구나, sayNode 값이 어딘가에 할당되어있겠구나.
        sayJS(){
            console.log('JS');
        },
        sayNode,
        [es+6]:'Factistic'  //값의 동적네이밍 
};
newObject.sayNode();//이름을 지을때 []로 이어쓰기 표현을 할 수 있는데. 이것은변수가 되고 이것을 가리키는 값을 가지고온다. 절대추천하지 않음....ㅎㅎ