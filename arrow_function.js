const perkalian2 = (num) => 2 * num;

const nih = perkalian2(20);
console.log(nih);

function perkalian5(num = 5) {
  const hasil = 5 * num;

  console.log(`Hasil perkalian 5 x ${num} =`, hasil);
}

perkalian5(4);
