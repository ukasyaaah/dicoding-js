let input = 20;
switch (input) {
  case input != number:
    throw new error("bukan angka");
    break;
  case input % 2 == 0:
    return "Genap";
    break;
  case input % 2 != 0:
    return "Ganjil";
    break;
  case input % 2 == 1:
    return "Prima";
    break;
  case input == 0:
    return "Nol";
    break;
  case input == -input:
    return "Negatif";
    break;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
if (typeof input !== "number") {
  throw new Error("bukan angka");
} else if (input === 0) {
  return "Nol";
} else if (input < 0) {
  return "Negatif";
} else if (input % 2 === 0) {
  return "Genap";
} else if (input % 2 === 1) {
  return "Ganjil"; // FYI: 1 itu ganjil, bukan prima
} else if (input % input != 0 || input % 1 != 0) {
  return "Prima";
}
