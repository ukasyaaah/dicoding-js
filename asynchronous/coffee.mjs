export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimasi = 2000;
    let isSuccess = false;

    const detik = Math.ceil(estimasi / 1000);
    console.log(`Mohon tunggu, Sedang dibuat dalam ${detik} detik`);

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Gagal Bikinin Kopi"));
        return;
      }

      console.log("Kopi Sudah Jadi");
      resolve(name);
    }, estimasi);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimasi = 5000;
    let isSuccess = false;

    const detik = Math.ceil(estimasi / 1000);

    console.log(`Kopi Sedang di kirim dalam ${detik} detik`);

    setTimeout(() => {
      const angka = Math.random();
      if (angka > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Kopi gagal diantar"));
        return;
      }

      console.log("Kopi udah sampai ke meja");
      resolve(name);
    }, estimasi);
  });
}
