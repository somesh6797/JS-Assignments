
//Example1
let a=100;
document.write("<br>before call",a);

(function fun1()
{
    let a=200;
    document.write("<br>inside method",a);
})();

document.write("<br>after call",a);

for(let b=0;b<5;b++)//if we have used var here b would 
{                   //have available outside the for block.
    document.write("<br>",b);
}

// document.write(b);//but we used let so b is not available here so we got ERROR


///////////////////////////////////////

console.log (msg);
var msg = "say hello";
//it is considered as 

var msg;
console.log(msg); // greeter is undefined
msg = "say hello"

// but if we use let like this

console.log(msg);
let msg="something";

// we'll get the error