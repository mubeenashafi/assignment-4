var readlineSync = require("readline-sync");
let num=readlineSync.question("ente  the number")

for(i=1;i<=10;i++){
    console.log(i,"*",num,"=",num*i);
}