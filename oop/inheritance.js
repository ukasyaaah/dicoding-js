class SmartPhone {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
}

class Ios extends SmartPhone {}
class Android extends SmartPhone {}

const iphone = new Ios("Silver", "Apple", "16 Pro");
console.log(iphone.model);
