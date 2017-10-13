function strToInt(str) {
  // return str * 1;
  // return +str;
  return parseInt(str);
  // return parseFloat(str);
}

console.log(strToInt('1234')); // 1234
console.log(strToInt('-1234')); // -1234