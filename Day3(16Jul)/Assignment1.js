var num = prompt("Enter  a number to check");

let chkEvenOdd = num => {
  if (num % 2 == 0) {
    return `Number${num}is Even`;
  } else {
    return `Number${num}is Odd`;
  }
};

let result = chkEvenOdd(num);

console.log(result);
