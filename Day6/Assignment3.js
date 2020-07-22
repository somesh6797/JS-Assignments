let name = prompt("Enter the Name");
document.querySelector(".para").innerHTML = "Welcome " + name;

let clock = () => {
  var date = new Date();
  document.querySelector(".clock").innerText =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
};

setInterval(clock, 1000);

let BTN = document.querySelector(".BTN");
BTN.onclick = () => {
  document.body.classList.toggle("dark");
};
