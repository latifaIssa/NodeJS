const fs = require('fs');

//reading files
/*
*2arguments:
*first argument: path of the file
*second argument is a call back function because its a synch function that take alot of times
Function(err,data)
*/
fs.readFile('./docs/blog1.txt',(err,data)=>{
if(err){
    console.log(err);
}else{
    // console.log(data);//return a buffer of data(stream)
    console.log(data.toString());
}
});

//this will be executed before callback function that takes some time to execute
console.log('last line');
//writing files
/*
*3arguments:
*first argument: path of the file
*the text ot write
*third argument is a call back function because its a synch function that take alot of times
Function(err,data)
*/
fs.writeFile('./docs/blog1.txt','hello, I am here',()=>{
    console.log('file was written');
    });
//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
});
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);

        }
        console.log('folder deleted');
    })
}

//deleting files
//we must check if the file exist before we deleted it
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){ 
            console.log(err);

        }
        console.log('file deleted');
    })
}