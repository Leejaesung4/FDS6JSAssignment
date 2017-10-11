//4번문제

function numPY(s) {

  s = s ? s : '';
  var regexpP = /p/gi;
  var regexpY = /y/ig;

  return ((s.match(regexpP) ? s.match(regexpP).length : 0) === (s.match(regexpY) ? s.match(regexpY).length : 0));

}

console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());