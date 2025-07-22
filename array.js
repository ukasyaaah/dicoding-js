// Array adalah struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
// Array merupakan Object

const data = [1, "2", true];

// method typeof untuk melihat jenis tipe data dari array
console.log(typeof data);

//membuat array
const num = new Array();
const num4 = new Array(4);

// membuat array menggunakan Array.from.
const foo = Array.from("foo"); // [f,o,o]
console.log(foo);

/* Array.from merupakan method
 untuk membuat array yang 
 diperkenalkan di ES6.*/

/* Array.from juga dapat dimanfaatkan 
 untuk menyalin array lainnya */
const user = ["Ukhasyah", "Zufar", "Al", "Fauzan"];
const customer = Array.from(user);
console.log(customer);

/* 
- disarankan untuk membuat array adalah 
  menggunakan object literals

- Membuat array dengan literals lebih 
  disarankan karena lebih sederhana dan mudah untuk dibaca.
*/

const literal = [];

// Akses elemen array
const myArr = [10, 20, 30, 40];
console.log(myArr[1]);

// Manipulasi nilai array
myArr[0] = 15;
console.log(myArr);

// Nambah nilai pada array (push)
myArr.push(40);
console.log(myArr);

// Hapus data pd array (delete)
delete myArr[0];
console.log(myArr);

// Hapus Elemen & data
// index, element yg dihapus
myArr.splice(1, 1);

// menghapus dua element
myArr.splice(2, 3);
console.log(myArr);

// shift : hanya menghapus element pertama
// pop : menghapus element terakhir.
const youArr = ["miaw", "neko", "chan"];
youArr.pop();
youArr.shift();
console.log(youArr);

// Destructuring digunakan untuk melihat isi dari array
const kenalan = ["Halo", "Andy"];
const [sapa, nama] = kenalan;
console.log(nama);

// ARRAY METHOD
// Reverse : balikkan nilai array
const lang = ["dart", "pHP", "javaScript"];
console.log(lang.reverse());

// Sort : Urutin nilai array (a - z)
lang.sort();
console.log(lang);
