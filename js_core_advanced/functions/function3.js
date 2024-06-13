function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([1, 1, 1, 2, 1, 1, 0]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
