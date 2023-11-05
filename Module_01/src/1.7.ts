// spreed operator with array
const batsman: string[] = ["tamim", "sakib", "Miraz"];
const bowler: string[] = ["Fizz", "Taskin", "Hasan"];
const team: string[] = [];

team.push(...batsman, ...bowler);
console.log(team);

// spreed operator with object
const bangladeshiOpener: {
  player1: string;
  player2: string;
  player3: string;
} = {
  player1: "Tamim",
  player2: "Liton",
  player3: "Anamul",
};

const MiddleOrder: {
  mid1: string;
  mid2: string;
  mid3: string;
} = {
  mid1: "Mospique",
  mid2: "Mahamudullah",
  mid3: "Miraz",
};

const bangladeshiBatsmen = { ...bangladeshiOpener, ...MiddleOrder };
console.log(bangladeshiBatsmen);

// rest operator

const greatFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hello my friend ${friend}`));
};
greatFriends("Rahim", "Karim", "Arshad", "Salam", "Kalam");
