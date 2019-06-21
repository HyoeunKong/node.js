const fs = require('fs');

const readStream = fs.createReadStream('heart_copy.png');
const writeStream = fs.createWriteStream('heart_copy1.png');
readStream.pipe(writeStream);
