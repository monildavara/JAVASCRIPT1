const Name = "Monil M ";
const RepoCount = 50;

//console.log(Name + RepoCount + " value");
// string inter callesan ==\/
// console.log(`Hello My Name is ${Name} and my repo count ${RepoCount}`);

const gameName = new String("Monil_Davra");
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));

const NewString = gameName.substring(0, 5);
console.log(NewString);
const NewString1 = gameName.slice(-11 , 9);
console.log(NewString1);
const NewString2 = gameName.trim("RADHAKARISHNA");
console.log(NewString2);

const Url = "http/www.com/Monildavra%200loyalty";
console.log(Url.replace('%200' , '__'));
console.log(Url.includes('loyalty'));
console.log(gameName.split('_'))



