let name = 'Nadiia';
let age = 14;
let login = 'Admin';

let hasCar = false;

let user = {
    name: 'Nadiia',
    age: 20,
    job: {
        title: 'waitress',
        payment: '100 hrn'
    }
}

let nul = null;
let und = undefined;

// let bInt = BigInt(9937239292);
//
// let symn = Symbol('s');

// console.log(user, 'user info');
// console.log(name, age);
//
//
// console.log(2 + 2 -  2 * 3);
// console.log(14 % 3);
//
//
// console.log(user.job);

//
// console.log(user);
// user.age = 25;
// user.phone = 'Samsung';
//
// console.log(user);


// if (age > 18){
//     console.log('WELCOME');
// }  else if (login === 'Admin'){
//     console.log('WELCOME');
// }
//
// else{
//     let message = 'You are too young';
//     console.log(message);
// }


// || - OR
//  & - AND

// let isNameAllowed = name === 'Oleg' || name === 'Anna';
//
// if (age>18 || login === 'Admin'  &&  isNameAllowed){
//     console.log('WELCOME');
// }   else{
//      let message = 'You are too young';
//      console.log(message);
//  }


switch (name) {
    case 'Nadiia':
        console.log('This is me');
        break;

    case 'Bird':
        console.log('SHO TY');
        break;

    case 'Dimon':
    case 'Sasha':
        console.log('Valy ih');
        break;

    default:
        console.log('unknown name')
}