// Union Type
{
  const myMulti = (x: number, y: string | number): number | string => x * y;
  let result = myMulti(5, 5);
  console.log(result);

  type FrontedDev = "Normal developer" | "Strong developer";
  type BackendDev = "Node Js developer" | "Php & Laravel developer";
  type Developer = FrontedDev | BackendDev;

  const developer: FrontedDev = "Strong developer";
  const newDev: Developer = "Node Js developer";

  // object
  type User = {
    name: string;
    email?: string;
    bloodGroup: "o+" | "b+" | "ab+" | "ab-";
  };
  const user: User = {
    name: "Mofiz",
    email: "mofi@gmail.com",
    bloodGroup: "b+",
  };
  const user1: User = {
    name: "Mofizaa",
    email: "mofizaa@gmail.com",
    bloodGroup: "o+",
  };

  type Frontend = {
    skills: string[];
    language: "Javascript";
  };
  type Backend = {
    skills: string[];
    BackendLang: "Node Js" | "Python" | "PHP";
  };
  type FullStack = Frontend & Backend;
  const fullstackDeveloper: FullStack = {
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "SCSS"],
    language: "Javascript",
    BackendLang: "Node Js",
  };
  console.log(fullstackDeveloper);
}
