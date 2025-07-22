/*
- memungkinkan function untuk 
  menerima argument dalam bentuk ARRAY.

- Rest operator yang digunakan pada 
  parameter fungsi sering disebut 
  sebagai Rest Parameter

- Tambahkan tiga titik (...) 
  sebelum parameter terakhir. 

- Jika ada parameter lain sebelumnya, 
  nilainya tidak menjadi bagian 
  dari array yang dihasilkan rest parameter.
*/

// terima argument dlm bentuk array
function myFood(...name) {
  console.log("Food :", name);
}

myFood("Jenang", "Nasgor", "Bandeng Presto");

// param lain != bagian dari array of rest param
function cekNonRest(thing, ...color) {
  console.log("Thing :", thing);
  console.log("color :", color);
}

cekNonRest("Pillow", "White", "Orange", "Red", "Tosca");

// method array.length juga dapat digunakan pada rest parameter
function testLengthOfName(...name) {
  console.log(name.length);
}

testLengthOfName("Brian", "Ari", "Andhi", "Rafli"); //4

// kerap digunakan ketika kita melakukan destructuring array
// menangkap seluruh sisa elemen terakhir dalam bentuk array.
const idea = ["time", "peace", "love", "justice"];

const [pertama, kedua, ...rest] = idea;
console.log(pertama);
console.log(kedua);
console.log(rest);
