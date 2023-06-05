var readlineSync = require("readline-sync");
let n=readlineSync.question("enter a number")
let strng ="";
for (let i=1;i<=n;i++){
    
    for(let j=1;j<=i;j++){
        strng +="\n";
    }
    strng +="\n";
}

console.log(strng);