//call onther file
const xyz = require('./peoples');
const {people,ages} =require('./peoples');
// console.log(xyz,xyz.people,xyz.ages);//return empty object{}
//console.log(people);//people not defined we need to export people to use it here
console.log(people,ages);

const os = require('os');//build into node
console.log(os.platform(),os.homedir());