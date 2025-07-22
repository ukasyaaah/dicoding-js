// Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif.
const user = {
  name: "Ukhasyah",
  country: "Indonesia",
  age: 17,
};

// 3 Cara akses Propery di Object
console.log(user);
console.log(user.name);
console.log(user["country"]);

const { name, country } = user;
console.log(name, country);

// Ubah nilai properti pada Object
const Account = {
  saldo: 2000,
};

Account.saldo = 2000000;
console.log(Account.saldo);

// 2 cara hapus properti pada object
delete Account.saldo;
delete Account['saldo']
console.log(Account.saldo);
