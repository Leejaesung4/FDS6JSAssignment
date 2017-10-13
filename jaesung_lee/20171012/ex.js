function alphaString46(s) {
  var regExp = /^[0-9]{4,6}$/;
  return regExp.test(s);
  //return /^[0-9]{4,6}$/.test(s);
}

console.log(alphaString46('1234'));
console.log(alphaString46('9014'));
console.log(alphaString46('723'));
console.log(alphaString46('a234'));
console.log(alphaString46(''));
console.log(alphaString46());

// function alphaString46(s) {
//   if (!s) return false;
//   var len = s.length;
//   if ((len >= 4 && len <= 6) && !isNaN(s)) return true;;
// }
// console.log(alphaString46('1234'));
// console.log(alphaString46('9014'));
// console.log(alphaString46('723'));
// console.log(alphaString46('a234'));
// console.log(alphaString46(''));
// console.log(alphaString46());