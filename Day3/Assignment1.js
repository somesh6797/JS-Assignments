var num=prompt("Enter  a number to check");

let chkEvenOdd=(num)=>{
if(num%2==0)
{
    console.log("Number",num,"is Even");
}else{
    console.log("Number",num,"is odd");
}
}

chkEvenOdd(num);