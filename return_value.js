const result = console.log("JS Keren!");

/* undefined. Hal ini karena memang 
method console.log tidak mengembalikan nilai apa pun*/
console.log(result);

function sumNum(a, b) {
  const result = a + b;
  return result;
}

const hasil = sumNum(20, 20);
console.log("Total jumlah :", hasil);

// Klo udah return, maka program berhenti
function hallo() {
  return "Hallo Dunia";
  console.log("Ga akan tampil");
}

const halo = hallo();
console.log(halo);
