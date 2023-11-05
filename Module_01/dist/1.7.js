"use strict";
// spreed operator with array
const batsman = ["tamim", "sakib", "Miraz"];
const bowler = ["Fizz", "Taskin", "Hasan"];
const team = [];
team.push(...batsman, ...bowler);
console.log(team);
// spreed operator with object
const bangladeshiOpener = {
    player1: "Tamim",
    player2: "Liton",
    player3: "Anamul",
};
const MiddleOrder = {
    mid1: "Mospique",
    mid2: "Mahamudullah",
    mid3: "Miraz",
};
const bangladeshiBatsmen = Object.assign(Object.assign({}, bangladeshiOpener), MiddleOrder);
console.log(bangladeshiBatsmen);
// rest operator
const greatFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hello my friend ${friend}`));
};
greatFriends("Rahim", "Karim", "Arshad", "Salam", "Kalam");
