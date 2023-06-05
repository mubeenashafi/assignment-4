var readlineSync = require("readline-sync");
let num=readlineSync.question("ente  the number")
console.log("enter the values of array");
const array=[];
console.log("enter the values of array:");
const a=[];
let b=0;
for(let i=0;i<num;i++){
     a[i]=readlineSync.question("");
     if(i%2==0){
        b=b+1;
     }}
    
     console.log('number of even numbers in the given array is'),b;