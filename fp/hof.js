function sifat(sifat) {
  return function (noun) {
    return `${noun} ${sifat}`;
  };
}

const lucu = sifat("lucu");

console.log(lucu("Ukhasyah"));

const num = [2, 3, 4, 5];

const double = num.map((e) => e * 2);

console.log(double);
