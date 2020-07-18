var OSName=prompt("Enter the OS name and version separated by space");

let putName=(OSName)=>{
[name,version]=OSName.split(" ");
console.log(`The OS name is ${name} and version is ${version}`);
}
putName(OSName);