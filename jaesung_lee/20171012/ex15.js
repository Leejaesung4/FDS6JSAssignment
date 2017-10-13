function isHarshad(n) {
  var arr = n.toString().split('');
  var add = 0;
  for (var i = 0; i < arr.length; i++) {
    add += arr[i] * 1;
  }
  console.log(add);
  return (n % add === 0) ? true : false;
}
console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false