var readlineSync = require("readline-sync");
console.log("enter 1 for addition\n enter2 for subsraction \n enter 3 for multiplication \n enter 4 for division  result=a+b;")
let num=readlineSync.question("enter operation:")
let num1=readlineSync.question("enter first number:")
let num2=readlineSync.question("enter second number:")
num= parseInt(num);
num1=parseInt(num1);
num2=parseInt(num2);

switch (num){ 
    case 1:
       let a=add(num1,num2);
        console.log(num1,"+,",num2,"=",a);
        break;
    case 2:
      let  b=substraction(num1,num2);
        console.log(num1,"-",num2,"=",b);
        break;
    case 3:
      let  c=multiplication(num1,num2);
        console.log(num1,"*",num2,"=",c);
        break;
    case 4:
     let   d=division(num1,num2);
        console.log(num1,"/",num2,"=",d);
        break;
    default :
    console.log("valid operation");

    function add(a,b){
        let sum=a+b;
        return sum;
    function sub(a,b){
        let sum =a-b;
        return sum;
    function multi( a,b){
        let sum =a*b;
        return sum;
    function div(a,b){
        let sum=a/b;
        return sum;
    }
    }    
    }   
    }
            
}