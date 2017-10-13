// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다.
// 대소문자를 구별하지 않으며 s에 'p' 의 개수와 'y' 의 갯수를 비교해 같으면 true, 
// 다르면 false를 리턴하도록 함수를 완성하라.
// 'p', 'y'모두 하나도 없는 경우는 항상 true를 리턴한다.예를들어
//  s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

function numPY(s) {
  //   s = s ? s : '';
  //   var str = s.toUpperCase();
  //   // console.log(str);
  //   var cntP = 0;
  //   var cntY = 0;

  //   for (var i = 0; i < str.length; i++) {
  //     if (str[i] === 'p') cntP++;
  //     if (str[i === 'Y']) cntY++;
  //   }
  //   return cntP === cntY;
  // }
  s = s ? s : '';
  var regexpP = /p/gi;
  var regexpY = /y/ig;

  return ((s.match(regexpP) ? s.match(regexpP).length : 0) === (s.match(regexpY) ? s.match(regexpY).length : 0));
  // return s.match(regexpP).length === s.match(regexpY).length;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY());