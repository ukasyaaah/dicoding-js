/*
- set tidak memiliki key dan indeks 
  ketika menyimpan data.
- data yang disimpan di dalam set akan 
  bernilai unik artinya tidak akan ada 
  data yang duplikat
*/

// Bikin Set
const set = new Set();

// nyimpen nilai
set.add(1);
set.add(2);

// Akses nilai di set, pake looping
// bisa pake for / foreach
for (const num of set) {
  console.log(num);
}

// Hapus nilai
set.delete(2);

// CONTOH
const mySet = new Set([1, 2, 2, 2, 3, 4]);
mySet.add(5);
mySet.forEach((element) => console.log(element));
mySet.delete(1);

console.log(mySet);
