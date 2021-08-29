const name = 'Latifa';
// console.log(name);

const great = (name)=>{
    console.log(`hello, ${name}`);
}
// great('Ahmad');
// great('Hala');

// console.log(global);
//setTimeOut ==> run once after 3 seconds
global.setTimeout(()=>{
    console.log('in the timeout');
},3000);

//or we can use it without globals
setTimeout(()=>{
    console.log('in the timeout');
    clearInterval(int);
},3000);

//setInterval==> runs every 1 second, we can stopped it by calling clearInterval(int)
const int = setInterval(()=>{
console.log('in the interval');
},1000);



