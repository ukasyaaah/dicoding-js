/**
 * adalah sebuah alat untuk
 * menghasilkan dokumentasi kode JavaScript.
 *
 * JSDoc comment harus dimulai dengan /**.
 * 
 * JSDoc tag diawali dengan 
 * simbol @ dan diikuti dengan nama tag-nya.
 * 
 * @param: menyediakan 
 *         nama, tipe data, dan deskripsi 
 *         untuk function parameter.
 * @returns: menginformasikan 
 *           nilai yang akan function keluarkan.
 */

/** Say Hello to World */
function sayHello() {
  console.log("Hello World");
}

/**
 *
 * @param {number} numA
 * @param {number} numB
 * @returns  {number} Sum of numA and numB
 */
function add(numA, numB) {
  return numA + numB;
}
