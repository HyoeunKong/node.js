var candyMachine={
    status:{
        name:'node',
        count:5
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    },
    a:10,
    b:20,
    c:30
    
}; //end 사탕기계

//var getCandy = candyMachine.getCandy;
//var count = candyMachine.status.count;
const {getCandy,status:{count},a,b,c} = candyMachine; //cadyMachine을 먼저보고 getCandy라는 값을 찾아서 넣어준다.

console.log(getCandy());