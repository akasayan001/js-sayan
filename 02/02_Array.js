const name =["sayan","saya","say"];
const newName=["rahul","rahu","rah"];
const myName=name.concat(newName);
console.log(myName);

// spread operator
const newMyName=[...name,...newName];
console.log(newMyName);

// flat

const arr=[1,2,3,6,[7,6],8,9,[4,5,6,[9,8,7]]]
const newArray=arr.flat(Infinity)
console.log(newArray);

console.log(Array.isArray("sayan"));

console.log(Array.from("sayan"));
console.log(Array.from({name:"sayan"})); // return empty array


let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1,score2));



