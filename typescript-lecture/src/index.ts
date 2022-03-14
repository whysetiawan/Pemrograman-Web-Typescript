// let fullName: string = "Wahyu Setiawan";
// let luckyNumber: number = 17;
// let isMarried: boolean = false;
// let listOfLuckyNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let fullName2: string;

// fullName2 = true;

// function helloWorld(args: string[]): string {
//   return "Hello from " + args;
// }

// helloWorld(["1", "2", "3"]);

// function helloWorld(args: any): string {
//   return "Hello" + args;
// }

// const helloArrow = (args: string): any => {
//   return "Hello" + args;
// };

// type TFirstName = string;

// type TAddresses = {
//   address1: string;
//   address2: string;
// };

// type TPerson = {
//   firstName: TFirstName;
//   lastName: string;
//   age?: number;
//   address: TAddresses;
//   type: number;
// };

// const person: TPerson = {
//   firstName: "Sherlock",
//   lastName: "Holmes",
//   address: {
//     address1: "221B Baker Street",
//     address2: "London",
//   },
//   type: 1,
// };

// type TLongitude = string | number;
// type TRole = "admin" | "user" | "guest" | "superadmin";
// type TRoleNumber = 0 | 1 | 2;
// type TRoleMerge = TRole & TRoleNumber;

// const role: TRoleMerge = 3;

interface IHouse {
  address: string;
  type: number;
}

interface IPerson extends IHouse {
  firstName: string;
  lastName: string;
  age?: number | string;
}

function genericType<Type>(args: Type) {
  return {
    state: args,
  };
}

const personFromFunc = genericType<IPerson>({
  firstName: "Sherlock",
  lastName: "Holmes",
  address: "221B Baker Street",
  type: 1,
});

interface ICar {
  brand: string;
  type: number;
  power: string;
}

const carFromFunc = genericType<ICar>({
  brand: "Toyota",
  type: 1,
  power: "100hp",
});

const genericTypeString = genericType<string>("Hello World");
genericTypeString.state.toUpperCase();

console.log("generic type string", genericTypeString.state);
console.log("generic type car", carFromFunc.state);
console.log("generic type of person", personFromFunc.state);

class Person<Type> {
  spouse: Type;

  constructor(spouse: Type) {
    this.spouse = spouse;
  }
}

const personNumber = new Person<number[]>([1, 2, 3]);

personNumber.spouse;

const person = new Person<IPerson>({
  firstName: "Zendaya",
  lastName: " ",
  address: "Cimahi",
  type: 1,
  age: 18,
});
