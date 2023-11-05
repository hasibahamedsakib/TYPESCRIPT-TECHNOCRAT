// destructuring
{
  // blockScope
  const student: {
    id: number;
    email: string;
    batch: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    contactNo: string;
  } = {
    id: 1775,
    email: "example@yahoo.com",
    batch: "web-7",
    name: {
      firstName: "Hasib",
      middleName: "Ahamed",
      lastName: "Sakib",
    },
    contactNo: "0171548792",
  };
  //   console.log(student);

  const {
    id,
    email,
    contactNo,
    name: { firstName, lastName, middleName: midName }, // destructure object.
  } = student;
  console.log(firstName, " ", midName, " ", lastName);

  // Array destructuring
  const players = ["sakib", "tamim", "taskin", "nasir", "souma"];
  const [, x, y, ...rest] = players;
  console.log(x);
  console.log(rest);

  // blockScope
}
