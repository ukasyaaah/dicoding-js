// const error = new Error("Hayo Error");
// console.log(error);
const stok = 11;
if (stok < 10) {
  throw new Error("Stok Kurang");
}

// catch error

try {
  console.log("ini try");
} catch (err) {
  console.log("ini catch");
} finally {
  console.log("finally pasti di eksekusi");
}
