function sumDivisor(num) {
  var arr = 0;
  for (var i = 1; i <= num; i++) {
    arr += (num % i === 0) ? i : 0;
  }
  return arr;
}

console.log(sumDivisor(111)); // 28