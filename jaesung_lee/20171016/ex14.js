function fibonacci(n) {
  var a = 0;
  var b = 1;
  var c = 0;
  for (var i = 0; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;

}
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13