{
  let age = 17;
  let result = age > 18 ? "Adult" : "Not Adult";
  console.log(result);

  // nullish operator
  type User = {
    id: number;
    name: string;
    email?: string;
    address: {
      present: string;
      permanent?: string;
    };
  };

  const user: User = {
    id: 101,
    name: "hasib",
    // email: 'h@gmail.com',
    address: {
      // permanent: "nothing",
      present: "Rangpur",
    },
  };

  const address = user?.address?.permanent ?? "No Permanent address ";
  console.log(address);
  console.log(user?.address?.permanent);
}
