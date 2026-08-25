// function AddTwoNumber(Num1 , Num2) {
//     console.log(AddTwoNumber);
//     console.log(Num1 +  Num2); // this call peramiters
    
// }
// AddTwoNumber(5, null); // this call arguments
//========================================================
// function AddTwoNumber(Num1 , Num2) {
    // console.log(AddTwoNumber);
    // let result = Num1 +  Num2; // this call peramiters
    // return result;
    // return Num1 + Num2;
// }
// const result = AddTwoNumber(5, 6); // this call arguments
//console.log("TWO NO SUM " + result);

// function loginuser(username){
    // if(username === undefined) {
        // console.log("pelse enter the user name ");
        // return
    // }
    // return `${username} Just loged in`

// }
// console.log(loginuser());

// function CalculateCart (...Num1) {
//     return Num1;
// }
// console.log(CalculateCart(200, 450, 300, 10000, 2000));

const user1 = {
    user1Name : "raja",
    price : 199
};

function Cart(total){
    // console.log(`User name is ${total.user1Name} and produsct Price is ${total.price} $`);
}
// Cart(user1);
Cart({
    user1Name : "raja",
    price : 199
});
const Item = [200, 400, 900, 125];
function returnvalue(getArray) {
    return getArray[1];
}
console.log(returnvalue(Item));
