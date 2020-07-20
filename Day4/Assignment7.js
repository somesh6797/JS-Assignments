//Prime Numbers
let Prime = true;
for (
  let Num = 2;
  Num <= 20;
  Num++ //to generate Sequence of nums
) {
  for (
    let i = 2;
    i < Num;
    i++ //to check prime
  ) {
    if (Num % i == 0) {
      Prime = false;
      break;
    }
    if (Prime == false) break;
  }
  if (Prime == true) {
    console.log(Num);
  } else {
    Prime = true;
  }
}
