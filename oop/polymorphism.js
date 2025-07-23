class SmartPhone {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.brand}`);
  }
}

class Ios extends SmartPhone {
  // Overriding Constructor
  constructor(color, brand, model, price) {
    super(color, brand, model);
    this.price = price;
  }

  // Overriding Function
  charging() {
    console.log(`Charge ${this.model} with fast charging`);
  }
}

const iPhone = new Ios("Black", "Apple", "16 Pro", 20000000);
iPhone.charging();
console.log(iPhone);
