import { makeCoffee, sendCoffee } from "./coffee.mjs";

console.log("Saya masuk ke cafe.");

const order = "Kopi Gula Aren";

console.log(`Di cafe, saya pesen ${order} `);

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Barista memberi saya ${value}`);
    console.log(`Saya menerima ${value} dan menghabiskannya`);
  })
  .catch((error) => {
    console.error(error.message);
    throw error;
  });
