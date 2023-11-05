// ts normal function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
let total = add(5);
console.log(total);

// arrow function
const sum = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};
const totalSum = sum(10, 20, 30);
console.log(totalSum);

// object=> method
const poorPeople = {
  name: "Mir",
  balance: 10,
  newBalance(balance: number): string {
    return `My old balance is ${this.balance} New Total Balance is ${
      this.balance + balance
    } .`;
  },
};

const balance = poorPeople.newBalance(100);
console.log(balance);

// multiple value
const array: number[] = [2, 4, 6, 8, 10];
const newArray: number[] = array.map((value: number): number => {
  return value + value;
});
console.log(newArray);
