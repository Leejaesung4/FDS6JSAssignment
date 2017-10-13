function hideNumbers(str) {
  //   var num = str.slice(-4);
  //   var num1 = '';
  //   for (var i = 0; i < str.length - 4; i++) {
  //     num1 += '*';
  //   }
  //   return num1 + num;
  var len = str.length - 4;
  var star = '';
  for (var i = 0; i < len; i++) {
    star += '*';
  }
  return star + str.substring(len);
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888