import { makeCoffee, sendCoffee } from "./coffee.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffee(() => {
  sendCoffee(() => {
    console.log('Kopi sudah habis');
    console.log('Terima Kasih');
  });
});
