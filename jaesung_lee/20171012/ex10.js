// 10번문제
function checkPalindrom(str) {
  var a = str.split('');
  var c = str.split('');
  var b = c.reverse();
  //   console.log(a);
  //   console.log(b);
  return (a.join('') === b.join('')) ? true : false;
}

console.log(checkPalindrom('dad'));
console.log(checkPalindrom('mom'));
console.log(checkPalindrom('palindrom'));
console.log(checkPalindrom('s'));





function checkPalindrom(str) {
  return str === str.split('').reverse().join('')
}

console.log(checkPalindrom('dad'));
console.log(checkPalindrom('mom'));
console.log(checkPalindrom('palindrom'));
console.log(checkPalindrom('s'));