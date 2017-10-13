function nextSqaure(n) {
  var result = '';
  var mat = Math.sqrt(n);
  result += (parseInt(mat) === mat) ? (mat + 1) * (mat + 1) : 'no';
  return result;
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441