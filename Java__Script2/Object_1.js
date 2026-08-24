const TinderUser = {};

TinderUser.id = 101;
TinderUser.Name = "MONIL";
TinderUser.isLoging = true ;

// console.log(TinderUser);

const Ometv = {
    email : "monilmdavra@gmail.com",
    UserFullName : {
        UserName : {
            UserFirst : "RAdha",
            UserMidal : "KRIshna",
            UserLast :"RadhaKrishna"
        }
    }
}

// console.log(Ometv.UserFullName.UserName);

const Obj1 = {1 : "A", 2 : "B", 3 : "C"};
const Obj2 = {4 : "E",5 : "F",6 : "G"};
const Obj3 = {7 : "h",8 : "i",9 : "j"};
const Obj4 = {10 : "k",11 : "l",12 : "j"};

// const Obj3 = (Obj1 + Obj2);
// const Obj5 = Object.assign({} ,Obj1, Obj2, Obj3, Obj4);
const Obj5 = {...Obj1, ...Obj2, ...Obj3, ...Obj4}
// console.log(Obj5);

const User = [
    { id : 101, 
    email : "Monil@gmail.com",
    Name : "RAJADHIRAJ"
    },
    {
        City : "Surat",
        Arya : "Varacha"
    }
]
User[1].email
// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

// console.log(TinderUser.hasOwnProperty('isLoging'));

const Stud = {
    sName : "MONIL",
    sFees : 25000,
    sCity : "Surat",
};

// Stud.sCity
const {sCity: sc} = Stud;
console.log(sc);
// jason data stuchar and formet api 
// {
//     "name" = "Monil",
//     "Student" ="collage",
//     "city" = "Surat",
//     "Arya" ="Varacha"
//     };
