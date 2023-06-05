var readlineSync = require("readline-sync");
let num=readlineSync.question("enter a number ");
let a=0;
for(i=2;i<num;i++){
    if(num%i==0){
        a=a+1;
    }
    if(a==0)
{console.log("the  number is a prime number");

}
else[
    console.log("the  number is not a prime number")
    
]


}