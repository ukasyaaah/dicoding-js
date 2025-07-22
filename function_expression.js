const perkalian = function (a, b) {
  return a * b;
};

perkalian(3, 3);
console.log("Hasil Perkalian :", perkalian(2, 2));

// First-Class Citizen
function kali(a, b) {
  return a * b;
}

function hitung(operasi, numA, numB) {
  return operasi(numA, numB);
}

const hasil = hitung(kali, 5, 5);
console.log(hasil);

// mengembalikan nilai function dari suatu function
function multi(x) {
  return function (num) {
    return x * num;
  };
}

const double = multi(10);
console.log(double(20));
