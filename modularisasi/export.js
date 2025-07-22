/* Export :
 keyword yang kita gunakan untuk melabeli
 suatu function/method/variable agar dapat
 diakses dari luar modul saat ini.
*/

/*Export terdiri dari dua jenis, yaitu 
 - default export : 
    - cara kita untuk mengekspor minimal satu 
      function/method/variable di sebuah modul.

    - Import default export ga butuh kurung kurawal

    - cocok digunakan untuk menghindari 
      conflict ketika mengimpornya, 
      krn ga harus pake nama aslinya
      
 - named export :
    - cocok digunakan ketika ingin mengekspor 
      banyak nilai dari satu modul.
    
*/

export default function Sapa() {
  console.log("Halo Ges");
}

function named() {
  console.log("Ini Named");
}

// Eksport di akhir
export { named };
