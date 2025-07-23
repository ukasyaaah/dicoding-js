/*
- Promise adalah sebuah objek khusus 
  yang akan menentukan keberhasilan 
  atau kegagalan dari proses asynchronous.

  Promise bekerja dengan 
  tiga buah state atau kondisi.
   - Pending: 
     kondisi awal sebuah proses berjalan. 
     Belum ada hasil yang diharapkan.

   - Fulfilled: 
     kondisi keberhasilan proses 
     dan akan mengembalikan nilai positif. 
     Misalnya mengembalikan isi berkas 
     jika pembacaannya sukses.

   - Rejected: 
     operasi terjadi kegagalan dan membawa alasan 
     atau data mengenai masalah ini. Biasanya, 
     data kegagalan berupa instance dari class Error.

  then : 
   -  method yang akan menangani atau 
      menerima hasil dari proses asinkron.
      
   -  Method ini menerima dua buah callback, 
      yaitu callback untuk menangani keberhasilan (fulfilled) 
      dan callback untuk menangani kegagalan (rejected).


*/
