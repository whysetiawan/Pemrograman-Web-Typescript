interface ICar {
  brand: string;
  type: number;
  power: string;
}

function genType<T>(arg: T): T {
  return arg;
}

const generic = genType<string>("Test");
// Generic car akan mempunyai type yang sama dengan string

const genericCar = genType<ICar>({
  brand: "Toyota",
  power: "100hp",
  type: 1,
});
// Generic car akan mempunyai type yang sama dengan ICar

class Car<ICar> {
  brand: ICar;
  constructor(brand: ICar) {
    this.brand = brand;
  }
}

const instanceOfCar = new Car({
  brand: "Toyota",
  power: "100hp",
  type: 1,
});

// Generic intanceOfCar akan mempunyai type yang sama dengan Car
