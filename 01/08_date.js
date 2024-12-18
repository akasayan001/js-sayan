let date=new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
let mydate=new Date(2020,0,25)
console.log(mydate.toDateString());
let mytimestapm=Date.now();
console.log(mytimestapm);//mili second
console.log(mydate.getTime());//mili second
console.log(Math.round(Date.now()/1000));//convert second into mili second

let newdate=new Date();
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth());
console.log(newdate.getFullYear());

console.log(newdate.toLocaleString("default",{
    month: "long"
}))




