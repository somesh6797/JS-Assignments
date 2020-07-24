let Nums = [];
while (true) {
  Num = prompt("Enter a positive Number give space as input to cancel");
  if (Num == "") {
    console.log("Ended");
    break;
  }
  Nums.push(parseInt(Num));
}

document.querySelector(".BTN").addEventListener("click", () => {
  getOddNum(Nums);
});

let getOddNum = Nums => {
  OddNum = Nums.filter(Num => {
    if (Num % 2 != 0) {
      return true;
    }
  });
  console.log("All Odd Numbers are", OddNum);
};
