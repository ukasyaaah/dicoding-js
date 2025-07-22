/*
- Spread operator digunakan untuk 
  menyebarkan nilai yang ada pada 
  object dan array.

- ditandai dengan sintaks tiga titik  (...)

- Dgn ini, nilai object dan array dapat 
  di-iterable menjadi beberapa element. 

- Dapat mempermudah menggabungkan 
  dua object 
*/

// Menggabungkan 2 Objek
const pengarang = { nama: "Leila S. Chudori" };
const produk = { judul: "Laut Bercerita", tahun_terbit: 2007 };

const buku = { ...produk, ...pengarang };
console.log(buku);

// Menyalin Objek
const movie = { title: "Avatar", dir: "James Cameron" };
const copyOfMovie = {...movie}
console.log(copyOfMovie);


// Gabung 2 Array
const num = [1,2,3,4,5,]
const num2 = [6,7,8,9,0,]
const number = [...num, ...num2]
console.log(number);

// Salin Array
const color = ['white', 'black', 'brown']
const copyOfColor = [...color]
console.log(copyOfColor);