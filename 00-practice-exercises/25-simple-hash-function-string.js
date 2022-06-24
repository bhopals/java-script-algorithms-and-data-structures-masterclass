function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.codeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3
