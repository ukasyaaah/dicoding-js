export function makeCoffee(callback) {
  const estimasi = 5000;
  let isSuccess = false;

  const detik = Math.ceil(estimasi / 1000);
  console.log(`Mohon tunggu, Sedang dibuat dalam ${detik} detik`);

  setTimeout(() => {
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error("Gagal Bikinin Kopi"), null);
      return;
    }

    console.log("Kopi Sudah Jadi");
    callback(null , name);
  }, estimasi);
}

export function sendCoffee(callback) {
  const estimasi = 2000;
  let isSuccess = false;

  const detik = Math.ceil(estimasi / 1000);

  console.log(`Kopi Sedang di kirim dalam ${detik} detik`);

  setTimeout(() => {
    const angka = Math.random();
    if (angka > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      console.log("Kopi gagal diantar");
      return;
    }

    console.log("Kopi udah sampai ke meja");
    callback();
  }, estimasi);
}
