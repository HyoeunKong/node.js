const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);



function first(){
second();
console.log('첫번째');
}
function second(){
third();
console.log('두번째');
}

function third(){
console.log('세번째');
}
first();
//ctrl ~ 터미널 열림