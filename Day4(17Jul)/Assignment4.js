let getValues = () => {
  let val1 = document.querySelector(".val1").value;
  let val2 = document.querySelector(".val2").value;
  return [val1, val2];
};
ans = document.querySelector(".ans");

document.querySelector(".Add").addEventListener("click", () => {
  [val1, val2] = getValues();
  ans.value = Number(val1) + Number(val2);
});

document.querySelector(".Sub").addEventListener("click", () => {
  [val1, val2] = getValues();
  ans.value = Number(val1) - Number(val2);
});

document.querySelector(".Mul").addEventListener("click", () => {
  [val1, val2] = getValues();
  ans.value = Number(val1) * Number(val2);
});

document.querySelector(".Div").addEventListener("click", () => {
  [val1, val2] = getValues();
  ans.value = Number(val1) / Number(val2);
});

document.querySelector(".Sqrt").addEventListener("click", () => {
  [val1, val2] = getValues();
  ans.value = Math.sqrt(val1);
});

document.querySelector(".Per").addEventListener("click", () => {
  [val1, val2] = getValues();
  ans.value = (val2 / 100) * val1;
});
