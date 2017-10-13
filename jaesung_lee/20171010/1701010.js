// function getCount8() {
//   var str = '';
//   var conunt = 0;
//   for (var i = 0; i <= 10000; i++) {
//     str += i;
//   }
//   var len = str.length;
//   for (var j = 0; j <= len; j++) {
//     if (str[j] === '8') {
//       conunt++;
//     }
//   }
//   return conunt;
// }
// console.log(getCount8());

// function getCount8() {
//   var str = '';
//   var count = 0;
//   for (var i = 0; i <= 10000; i++) {
//     str += i;
//   }
//   for (var m = 0; m < str.length; m++) {
//     if (str[m] === '8') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getCount8());



//26번 문제

//2번문제
function evenOrOddif(num) {
  if (num % 2) return 'Odd';
  return 'Even';
}

console.log(evenOrOddif(2)); // Even
console.log(evenOrOddif(3)); // Odd
console.log(evenOrOddif(1000)); // Even

function evenOrOdd(num) {
  return (num % 2) ? 'Odd' : 'Even';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

//3번문제

function alphaString46(s) {
  // s = s ? s : '';
  if (s === undefined || s === null) {
    s = '';
  }
  return /^\d{4,6}$/.test(s);
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false

//26번문제
function getDayName(a, b) {
  var day_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Tru', 'Sta'];
  var target_date = new Date(2016, a - 1, b);
  console.log(target_date);
  var day_index = target_date.getDay();
  return day_names[day_index];
}

console.log(getDayName(5, 24)); // TUE