// if (expression) statement;

const bosen = true;

if (bosen) {
  console.log("Liburan");
} else {
  console.log("Ngoding");
}

const nilai = 90;

if (nilai >= 97) {
  console.log("Selamat, Kamu lulusan terbaik!");
} else if (nilai >= 74) {
  console.log("Selamat, Kamu Lulus!");
} else {
  console.log("Coba lagi yaa");
}

// Ternary Operator
// condition ? true : false
let isAdmin = true;

console.log(`Selamat Datang ${isAdmin ? "Admin" : "Tamu"} `);

// Switch Case
let fruit = "banana";

switch (fruit) {
  case "pisau":
    console.log("Iam Banana");
    break;
  case "apple":
    console.log("Iam Apple");
    break;
  default:
    console.log("Iam a Man");
}
