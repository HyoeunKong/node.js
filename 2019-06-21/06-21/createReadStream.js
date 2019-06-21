const fs = require('fs');
const readStream = fs.createReadStream('./createReadSteam.js',{highWaterMark:16});
const data = [];
readStream.on('data',(chunk) => {
    data.push(chunk);
    console.log('data : ',chunk,chunk.length);

});//이벤트리스너 등록
readStream.on('end',() => {
    console.log('end:',Buffer.concat(data).toString());
});
readStream.on('errer',(err) => {
    console.log('error:',err);
});
