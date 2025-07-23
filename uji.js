function hitung(cart) {
  const total = 0;

  return cart.reduce((acc, item) => {
    if (typeof item.price === "number") {
      return acc + item.price;
    } else {
      console.log("Tipe data price tidak sesuai", item);
      return acc;
    }
  }, total);
}
const shoppingCart = [
  { name: "Apple", price: 300 },
  { name: "Banana", price: 120 },
  { name: "Orange", price: 130 },
  { name: "Watermelon", price: "160" },
  { name: "Pineapple", price: null },
  { name: "Grape", price: null },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${hitung(shoppingCart)}`);
let counter = 0;
function increment() {
  counter++;
}


