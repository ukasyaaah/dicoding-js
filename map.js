/* Map adalah tipe data yang mirip 
dengan object yaitu menyimpan data 
dengan key-value. */

// Membuat Map
const nama = new Map([]);

// Nyimpen nilai (set)
nama.set("first", "Ukhasyah");

// Number sbg key
nama.set(1, "One");

// Akses nilai (get)
console.log(nama.get("first"));

// Hapus nilai (delete)
nama.delete(1);

// CONTOH
const productMap = new Map([
  ["bantal", 2],
  ["guling", 1],
  ["selimut", 1],
]);

productMap.set("kasur", 3);
console.log(productMap.get("guling"));
productMap.delete('selimut');
console.log(productMap);
