const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog1.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt',{encoding:'utf-8'});

//on: data event
// readStream.on('data',(chunk)=>{
//     console.log('----New Chunk----');
//     console.log(chunk.toString());
//////or
//     writeStream.write('\nNew CHUNK');
// writeStream.write(chunk);
// });


//use pipe insted of stream
readStream.pipe(writeStream); //easire to write