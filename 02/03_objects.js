const mySym= Symbol("key1")
const myInfo={
    name:"sayan",
    age: 23,
    [mySym]:"mykey1",
    email:"sayanchakraborty213@gmail.com",
    location:"kolkata",
    isLogin: true,
    loginDay: ["sunday","monday"]
}
console.log(myInfo.email);   //bad way
console.log(myInfo["email"]); // good way
console.log(myInfo[mySym]);
myInfo.email="sayan@gmail.com";
console.log(myInfo["email"]);
// Object.freeze(myInfo);// lock objects(can not change)
myInfo.email="sayan13@gmail.com";
console.log(myInfo);

myInfo.gretting=function(){
    console.log("hello");
}
myInfo.gretting1=function(){
    console.log(`hello ${this.name}`);
    
}
console.log(myInfo.gretting());
console.log(myInfo.gretting1());






