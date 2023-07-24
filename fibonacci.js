function fibonacci(number) {
  if (number <= 1) {
    return 1;
  }
  let result = 1;
  for (let i = number; i > 1; i--) {
    result = result * i;
  }
  return result;
}
console.log(fibonacci(6));
console.log(fibonacci(20));
console.log(fibonacci(1));
