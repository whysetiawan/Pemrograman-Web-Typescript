interface IHouse {
  address: string;
  type: number;
}

interface IPerson extends IHouse {
  firstName: string;
  lastName: string;
  age?: number | string;
}

const person: IPerson = {
  address: "221B Baker Street",
  firstName: "Sherlock",
  lastName: "Holmes",
  type: 1,
  age: 27,
};

// ignore export
export {};
