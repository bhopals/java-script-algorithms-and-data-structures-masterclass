function sumRange(num) {
  if (num === 1) return 1; //BASE CASE
  return num + sumRange(num - 1); // DIFFERENT INPUT (num - 1)
}
sumRange(5);
