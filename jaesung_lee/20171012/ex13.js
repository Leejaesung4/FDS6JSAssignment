function gcdlcm(a, b) {
  var min = Math.min(a, b);
  var row = [];

  for (var i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      row.push(i);
    }
  }
  var roow = [row.pop()];

  var high = (a * b) / roow;

  var result = roow.concat(high);
  return result;
}
console.log(gcdlcm(3, 12)); // [3, 12]