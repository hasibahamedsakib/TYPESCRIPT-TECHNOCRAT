// reference object
const users: {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  id: 101,
  firstName: "Md",
  middleName: "Rahim",
  lastName: "Mia",
};

const userName = users.firstName + users.middleName + users.lastName;

console.log(users);
console.log(userName);

// optional type object
const newUser: {
  id: number;
  firstName: string;
  middleName?: string;
  lastName?: string;
} = {
  id: 101,
  firstName: "Rahim",
};
console.log(newUser);

// object literal type
const student: {
  id: number;
  batch: string;
  course: "Programming Hero"; //literal type
  name: string;
  isMarried: boolean;
} = {
  id: 1768,
  batch: "web-7",
  course: "Programming Hero",
  name: "hasib",
  isMarried: false,
};
console.log(student);
