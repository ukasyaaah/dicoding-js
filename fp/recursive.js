function generateAngka(n) {
  if (n < 0) {
    return [];
  }

  return [...generateAngka(n - 1), n];
}

let con = generateAngka(8);
console.log(con);
