var readlineSync = require("readline-sync");
let lim=readlineSync.question("enter the limit:")
limit = parseInt(lim);

let sum=0;
for(let i=1;i<=limit;i++){
    if((i%2)!=0){
    sum +=i;
}}

console.log("sum of odd numbers=",sum);