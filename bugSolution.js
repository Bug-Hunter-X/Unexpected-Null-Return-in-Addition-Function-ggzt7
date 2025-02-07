function foo(a, b) {
  // Handle null values by assigning them to 0
  const aValue = a === null ? 0 : a;
  const bValue = b === null ? 0 : b;
  return aValue + bValue;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0