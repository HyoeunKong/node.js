const Event = require('events');
const myEvent = new Event();
const a=()=>{
    console.log("e1이 발생되었습니다...");
}//event 리스너는 add listener, on

myEvent.addListener('e1', a);

myEvent.addListener('e1',() => {
    console.log("e1이 발생되었습니다***.");
});

myEvent.on('e1',() => {
    console.log("e1이 발생되었습니다---.");
})
myEvent.once('e2',() =>{//once 아무리 불러내도 한번만 수행함
    console.log("e2이 발생되었습니다.");
})

//myEvent.emit('e1');
myEvent.emit('e1');
console.log(myEvent.listenerCount('e1'));
myEvent.removeListener('e1',a);
console.log(myEvent.listenerCount('e1'));
myEvent.emit('e1');

//emit 이벤트를 발생시키다.
//addListener = on 근데 on 을 더선호함
myEvent.removeAllListeners('e1');
