function waterMelon(n) {
  var melon = '';
  for (var i = 1; i <= n; i++) {
    melon += (i % 2 === 1) ? '수' : '박';
  }
  return melon;
}
console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));