// //4번문제

// function numPY(s) {

//   // s = s ? s : '';
//   // var regexpP = /p/gi;
//   // var regexpY = /y/ig;

//   // return ((s.match(regexpP) ? s.match(regexpP).length : 0) === (s.match(regexpY) ? s.match(regexpY).length : 0));
//   s = s ? s : '';
//   var str = function(ch) {
//     var arr = s.match(new RegExp(ch, 'ig'));
//     return arr ? arr.length : 0;
//   };
//   return (str('p') === str('y'));
// }

// console.log(numPY('pPoooyY'));
// console.log(numPY('Pyy'));
// console.log(numPY('ab'));
// console.log(numPY(''));
// console.log(numPY());

// //5번문제

// function toWeirdCase(s) {
//   var str = s.split(" ");
//   var res = [];
//   for (var i = 0; i < str.length; i++) {
//     var arr = [];
//     for (var j = 0; j < str[i].split('').length; j++) {
//       (j % 2) ? arr.push(str[i].split('')[j]): arr.push(str[i].split('')[j].toUpperCase()) // if문으로 대체 가능
//     }
//     res.push(arr.join(''));
//   }
//   return res.join(' ');
// }
// console.log(toWeirdCase('hello world'));
// console.log(toWeirdCase('my name is lee'));
var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = function() {
    return i;
  };
}
console.log(arr);

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]());
}