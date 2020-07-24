// Num = parseInt(prompt("Enter the Num"));
Num = prompt("Enter the Num");
let ul = document.querySelector("ul");
for (let i = 1; i <= 10; i++) {
  ul.innerHTML += `<li>${Num} x ${i} = ${Num * i}</li>`;
}
