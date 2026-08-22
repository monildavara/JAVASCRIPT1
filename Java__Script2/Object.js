
const mySym = Symbol("Key1")
const User = {
    Name : "MONIL" ,
    "Full Name" : "MONIL DAVRA" ,
    Age : 21,
    Location : "surat ",
    email : "monil@gmail.com" ,
    [mySym]: "MyKey1",
    isLoggedIn : false ,
    LastLoginDays : ["MONDAY" , "SaturDay"]
};

// console.log(User.email);
// console.log(User["Full Name"]);
// console.log(User["email"]);
// console.log(User[mySym]);

User.email = "Monil@gmail.com";
// Object.freeze(User);
User.email = "Monil@Microsoft.com";
// console.log(User);

User.greeting = function(){
    console.log("HELLO JS USER");
}
User.greetingTwo = function(){
    console.log(`HELLO JS USER, ${this.nam}`);
}
console.log(User.greeting());
console.log(User.greetingTwo());



