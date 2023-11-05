// Type Aliases
{
  //

  type Name = string;
  type Age = number;
  type isAdmin = boolean;
  type Car = {
    name: string;
    brand: string;
    year: number;
    registration?: boolean;
  };

  const myCar: Car = {
    name: "Volvo-X-2022",
    brand: "Volvo",
    year: 2021,
    registration: true,
  };

  const myCar2: Car = {
    name: "Audi-xenon-62",
    brand: "Audi",
    year: 2020,
  };

  const name: Name = "The String Name";
  const age: Age = 50;
  const admin: isAdmin = false;

  // type aliases for function

  type Add = (a: number, b: number, c: number) => number;
  const add: Add = (x, y, z) => x + y - z;
  let result = add(5, 6, 3);
  console.log(result);

  //
}
