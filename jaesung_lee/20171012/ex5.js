function toWeirdCase(s) {
  var str = s.split(" ");
  var res = [];
  for (var i = 0; i < str.length; i++) {
    var arr = [];
    for (var j = 0; j < str[i].split('').length; j++) {
      (j % 2) ? arr.push(str[i].split('')[j]): arr.push(str[i].split('')[j].toUpperCase())
    }
    res.push(arr.join(''));
  }
  return res.join(' ');
}
console.log(toWeirdCase('hello world'));
console.log(toWeirdCase('my name is lee'));