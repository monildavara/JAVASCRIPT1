// const User = {
//     UserName : "MONIL",
//     Price : 999,

//     WelcomeMessage : function(){
//         console.log(`${this.UserName} , Welcome to MyWebside`);
//         console.log(this);
        
//     }

// }
// User.WelcomeMessage();
// User.UserName = "Ram";
// User.WelcomeMessage();

// console.log(this);

// function Chai (){
//     let UserName = "MONIL";
//     console.log(this);
// }
// Chai();

// const Get = function() {
//     let UserName = "MONIL";
//     console.log(this);
// }
const Get = () => {
    let UserName = "MONIL";
    console.log(this.UserName);
}
// Get();

// expliseet 
// const Addtwo = (Num1 , Num2) => {
//     return Num1 + Num2;

// }
// console.log(Addtwo(3, 4));

// implicit 
// const Addtwo = (Num1 , Num2) =>  Num1 + Num2;
// const Addtwo = (Num1 , Num2) =>  (Num1 + Num2);
const Addtwo = (Num1 , Num2) =>  ({USERNAME : "MONIL M DAVRA"});


console.log(Addtwo(3, 4));