let colrs = [
  "rgb(255, 0, 85)",
  "rgb(0, 255, 106)",
  "rgb(0, 195, 255)",
  "rgb(204, 0, 255)",
  "rgb(0, 195, 255)"
];

let i = 0;
let change = () => {
  t = setInterval(() => {
    document.body.style.backgroundColor = colrs[i];
    console.log(colrs[i], i);
    i++;
    if (i == 5) {
      i = 0;
    }
  }, 5000);
};

change();
