// for(var awal; kondisi; increment);

/// FOR
// Continue utk skip
// Break utk berhenti
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(`${i}`);
}

/// FOR IN
const orang = { name: "Ari", country: "Indonesia", age: 98 };

for (const Prop in orang) {
  console.log(`${Prop} bernilai ${orang[Prop]}`);
}

// FOR OF
const food = ["bakwan", "rendang", "kari"];

for (const item of food) {
  console.log(item);
}

// WHILE
let nilai = 0;
while (nilai <= 10) {
  console.log(`angka ${nilai}`);
  nilai++;
}

let nilaii = 0;
do {
  console.log(nilaii);
  nilaii++;
} while (nilaii <= 10);
