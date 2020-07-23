//String Object
let str = new String();
str = "My Name Is Somesh";

//Charat--> Gives Character At the Index

document.write("<br />str.charAt(3):- ", str.charAt(3));

//fromCharCode---> gives equivalent char of ASCII code
document.write("<br />String.fromCharCode(65):- ", String.fromCharCode(65));
let aString = String.fromCharCode(68, 79, 71);
document.write("<br />String.fromCharCode(68,79,71):- ", aString);

//indexOf---> Gives index of Character
document.write(
  '<br />"JavaScript".indexOf("Script")',
  "JavaScript".indexOf("Script")
);
document.write(
  '<br />"JavaScript".indexOf("a",2)',
  "JavaScript".indexOf("a", 2)
);

//split---> split string into array according to given parameter char
//here split by space
let WordArr = "a simple Example".split();
document.write(WordArr, "<br />");

//Array Object

var myArr = [];

//arr.sort method this method sort by lexicogrphical order
myArr = [4, 66, 45, 25, 7, 35, 8, 90];
function myCompare(x, y) {
  if (x < y) return -1;
  else if (x === y) return 0;
  else return 1;
}
myArr.sort(myCompare);
document.write("<br>sorted array is", myArr);

//arr.splice methd this is for replacing
var myArray = [1, 2, 3, 4, 5];
myArray.splice(3, 2, "a", "b");
document.write(
  "<br>myarr with splice[start,del_count,to be replace characters] method:---",
  myArray
);

//arr.reverse() Method
var myArray = ["red", "green", "blue"];
myArray.reverse();
document.write("<br>myarr with reverse method:---", myArray);

//arr.split() method
myArr = "ishjhfhl";
myArr = myArr.split("f"); //now f will not be included.
document.write("<br>myarr with split method:---", myArr);

//array.concat() Method
myArr = ["never", "ever"];
myArr = myArr.concat("white", ["gray", ["orange", "magenta"]]);
//document.write("<br>",typeof(myArr));
document.write("<br>concatenated array is=", myArr);

//array.join() function
myArr = ["hi", "hello"];
var theString = myArr.join(" or ");
document.write("<br>theString is=", theString);
document.write("where or is in join function");

myArr = new Array();
myArr[7] = "hi";
document.write("<br>myArr=", myArr);
myArr = [4, 5, 6];
document.write("<br>myArr=", myArr);
myArr[name] = "somesh";
document.write("<br>myArr=", myArr[name]);
