const Heors = ["Thor","Ironman","Spiderman"];
const Dc_Heors = ["Superman","Flash","Batman"];

// Heors.push(Dc)
// console.log(Heors);
// console.log(Heors[3][1]);

// concat method
// const AllHeors = Heors.concat(Dc_Heors);
// console.log(AllHeors);

// declar new veriabal and stor all data
const NewHeors = [...Heors, ...Dc_Heors];
console.log(NewHeors);

// 
const Array01 = [1, 2, 3,[4, 5, 6,], 7, [6, 7,[4, 5]]];
const Real_Array01 = Array01.flat(Infinity);
console.log(Real_Array01);

console.log(Array.isArray("MONIL"));
console.log(Array.from("MONIL"));
console.log(Array.isArray({name : "MONIL"})); // interesting

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;
console.log(Array.of(Score1, Score2, Score3));


