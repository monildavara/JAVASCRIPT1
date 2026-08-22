let MyDate = new Date();
// console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toTimeString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toUTCString());

// console.log(typeof MyDate);

// let MyCreatedDate = new Date(2005, 0, 22);
// let MyCreatedDate = new Date(2005, 11, 22, 23, 45);
// let MyCreatedDate = new Date("2026-12-22");
let MyCreatedDate = new Date("12-22-2005");
// console.log(MyCreatedDate.toDateString());
// console.log(MyCreatedDate.toLocaleString());
let MyTimeStamp = Date.now();
// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getMonth());
console.log(NewDate.getDay());

NewDate.toLocaleString("default", {
    weekday:"long" ,
    timeZone : "long",
})






