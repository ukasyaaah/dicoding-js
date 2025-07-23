/*
- proses untuk membungkus data 
  di suatu wadah yang disebut dengan class.

- Menyembunyikan data adalah 
  bagian kunci dari encapsulation.

- Karena kita menerapkan encapsulation, 
  kita harus mengatur akses properti & method,
  kita dapat menerapkan getter dan setter.
*/

class Tiket {
  #jadwal;
  constructor(tujuan, jadwal) {
    this.tujuan = tujuan;
    this.#jadwal = jadwal;
  }

  set jadwal(jadwal) {
    console.log("Anda tidak diperbolehkan mengubah jadwal");
  }

  get jadwal() {
    return this.jadwal;
  }
}

let tiket = new Tiket("Jakarta", "Senin");

console.log(tiket);
