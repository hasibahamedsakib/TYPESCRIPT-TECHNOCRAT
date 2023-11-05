"use strict";
// ts normal function
function add(num1, num2 = 10) {
    return num1 + num2;
}
let total = add(5);
console.log(total);
// arrow function
const sum = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
const totalSum = sum(10, 20, 30);
console.log(totalSum);
// object=> method
const poorPeople = {
    name: "Mir",
    balance: 10,
    newBalance(balance) {
        return `My old balance is ${this.balance} New Total Balance is ${this.balance + balance} .`;
    },
};
const balance = poorPeople.newBalance(100);
console.log(balance);
// multiple value
const array = [2, 4, 6, 8, 10];
const newArray = array.map((value) => {
    return value + value;
});
console.log(newArray);
