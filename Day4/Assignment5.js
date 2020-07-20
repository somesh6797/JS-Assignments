//Giving Commission

let getCommission = sales => {
  let com = 0;
  if (sales > 0 && sales <= 5000) {
    com = (2 / 100) * sales;
  }
  if (sales > 5001 && sales <= 10000) {
    com = (5 / 100) * sales;
  }
  if (sales > 10001 && sales <= 20000) {
    com = (7 / 100) * sales;
  }
  if (sales > 20001) {
    com = (10 / 100) * sales;
  }
  return com;
};

console.log(getCommission(10000));
